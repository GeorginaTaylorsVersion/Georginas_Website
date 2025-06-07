import Link from 'next/link';
import { getTerms, getCourses } from '../lib/notes';
import Head from 'next/head';
import Image from 'next/image';
import styles from './index.module.css'; // Import CSS module
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

export default function Home() {
  return (
    <>
      <Head>
        <title>Georgina Wang - Mathematics Student</title>
        <link rel="stylesheet" href="/personal-website/styles.css" />
        {/* You might want to add other meta tags from your old index.html here */}
      </Head>

      {/* Spacing element to clear the fixed header on the home page */}
      <div style={{ height: '80px', background: 'linear-gradient(to right, #ffd6e0, #ffecf2)' }}></div>

      {/* Personal website hero section */}
      <header className={styles.hero}>
          <div className={styles['hero-content']}>
              <div className={styles['profile-image']}>
                  <Image
                      src="/personal-website/images/profile.jpg?v=2"
                      alt="Georgina Wang"
                      className={styles['profile-photo']}
                      width={200}
                      height={200}
                  />
              </div>
              <h1>Georgina Wang</h1>
              <h2>Mathematics Co-op Student</h2>
              <p>University of Waterloo</p>
              <div className="social-links">
                  <a href="https://www.linkedin.com/in/georgina-wang-52a552346" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                  <a href="mailto:georgina.wang@uwaterloo.ca"><i className="fas fa-envelope"></i></a>
              </div>
          </div>
      </header>

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