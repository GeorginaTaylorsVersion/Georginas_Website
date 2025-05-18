import Link from 'next/link';
import { getNotes, getTerms, getCourses } from '../../../lib/notes';

export default function CoursePage({ term, course, notes }) {
  return (
    <div>
      <h1>{course}</h1>
      <ul>
        {notes.map(note => (
          <li key={note}>
            <Link href={`/${term}/${course}/${note}`}>{note}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticPaths() {
  const terms = getTerms();
  const paths = [];
  terms.forEach(term => {
    const courses = getCourses(term);
    courses.forEach(course => {
      paths.push({ params: { term, course } });
    });
  });
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const notes = getNotes(params.term, params.course);
  return { props: { term: params.term, course: params.course, notes } };
} 