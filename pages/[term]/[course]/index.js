import Link from 'next/link';
import { getTerms, getCourses, getUnits } from '../../lib/notes';

export default function CoursePage({ term, course, units }) {
  return (
    <div>
      <h1>{term} - {course}</h1>
      <h2>Units</h2>
      <ul>
        {units.map(unit => (
          <li key={unit}>
            <Link href={`/${term}/${course}/units/${unit}`}>{unit}</Link>
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
    // We don't need to generate paths for units here, just for the course pages themselves
    return courses.map(course => ({ params: { term, course } }));
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const units = getUnits(params.term, params.course);
  return { props: { term: params.term, course: params.course, units } };
} 