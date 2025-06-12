import Link from 'next/link';
import { getTerms, getCourses } from '../lib/notes';

const heartEmojis = [
  '❤️', // red
  '🧡', // orange
  '💛', // yellow
  '💚', // green
  '🩵', // light blue
  '💙', // blue
  '💜', // purple
];

export default function Home({ termsWithCourses }) {
  return (
    <div className="main-container main-content-padding">
      <div className="term-list">
        {termsWithCourses.map(({ term, courses }) => (
          <div className="term-card" key={term}>
            <div className="term-title">{term}</div>
            <div className="course-row">
              {courses.map((course) => (
                <span key={course} className="course-bubble">
                  <Link href={`/${term}/${course}`} legacyBehavior>
                    <a className="course-link">{course}</a>
                  </Link>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .main-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: 70vh;
          font-family: 'Times New Roman', Times, serif;
        }
        .term-list {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          width: 90vw;
          max-width: 900px;
          margin-top: 3rem;
        }
        .term-card {
          background: #fff;
          border-radius: 0.7rem;
          box-shadow: 0 2px 16px 0 rgba(0,0,0,0.06);
          padding: 2.5rem 1.5rem 1.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 1.5px solid #f2f2f2;
          font-family: 'Times New Roman', Times, serif;
        }
        .term-title {
          font-size: 3rem;
          font-weight: 500;
          margin-bottom: 1.2rem;
          font-family: 'Times New Roman', Times, serif;
          text-align: center;
          color: #222;
        }
        .course-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.7rem;
          font-size: 1.3rem;
          font-family: 'Times New Roman', Times, serif;
        }
        .course-bubble {
          background: #ffeaf4;
          border-radius: 999px;
          padding: 0.35em 1em;
          margin: 0.2em 0.2em;
          display: flex;
          align-items: center;
          transition: background 0.18s, box-shadow 0.18s;
        }
        .course-bubble:hover {
          background: #ffb6d5;
          box-shadow: 0 2px 8px 0 rgba(233, 30, 99, 0.10);
        }
        .course-link {
          color: #222;
          text-decoration: none;
          border-bottom: none;
          padding-bottom: 0;
          font-family: 'Times New Roman', Times, serif;
        }
        .course-link:hover {
          color: #b94a4a;
        }
        @media (max-width: 700px) {
          .term-title {
            font-size: 2rem;
          }
          .term-card {
            padding: 1.2rem 0.5rem 1rem 0.5rem;
          }
          .course-row {
            font-size: 1rem;
            gap: 0.4rem;
          }
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps() {
  const terms = getTerms();
  const termsWithCourses = terms.map(term => ({
    term,
    courses: getCourses(term)
  }));
  return { props: { termsWithCourses } };
} 