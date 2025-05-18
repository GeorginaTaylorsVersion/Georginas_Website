import Link from 'next/link';
import { getCourses, getTerms } from '../../lib/notes';

export default function TermPage({ term, courses }) {
  return (
    <div>
      <h1>{term}</h1>
      <ul>
        {courses.map(course => (
          <li key={course}>
            <Link href={`/${term}/${course}`}>{course}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticPaths() {
  const terms = getTerms();
  const paths = terms.map(term => ({ params: { term } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const courses = getCourses(params.term);
  return { props: { term: params.term, courses } };
} 