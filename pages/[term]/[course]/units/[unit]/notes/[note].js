import { getTerms, getCourses, getUnits, getNotes, getNoteContent } from '../../../../../../lib/notes'; // Updated import path
import Head from 'next/head';
import remark from 'remark';
import html from 'remark-html';

export default function NotePage({ term, course, unit, note, noteContent, noteData }) {
  return (
    <div>
      <Head>
        <title>{noteData.title || note}</title>
      </Head>
      <h1>{noteData.title || note}</h1>
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

  // Process markdown to HTML
  const processedContent = await remark()
    .use(html)
    .process(content);
  const noteContent = processedContent.toString();

  return { props: { term, course, unit, note, noteContent, noteData: data } };
} 