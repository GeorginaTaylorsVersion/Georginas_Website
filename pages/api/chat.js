import { promises as fs } from 'fs';
import path from 'path';

// Function to recursively find all markdown files
async function getAllMarkdownFiles(dir) {
  let files = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(await getAllMarkdownFiles(fullPath));
    } else if (entry.isFile() && path.extname(fullPath) === '.md') {
      files.push(fullPath);
    }
  }
  return files;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { question, history } = req.body;

  if (!question) {
    return res.status(400).json({ message: 'Question is required.' });
  }

  try {
    // 1. Read all notes to build the context
    const notesDir = path.join(process.cwd(), 'notes');
    const noteFiles = await getAllMarkdownFiles(notesDir);
    let allNotesContent = '';

    for (const file of noteFiles) {
        const content = await fs.readFile(file, 'utf-8');
        const relativePath = path.relative(notesDir, file);
        allNotesContent += `--- START OF NOTE: ${relativePath} ---\n\n${content}\n\n--- END OF NOTE: ${relativePath} ---\n\n`;
    }

    // 2. Construct the prompt for the Gemini API
    const apiKey = process.env.GEMINI_API_KEY;
    console.log('Gemini API Key loaded:', !!apiKey);
    console.log('Total notes content length:', allNotesContent.length);

    const model = 'gemini-1.5-flash-latest';

    const systemPrompt = `You are a helpful chatbot for a university student's notes website. Your name is Georgina's Assistant.
    You must answer questions based ONLY on the provided notes context.
    If the answer is not found in the notes, you MUST say "I'm sorry, I don't have information on that topic based on the provided notes."
    Be concise and helpful. Format your answers clearly. You can use markdown for formatting if it helps.
    Here are all the notes:
    
    ${allNotesContent}`;
    
    // Construct conversation history for the API
    const contents = [];

    // Add previous conversation history
    if (history) {
        history.forEach(turn => {
            // Map the role from the frontend ('assistant') to the API ('model')
            const role = turn.role === 'assistant' ? 'model' : 'user';
            contents.push({ role: role, parts: [{ text: turn.text }] });
        });
    }

    // Add the new question
    contents.push({ role: 'user', parts: [{ text: question }] });

    // 3. Call the Gemini API
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        contents: contents,
        system_instruction: {
          parts: [{ text: systemPrompt }]
        }
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API Error:', errorText);
      throw new Error(`Gemini API responded with status: ${response.status}`);
    }

    const data = await response.json();
    
    // Check for a valid response structure
    if (data.candidates && data.candidates.length > 0 && data.candidates[0].content && data.candidates[0].content.parts) {
      const botResponse = data.candidates[0].content.parts[0].text;
      res.status(200).json({ answer: botResponse });
    } else {
      console.error('Invalid response structure from Gemini API:', JSON.stringify(data, null, 2));
      res.status(500).json({ message: 'Received an invalid response from the AI.' });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An internal server error occurred.' });
  }
} 