import Link from 'next/link';
import { getCourses, getTerms } from '../../lib/notes';

const termsWithCourses = [
  { term: '1A', courses: ['MATH 135', 'MATH 137', 'CS 115', 'HLTH 101', 'EMLS 101R'] },
  { term: '1B', courses: ['MATH 136', 'MATH 138', 'CS 116', 'ECON 101', 'COMM 101'] },
  { term: '2A', courses: ['MATH 235', 'MATH 237', 'MATH 239', 'STAT 230', 'ECON 102'] },
  { term: '2B', courses: ['STAT 231', 'STAT 333', 'ECON 201', 'ECON 206', 'ECON 322'] },
  { term: '3A', courses: ['STAT 330', 'STAT 331', 'STAT 332', 'STAT 337', 'ECON 323'] },
  { term: '3B', courses: ['STAT 322', 'STAT 334', 'STAT 340', 'STAT 433', 'ENGL 378'] },
  { term: '4A', courses: ['STAT 430', 'STAT 431', 'STAT 450', 'ECON 391', 'ENGL 378'] },
  { term: '4B', courses: ['STAT 436', 'STAT 437', 'STAT 438', 'ECON 443'] },
];

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