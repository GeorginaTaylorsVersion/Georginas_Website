import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export default function CoursePage({ term, courseMeta }) {
  if (!courseMeta) {
    return <div style={{ padding: '2rem', color: 'red' }}>No metadata found for this course.</div>;
  }
  return (
    <div className="course-main-container">
      <div className="course-card">
        <div className="course-title">{courseMeta.course}</div>
        {courseMeta.professor && (
          <div className="course-prof">Professor: {courseMeta.professor}</div>
        )}
        <div className="unit-list-vertical">
          {courseMeta.units.map(unit => (
            <Link key={unit.file} href={`/${term}/${courseMeta.course}/${unit.file.replace('.md', '')}`} legacyBehavior>
              <a className="unit-bubble-vertical">{unit.title}</a>
            </Link>
          ))}
        </div>
      </div>
      <style jsx>{`
        .course-main-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: 70vh;
          font-family: 'Times New Roman', Times, serif;
        }
        .course-card {
          background: #fff;
          border-radius: 1rem;
          box-shadow: 0 2px 16px 0 rgba(0,0,0,0.06);
          border: 1.5px solid #f2f2f2;
          padding: 3.5rem 2.5rem 3rem 2.5rem;
          margin-top: 3rem;
          min-width: 340px;
          max-width: 900px;
          width: 90vw;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .course-title {
          font-size: 2.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          font-family: 'Times New Roman', Times, serif;
        }
        .course-prof {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          color: #444;
          font-family: 'Times New Roman', Times, serif;
        }
        .unit-list-vertical {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          width: 100%;
          align-items: center;
          margin-top: 2.5rem;
        }
        .unit-bubble-vertical {
          background: #ffeaf4;
          border-radius: 999px;
          padding: 1.1em 2.2em;
          color: #222;
          text-decoration: none;
          font-family: 'Times New Roman', Times, serif;
          font-size: 1.3rem;
          transition: background 0.18s, box-shadow 0.18s, color 0.18s;
          border: none;
          box-shadow: 0 1px 8px 0 rgba(233, 30, 99, 0.08);
          width: 100%;
          text-align: center;
          max-width: 600px;
        }
        .unit-bubble-vertical:hover {
          background: #ffb6d5;
          color: #b94a4a;
          box-shadow: 0 2px 16px 0 rgba(233, 30, 99, 0.13);
        }
      `}</style>
    </div>
  );
}

export async function getStaticPaths() {
  return { paths: [], fallback: false };
}

export async function getStaticProps({ params }) {
  const { term, course } = params;
  const metaPath = path.join(process.cwd(), 'notes', term, course, 'meta.json');
  let courseMeta = null;
  try {
    const metaRaw = fs.readFileSync(metaPath, 'utf8');
    courseMeta = JSON.parse(metaRaw);
  } catch (e) {
    // If meta.json doesn't exist or is invalid
    courseMeta = null;
  }
  return { props: { term, courseMeta } };
} 