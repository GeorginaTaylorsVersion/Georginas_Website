import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { question, history } = req.body;

  if (!question) {
    return res.status(400).json({ message: 'Question is required.' });
  }

  try {
    // 1. Read the pre-built context from the JSON file.
    const contextFilePath = path.join(process.cwd(), 'lib', 'notes-context.json');
    const contextData = await fs.readFile(contextFilePath, 'utf-8');
    const { content: allNotesContent } = JSON.parse(contextData);
    
    // Truncate context to avoid exceeding Gemini's context window
    const MAX_CONTEXT_CHARS = 40000;
    const truncatedNotesContent = allNotesContent.slice(0, MAX_CONTEXT_CHARS);

    // 2. Construct the prompt for the Gemini API
    const apiKey = process.env.GEMINI_API_KEY;
    
    const model = 'gemini-1.5-flash-latest';

    const systemPrompt = `You are a helpful chatbot for a university student's notes website. Your name is Georgina's Assistant.
    You must answer questions based ONLY on the provided notes context.
    If the answer is not found in the notes, you MUST say "I'm sorry, I don't have information on that topic based on the provided notes."
    Be concise and helpful. Format your answers clearly. You can use markdown for formatting if it helps.
    
    IMPORTANT: If a question is about a concept, definition, or formula that appears anywhere in the notes, answer using the notes, even if the question is phrased differently than the notes. Try to match the user's intent to the notes as best as you can. If you find a relevant section, quote or paraphrase it in your answer.
    
    When writing mathematical expressions or formulas, ALWAYS use LaTeX math syntax (enclose inline math in $...$ and display math in $$...$$). Do NOT use HTML tags for math.
    
    Here are all the notes:
    
    ${truncatedNotesContent}`;
    
    // Construct conversation history for the API
    const contents = [];

    // Add previous conversation history
    if (history) {
        history.forEach(turn => {
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