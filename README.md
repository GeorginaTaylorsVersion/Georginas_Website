# Georgina's Website

Personal portfolio and academic notes archive for Georgina Wang (Mathematics Co-op, University of Waterloo). Built with Next.js + React, with course notes rendered from Markdown (KaTeX for math, custom remark/rehype plugins for images and code blocks) and an AI assistant over the notes powered by the Gemini API with precomputed embeddings.

Live: https://georginas-website.vercel.app/

## Stack
- Next.js 13 + React 18
- `remark` / `rehype` pipeline with `rehype-katex` for math
- Gemini API (`embedding-001` + `gemini-1.5-flash-latest`) for the notes chatbot
- Deployed on Vercel

## Scripts
- `npm run dev` — local dev server
- `npm run build` — rebuilds `lib/notes-context.json` (via `scripts/build-context.js`) then builds Next
- `node scripts/build-embeddings.js` — manually rebuild `lib/note-embeddings.json` (calls Gemini API; run when notes content changes significantly)

## Note to author
When rotating the Gemini API key, update both `.env.local` (local dev) AND the Vercel project environment variables (production).
