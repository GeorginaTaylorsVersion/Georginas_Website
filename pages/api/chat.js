import { promises as fs } from 'fs';
import path from 'path';
import fetch from 'node-fetch';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

function cosineSimilarity(a, b) {
  let dot = 0, aNorm = 0, bNorm = 0;
  for (let i = 0; i < a.length; ++i) {
    dot += a[i] * b[i];
    aNorm += a[i] * a[i];
    bNorm += b[i] * b[i];
  }
  return dot / (Math.sqrt(aNorm) * Math.sqrt(bNorm));
}

async function getEmbedding(text) {
  const res = await fetch('https://api.openai.com/v1/embeddings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      input: text,
      model: 'text-embedding-ada-002',
    }),
  });
  if (!res.ok) throw new Error(await res.text());
  const data = await res.json();
  return data.data[0].embedding;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { question, history } = req.body;
  if (!question) {
    return res.status(400).json({ message: 'Question is required.' });
  }

  // Check for required API keys
  if (!OPENAI_API_KEY) {
    console.error('Missing OpenAI API key');
    return res.status(503).json({ message: 'Sorry, the assistant is temporarily unavailable due to a configuration issue (OpenAI API key missing).' });
  }

  try {
    // 1. Load embeddings
    const contextFilePath = path.join(process.cwd(), 'lib', 'note-embeddings.json');
    let contextData, allChunks;
    try {
      contextData = await fs.readFile(contextFilePath, 'utf-8');
      allChunks = JSON.parse(contextData);
    } catch (err) {
      console.error('Error loading note embeddings:', err);
      return res.status(500).json({ message: 'Sorry, the assistant is temporarily unavailable due to a server error (embeddings missing).' });
    }

    // 2. Embed the question
    let qEmbedding;
    try {
      qEmbedding = await getEmbedding(question);
    } catch (err) {
      console.error('OpenAI embedding error:', err);
      if (err.message && err.message.includes('quota')) {
        return res.status(503).json({ message: 'Sorry, the assistant is temporarily unavailable due to API quota limits.' });
      }
      return res.status(500).json({ message: 'Sorry, something went wrong while processing your question. Please try again later.' });
    }

    // 3. Find top 5 most similar chunks
    const scored = allChunks.map(chunk => ({
      ...chunk,
      score: cosineSimilarity(qEmbedding, chunk.embedding)
    }));
    scored.sort((a, b) => b.score - a.score);
    const topChunks = scored.slice(0, 5);
    const contextText = topChunks.map(c => c.text).join('\n\n---\n\n');

    // 4. Build the prompt for OpenAI
    const systemPrompt = `You are a helpful chatbot for a university student's notes website. Your name is Georgina's Assistant.\nYou must answer questions based ONLY on the provided notes context.\nIf the answer is not found in the notes, you MUST say \"I'm sorry, I don't have information on that topic based on the provided notes.\"\nBe concise and helpful. Format your answers clearly. You can use markdown for formatting if it helps.\nWhen writing mathematical expressions or formulas, ALWAYS use LaTeX math syntax (enclose inline math in $...$ and display math in $$...$$). Do NOT use HTML tags for math.\n\nHere are the most relevant notes:\n\n${contextText}`;

    // Build conversation history for OpenAI
    let messagesArr = [];
    if (history) {
      history.forEach(turn => {
        const role = turn.role === 'assistant' ? 'assistant' : 'user';
        messagesArr.push({ role: role, content: turn.text });
      });
    }
    messagesArr.push({ role: 'user', content: question });

    // Call OpenAI Chat Completion
    let response;
    try {
      response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: systemPrompt },
            ...messagesArr
          ],
          temperature: 0.2,
        }),
      });
    } catch (err) {
      console.error('OpenAI API network error:', err);
      return res.status(503).json({ message: 'Sorry, the assistant is temporarily unavailable due to a network error.' });
    }
    if (!response.ok) {
      const err = await response.text();
      console.error('OpenAI API error:', err);
      if (err.includes('quota') || err.includes('exceeded')) {
        return res.status(503).json({ message: 'Sorry, the assistant is temporarily unavailable due to API quota limits.' });
      }
      return res.status(500).json({ message: 'Sorry, something went wrong while generating an answer. Please try again later.' });
    }
    const data = await response.json();
    const answer = data.choices?.[0]?.message?.content;
    if (!answer || answer.trim() === '' || answer.trim().toLowerCase().includes('something went wrong')) {
      return res.status(200).json({ answer: "I'm sorry, I don't have information on that topic based on the provided notes." });
    }
    return res.status(200).json({ answer });
  } catch (e) {
    console.error('Internal server error:', e);
    return res.status(500).json({ message: 'Sorry, something went wrong on our end. Please try again later.' });
  }
} 