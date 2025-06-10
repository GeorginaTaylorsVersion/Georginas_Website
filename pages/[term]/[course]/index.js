import Link from 'next/link';
import { getTerms, getCourses, getUnits, getNotes } from '../../../lib/notes';
import fs from 'fs';
import path from 'path';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkMath from 'remark-math';
import remarkRehype from 'remark-rehype';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';

export default function CoursePage({ term, course, unitsWithFirstNotes, mustKnowContent }) {
  return (
    <div className="course-contents">
      <h1>{term} - {course}</h1>
      <div className="unit-grid">
        {unitsWithFirstNotes.map(({ unit, firstNote }) => (
          <Link
            key={unit}
            href={firstNote
              ? `/${term}/${course}/units/${unit}/notes/${firstNote}`
              : `/${term}/${course}/units/${unit}`
            }
            className="unit-card"
          >
            <div className="unit-title">{unit}</div>
          </Link>
        ))}
      </div>
      {mustKnowContent && (
        <div className="must-know-section content-rectangle">
          <div className="markdown-content" dangerouslySetInnerHTML={{ __html: mustKnowContent }} />
        </div>
      )}
    </div>
  );
}

export async function getStaticPaths() {
  const terms = getTerms();
  const paths = terms.flatMap(term => {
    const courses = getCourses(term);
    return courses.map(course => ({ params: { term, course } }));
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const units = getUnits(params.term, params.course);
  const unitsWithFirstNotes = units.map(unit => {
    const notes = getNotes(params.term, params.course, unit);
    return { unit, firstNote: notes[0] || null };
  });

  console.log('DEBUG: unitsWithFirstNotes:', unitsWithFirstNotes);

  let mustKnowContent = null;

  if (params.course === 'MATH 138') {
    const mustKnowFilePath = path.join(process.cwd(), 'notes', params.term, params.course, 'must-know-section.md');
    if (fs.existsSync(mustKnowFilePath)) {
      const fileContents = fs.readFileSync(mustKnowFilePath, 'utf8');
      console.log('DEBUG: Raw must-know-section.md content length:', fileContents.length);
      console.log('DEBUG: First 200 chars of raw must-know-section.md:', fileContents.substring(0, 200));
      
      const processor = unified()
        .use(remarkParse)
        .use(remarkMath)
        .use(remarkRehype)
        .use(rehypeKatex)
        .use(rehypeStringify)
        .use(remarkGfm);

      const file = await processor.process(fileContents);
      mustKnowContent = String(file);
      console.log('DEBUG: Processed mustKnowContent length:', mustKnowContent.length);
      console.log('DEBUG: First 200 chars of processed mustKnowContent:', mustKnowContent.substring(0, 200));
    }
  }

  return { props: { term: params.term, course: params.course, unitsWithFirstNotes, mustKnowContent } };
} 