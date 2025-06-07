import Link from 'next/link';
import { getTerms, getCourses, getUnits, getNotes } from '../../../../lib/notes';

export default function UnitPage({ term, course, unit, notes }) {
  return (
    <div>
      <h1>{term} - {course} - {unit}</h1>
      <h2>Notes</h2>
      <ul>
        {notes.map(note => (
          <li key={note}>
            <Link href={`/${term}/${course}/${unit}/${note}`}>{note}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticPaths() {
  const terms = getTerms();
  const paths = terms.flatMap(term => {
    const courses = getCourses(term);
    return courses.flatMap(course => {
      const units = getUnits(term, course);
      return units.map(unit => ({ params: { term, course, unit } }));
    });
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const notes = getNotes(params.term, params.course, params.unit);
  return { props: { term: params.term, course: params.course, unit: params.unit, notes } };
} 