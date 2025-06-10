import { getTerms, getCourses, getUnits, getNotes, getNoteContent, getUnitTitle } from '../../../../../../lib/notes'; // Updated import path
import { useEffect } from 'react';
import Head from 'next/head';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkMath from 'remark-math';
import remarkRehype from 'remark-rehype';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import rehypePrependImageBasePath from '../../../../../../lib/rehype-prepend-image-base-path.mjs';
import remarkPythonCodeBox from '../../../../../../lib/remark-python-code-box.mjs';

export default function NotePage({ term, course, unit, note, noteContent, noteData, unitTitle }) {
  useEffect(() => {
    // Ensure renderMathInElement is available and then run it
    if (window.renderMathInElement) {
      console.log('DEBUG: window.renderMathInElement is defined. Running it.');
      window.renderMathInElement(document.body);
    } else {
      console.log('DEBUG: window.renderMathInElement is NOT defined.');
    }
  }, [noteContent]); // Re-run effect if noteContent changes

  return (
    <div>
      <Head>
        <title>{unitTitle}</title>
      </Head>
      <h1>{unitTitle}</h1>
      {noteData.date && <p>{noteData.date}</p>}
      <div 
        className="markdown-content"
        dangerouslySetInnerHTML={{ __html: noteContent }} 
      />
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

  // Correct unified markdown processor
  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkPythonCodeBox)
    .use(remarkRehype)
    .use(rehypeKatex)
    .use(rehypePrependImageBasePath, { term, course, unit })
    .use(rehypeStringify);

  const file = await processor.process(content);
  const noteContent = String(file);

  console.log('DEBUG: Markdown processed to HTML. Length:', noteContent.length);

  return { props: { term, course, unit, note, noteContent, noteData: data, unitTitle } };
} 