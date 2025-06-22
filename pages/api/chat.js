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

  try {
    // 1. Load embeddings
    const contextFilePath = path.join(process.cwd(), 'lib', 'note-embeddings.json');
    const contextData = await fs.readFile(contextFilePath, 'utf-8');
    const allChunks = JSON.parse(contextData);

    // 2. Embed the question
    const qEmbedding = await getEmbedding(question);

    // 3. Find top 5 most similar chunks
    const scored = allChunks.map(chunk => ({
      ...chunk,
      score: cosineSimilarity(qEmbedding, chunk.embedding)
    }));
    scored.sort((a, b) => b.score - a.score);
    const topChunks = scored.slice(0, 5);
    const contextText = topChunks.map(c => c.text).join('\n\n---\n\n');

    // 4. Build the prompt for Gemini
    const apiKey = process.env.GEMINI_API_KEY;
    const model = 'gemini-1.5-flash-latest';
    const systemPrompt = `You are a helpful chatbot for a university student's notes website. Your name is Georgina's Assistant.
You must answer questions based ONLY on the provided notes context.
If the answer is not found in the notes, you MUST say "I'm sorry, I don't have information on that topic based on the provided notes."
Be concise and helpful. Format your answers clearly. You can use markdown for formatting if it helps.
When writing mathematical expressions or formulas, ALWAYS use LaTeX math syntax (enclose inline math in $...$ and display math in $$...$$). Do NOT use HTML tags for math.

Here are the most relevant notes:

${contextText}`;

    // Build conversation history for Gemini
    const contents = [];
    if (history) {
      history.forEach(turn => {
        const role = turn.role === 'assistant' ? 'model' : 'user';
        contents.push({ role: role, parts: [{ text: turn.text }] });
      });
    }
    contents.push({ role: 'user', parts: [{ text: question }] });

    // Call Gemini
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents,
        system_instruction: { role: 'system', parts: [{ text: systemPrompt }] },
      }),
    });
    if (!response.ok) {
      const err = await response.text();
      return res.status(500).json({ message: 'Gemini API error', error: err });
    }
    const data = await response.json();
    const answer = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, something went wrong.';
    return res.status(200).json({ answer });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: 'Internal server error', error: e.toString() });
  }
} 