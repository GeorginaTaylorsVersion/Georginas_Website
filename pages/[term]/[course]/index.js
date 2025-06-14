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
  const displayContent = unitsWithFirstNotes.length > 0 ? (
    <div className="unit-grid">
      {unitsWithFirstNotes.map(({ unit, firstNote }) => (
        <Link
          key={unit.path}
          href={firstNote
            ? `/${term}/${course}/units/${unit.path}/notes/${firstNote}`
            : `/${term}/${course}/units/${unit.path}`
          }
          className="unit-card"
        >
          <div className="unit-title">{unit.title}</div>
        </Link>
      ))}
    </div>
  ) : (mustKnowContent && term !== '1B') ? (
    <div className="no-notes-placeholder">
      <div className="markdown-content" dangerouslySetInnerHTML={{ __html: mustKnowContent }} />
    </div>
  ) : (
    <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '1.2em', color: '#555' }}>
      No units found for this course yet.
    </p>
  );

  return (
    <div className="course-contents">
      <h1>{term} - {course}</h1>
      {displayContent}
      {mustKnowContent && term === '1B' && (
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
    const notes = getNotes(params.term, params.course, unit.path);
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
  } else if (unitsWithFirstNotes.length === 0 && params.term !== '1B') {
    const noContentFilePath = path.join(process.cwd(), 'notes', params.term, params.course, 'no-content.md');
    console.log('DEBUG: Checking for no-content.md at:', noContentFilePath);
    if (fs.existsSync(noContentFilePath)) {
      console.log('DEBUG: no-content.md exists.');
      const fileContents = fs.readFileSync(noContentFilePath, 'utf8');
      console.log('DEBUG: Raw no-content.md content length:', fileContents.length);
      console.log('DEBUG: First 100 chars of raw no-content.md:', fileContents.substring(0, 100));
      mustKnowContent = fileContents;
      console.log('DEBUG: Assigned raw no-content.md directly to mustKnowContent. Length:', mustKnowContent.length);
      console.log('DEBUG: First 100 chars of assigned mustKnowContent:', mustKnowContent.substring(0, 100));
    }
  }

  return { props: { term: params.term, course: params.course, unitsWithFirstNotes, mustKnowContent } };
} 