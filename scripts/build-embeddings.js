const fs = require('fs').promises;
const path = require('path');
const fetch = require('node-fetch');

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
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

async function main() {
  if (!OPENAI_API_KEY) {
    console.error('Missing OPENAI_API_KEY in environment.');
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
  }
  await fs.mkdir(path.dirname(OUTPUT_FILE), { recursive: true });
  await fs.writeFile(OUTPUT_FILE, JSON.stringify(out, null, 2));
  console.log('Embeddings saved to', OUTPUT_FILE);
}

if (require.main === module) {
  main();
} 