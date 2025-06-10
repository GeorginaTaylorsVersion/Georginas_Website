import Link from 'next/link';
import { getTerms, getCourses, getUnits, getNotes } from '../../../lib/notes';

function pickIconForUnit(unit) {
  // Simple icon picker based on keywords or index
  const icons = [
    '📚', '🧮', '📐', '📊', '🔢', '📝', '💡', '🔬', '💻', '📈', '🧑‍🏫', '🔎'
  ];
  // Try to pick based on unit name keywords
  if (/vector/i.test(unit)) return '🧭';
  if (/matrix|matrices/i.test(unit)) return '🧮';
  if (/determinant/i.test(unit)) return '📐';
  if (/dimension/i.test(unit)) return '📏';
  if (/eigen/i.test(unit)) return '🔬';
  if (/system/i.test(unit)) return '🔗';
  if (/integration|integral/i.test(unit)) return '∫';
  if (/series/i.test(unit)) return '🔢';
  if (/equation/i.test(unit)) return '📝';
  if (/file/i.test(unit)) return '📁';
  if (/recursion/i.test(unit)) return '🔁';
  if (/list/i.test(unit)) return '📋';
  if (/string/i.test(unit)) return '🔤';
  if (/sort|search/i.test(unit)) return '🔎';
  // Fallback: pick by index
  return icons[unit.length % icons.length];
}

export default function CoursePage({ term, course, unitsWithFirstNotes }) {
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
            <div className="unit-icon">{pickIconForUnit(unit)}</div>
            <div className="unit-title">{unit}</div>
          </Link>
        ))}
      </div>
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
  return { props: { term: params.term, course: params.course, unitsWithFirstNotes } };
} 