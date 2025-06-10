import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { getTerms, getCourses, getUnits, getNotes } from '../../../../../lib/notes'; // Updated import path

export default function UnitPage({ term, course, unit, notes }) {
  const router = useRouter();

  useEffect(() => {
    if (notes && notes.length > 0) {
      router.replace(`/${term}/${course}/units/${unit}/notes/${notes[0]}`);
    }
  }, [notes, term, course, unit, router]);

  return <div>Loading note...</div>;
}

export async function getStaticPaths() {
  const terms = getTerms();
  const paths = terms.flatMap(term => {
    const courses = getCourses(term);
    return courses.flatMap(course => {
      const units = getUnits(term, course);
      // Generate paths for the new unit listing page ([unit]/index.js under units/)
      return units.map(unit => ({ params: { term, course, unit } }));
    });
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const notes = getNotes(params.term, params.course, params.unit);
  return { props: { term: params.term, course: params.course, unit: params.unit, notes } };
} 