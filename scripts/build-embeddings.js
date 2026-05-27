const fs = require('fs').promises;
const path = require('path');
const fetch = require('node-fetch');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const NOTES_DIR = path.join(process.cwd(), 'notes');
const OUTPUT_FILE = path.join(process.cwd(), 'lib', 'note-embeddings.json');

async function getAllMarkdownFiles(dir) {
  let files = [];
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        files = files.concat(await getAllMarkdownFiles(fullPath));
      } else if (entry.isFile() && path.extname(fullPath) === '.md') {
        files.push(fullPath);
      }
    }
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
  return files;
}

function chunkText(text, maxLen = 500) {
  // Split by paragraphs, then merge to maxLen
  const paras = text.split(/\n\s*\n/);
  const chunks = [];
  let current = '';
  for (const para of paras) {
    if ((current + para).length > maxLen && current) {
      chunks.push(current.trim());
      current = '';
    }
    current += para + '\n\n';
  }
  if (current.trim()) chunks.push(current.trim());
  return chunks;
}

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function getEmbedding(text, attempt = 1) {
  // Gemini embedding endpoint (v1beta)
  const model = 'gemini-embedding-001';
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:embedContent?key=${GEMINI_API_KEY}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: { parts: [{ text }] },
    }),
  });
  if (res.status === 429 && attempt <= 6) {
    const body = await res.text();
    const match = body.match(/retry in ([0-9.]+)s/i);
    const waitMs = match ? Math.ceil(parseFloat(match[1]) * 1000) + 500 : 2000 * attempt;
    console.log(`  rate-limited; sleeping ${waitMs}ms then retrying (attempt ${attempt + 1})`);
    await sleep(waitMs);
    return getEmbedding(text, attempt + 1);
  }
  if (!res.ok) throw new Error(await res.text());
  const data = await res.json();
  if (!data.embedding || !data.embedding.values) throw new Error('No embedding returned from Gemini');
  return data.embedding.values;
}

async function main() {
  if (!GEMINI_API_KEY) {
    console.error('Missing GEMINI_API_KEY in environment.');
    process.exit(1);
  }
  console.log('Finding markdown files...');
  const files = await getAllMarkdownFiles(NOTES_DIR);
  const allChunks = [];
  for (const file of files) {
    const relPath = path.relative(NOTES_DIR, file);
    const content = await fs.readFile(file, 'utf-8');
    const chunks = chunkText(content);
    for (const chunk of chunks) {
      if (chunk.trim().length < 10) continue;
      allChunks.push({ file: relPath, text: chunk });
    }
  }
  console.log(`Total chunks: ${allChunks.length}`);
  const out = [];
  for (let i = 0; i < allChunks.length; ++i) {
    const { file, text } = allChunks[i];
    console.log(`Embedding chunk ${i + 1}/${allChunks.length} (${file})...`);
    try {
      const embedding = await getEmbedding(text);
      out.push({ file, text, embedding });
    } catch (e) {
      console.error('Embedding failed:', e);
    }
    // Stay under the 100 req/min free-tier limit (700ms = ~85/min).
    await sleep(700);
  }
  await fs.mkdir(path.dirname(OUTPUT_FILE), { recursive: true });
  await fs.writeFile(OUTPUT_FILE, JSON.stringify(out, null, 2));
  console.log('Embeddings saved to', OUTPUT_FILE);
}

if (require.main === module) {
  main();
} 