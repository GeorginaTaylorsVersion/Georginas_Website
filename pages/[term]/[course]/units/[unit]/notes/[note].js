import { getTerms, getCourses, getUnits, getNotes, getNoteContent, getUnitTitle } from '../../../../../../lib/notes'; // Updated import path
import { useEffect } from 'react';
import Head from 'next/head';
import { remark } from 'remark'; // Import remark directly as the base parser
import remarkRehype from 'remark-rehype';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';
import { unified } from 'unified';

export default function NotePage({ term, course, unit, note, noteContent, noteData, unitTitle }) {
  useEffect(() => {
    // Ensure renderMathInElement is available and then run it
    if (window.renderMathInElement) {
      window.renderMathInElement(document.body);
    }
  }, [noteContent]); // Re-run effect if noteContent changes

  return (
    <div>
      <Head>
        <title>{unitTitle}</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" />
        <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
        <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>
      </Head>
      <h1>{unitTitle}</h1>
      {noteData.date && <p>{noteData.date}</p>}
      <div dangerouslySetInnerHTML={{ __html: noteContent }} />
    </div>
  );
}

export async function getStaticPaths() {
  const terms = getTerms();
  const paths = terms.flatMap(term => {
    const courses = getCourses(term);
    return courses.flatMap(course => {
      const units = getUnits(term, course);
      return units.flatMap(unit => {
        const notes = getNotes(term, course, unit);
        // Generate paths for the note detail page
        return notes.map(note => ({ params: { term, course, unit, note } }));
      });
    });
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { term, course, unit, note } = params;
  const { content, data } = getNoteContent(term, course, unit, note);
  const unitTitle = getUnitTitle(term, course, unit);

  console.log('DEBUG: Content from getNoteContent. Length:', content.length);
  if (content.length > 0) {
    console.log('DEBUG: First 100 chars of content:', content.substring(0, 100));
  } else {
    console.log('DEBUG: Content is empty.');
  }

  // Create a remark processor and chain plugins for math and HTML conversion
  const processor = remark()
    .use(remarkMath) // Add math support
    .use(remarkRehype) // Convert markdown AST to HTML AST
    .use(rehypeKatex) // Render math with KaTeX
    .use(rehypeStringify); // Stringify HTML AST to HTML content

  // Process markdown to HTML
  const file = await processor.process(content);
  const noteContent = String(file); // Convert VFile to string

  console.log('DEBUG: Markdown processed to HTML. Length:', noteContent.length);

  return { props: { term, course, unit, note, noteContent, noteData: data, unitTitle } };
} 