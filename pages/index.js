import Link from 'next/link';
import { getTerms, getCourses } from '../lib/notes';
import Head from 'next/head';
import Image from 'next/image';
// We will add styling later

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
    <>
      <Head>
        <title>Georgina Wang - Mathematics Student</title>
        {/* You might want to add other meta tags from your old index.html here */}
      </Head>

      <div className="main-container">
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

      {/* Main Content Sections */}
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>Highly organized and detail-oriented mathematics co-op student with proven experience in software development, campaign coordination, and leadership roles. Over 2 years of professional experience in software engineering and cross-functional collaboration, improving operational efficiency by 20%.</p>
        </section>

        <section id="experience">
          <h2>Work Experience</h2>
          <div className="experience-item">
            <h3>Junior Software Engineer</h3>
            <p className="company">Shanghai Jiashi Industrial Co., Ltd. | Shanghai, China</p>
            <p className="date">2023-2024</p>
            <ul>
              <li>Developed and optimized software applications that improved industrial processes by 20%</li>
              <li>Collaborated with cross-functional teams to implement Python and Java solutions, reduce system downtime by 10%</li>
              <li>Conducted code reviews, debugging, and testing, ensuring 95% bug-free deliverables</li>
            </ul>
          </div>

          <div className="experience-item">
            <h3>Election Campaign Support</h3>
            <p className="company">PC Party of Ontario | Oakville North Burlington</p>
            <p className="date">2022</p>
            <ul>
              <li>Directed voter engagement activities, resulted in a 15% increase in voter turnout in targeted areas</li>
              <li>Trained 10+ new volunteers, enhancing team efficiency during campaign efforts</li>
            </ul>
          </div>
        </section>

        <section id="education">
          <h2>Education</h2>
          <div className="education-item">
            <h3>Bachelor of Mathematics (expected)</h3>
            <p className="school">University of Waterloo</p>
            <p className="date">2024-2029</p>
            <p className="gpa">GPA: 3.5+</p>
            <p>Relevant Courses: Calculus, Linear Algebra, Intro to Programming, Intro to Financial Markets, Intro to Microeconomics, Intro to Health</p>
          </div>
        </section>

        <section id="skills">
          <h2>Skills & Certifications</h2>
          <div className="skills-grid">
            <div className="skills-column">
              <h3>Technical Skills</h3>
              <ul>
                <li>Python, Racket</li>
                <li>Microsoft 365 Suite</li>
                <li>Azure Machine Learning Service</li>
                <li>Statistical Analysis</li>
                <li>Data Visualization</li>
              </ul>
            </div>
            <div className="skills-column">
              <h3>Certifications</h3>
              <ul>
                <li>Microsoft Azure AI Fundamentals</li>
                <li>Google Data Analytics Professional Certificate</li>
                <li>Meta Data Analyst Professional Certificate</li>
                <li>Meta Social Media Marketing Professional Certificate</li>
              </ul>
            </div>
            <div className="skills-column">
              <h3>Languages</h3>
              <ul>
                <li>English (Fluent)</li>
                <li>Chinese (Fluent)</li>
                <li>French (Working Knowledge)</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <div className="contact-info">
            <p><i className="fas fa-phone"></i> (289) 888-4577</p>
            <p><i className="fas fa-envelope"></i> georgina.wang@uwaterloo.ca</p>
            <p><i className="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/georgina-wang-52a552346" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
          </div>
        </section>
      </main>

      {/* Footer will be handled by a component if needed */}
      {/* <Footer /> */}
    </>
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