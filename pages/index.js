import Head from 'next/head';
import styles from './index.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Georgina Wang</title>
        <meta name="description" content="Georgina Wang — Mathematics Co-op Student at the University of Waterloo. Portfolio and academic notes." />
      </Head>

      <div className={styles.container}>
        {/* Hero */}
        <section className={styles.hero}>
          <h1>Georgina Wang</h1>
          <h2>Mathematics Co-op Student at the University of Waterloo</h2>
          <p className={styles.heroSubtitle}>Majoring in Biostatistics with a minor in Economics</p>
          <div className={styles.heroContact}>
            <p>georgina.wang@uwaterloo.ca</p>
          </div>
          <div className={styles.socialLinks}>
            <a href="mailto:georgina.wang@uwaterloo.ca" className={styles.socialLink}>Email</a>
            <a href="https://www.linkedin.com/in/georgina-wang-52a552346" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a>
            <a href="https://github.com/GeorginaTaylorsVersion/Georginas_Website" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>GitHub</a>
          </div>
        </section>

        {/* Work Experience */}
        <section id="experience" className={styles.section}>
          <h2>Work Experience</h2>

          <div className={styles.experienceItem}>
            <h3>Junior Software Engineer</h3>
            <div className={styles.experienceHeader}>
              <span className={styles.company}>Shanghai Jiashi Industrial Co., Ltd.</span>
              <span className={styles.location}>Shanghai, China</span>
              <span className={styles.date}>2023-2024</span>
            </div>
            <ul>
              <li>Developed and optimized software applications that improved industrial processes by 20%</li>
              <li>Collaborated with cross-functional teams to implement Python and Java solutions, reducing system downtime by 10%</li>
              <li>Conducted code reviews, debugging, and testing, ensuring 95% bug-free deliveries</li>
            </ul>
          </div>

          <div className={styles.experienceItem}>
            <h3>Election Campaign Support</h3>
            <div className={styles.experienceHeader}>
              <span className={styles.company}>PC Party of Ontario</span>
              <span className={styles.location}>Oakville North Burlington</span>
              <span className={styles.date}>2022</span>
            </div>
            <ul>
              <li>Directed voter engagement activities, resulting in a 15% increase in voter turnout in targeted areas</li>
              <li>Trained 10+ new volunteers, enhancing team efficiency during campaign efforts</li>
            </ul>
          </div>
        </section>

        {/* Volunteer Experience */}
        <section id="volunteer" className={styles.section}>
          <h2>Volunteer Experience</h2>

          <div className={styles.experienceItem}>
            <h3>Camp Coordinator</h3>
            <div className={styles.experienceHeader}>
              <span className={styles.company}>Big Theater Company</span>
              <span className={styles.location}>Oakville</span>
              <span className={styles.date}>2021</span>
            </div>
            <ul>
              <li>Managed programming, safety, logistics, communication, and performance preparation</li>
              <li>Oversaw supervision and gathered feedback</li>
            </ul>
          </div>

          <div className={styles.experienceItem}>
            <h3>Veterinary Assistant Intern</h3>
            <div className={styles.experienceHeader}>
              <span className={styles.company}>Mavis Animal Hospital</span>
              <span className={styles.location}>Mississauga</span>
              <span className={styles.date}>2022-2023</span>
            </div>
            <ul>
              <li>Administered routine and post-surgical care for 10+ animals weekly, ensuring compliance with clinic protocols</li>
              <li>Assisted and prepared 10+ surgeries weekly and maintained clinic sanitation</li>
            </ul>
          </div>
        </section>

        {/* Extracurricular */}
        <section id="extracurricular" className={styles.section}>
          <h2>Extracurricular</h2>

          <div className={styles.experienceItem}>
            <h3>Sergeant</h3>
            <div className={styles.experienceHeader}>
              <span className={styles.company}>540 Golden Hawks Air Cadets</span>
              <span className={styles.location}>Oakville</span>
              <span className={styles.date}>2019-2023</span>
            </div>
            <ul>
              <li>Led, trained, and mentored junior cadets, supervised activities</li>
              <li>Served as a role model and communicator within the unit</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className={styles.section}>
          <h2>Projects</h2>

          <div className={styles.projectItem}>
            <h3>Personal Academic Website with AI-Powered Chatbot</h3>
            <div className={styles.experienceHeader}>
              <span className={styles.date}>2025</span>
            </div>
            <ul>
              <li>Built and deployed a responsive website using Next.js and React with custom CSS</li>
              <li>Integrated a Gemini API chatbot with semantic search over academic notes</li>
              <li>Created a dynamic note system and optimized UX for all devices</li>
            </ul>
            <a href="/notes" className={styles.projectCta}>Try the chatbot &rarr;</a>
          </div>
        </section>

        {/* Education */}
        <section id="education" className={styles.section}>
          <h2>Education</h2>

          <div className={styles.educationItem}>
            <h3>Bachelor of Mathematics (Expected)</h3>
            <div className={styles.educationHeader}>
              <span className={styles.school}>University of Waterloo</span>
              <span className={styles.location}>Waterloo, ON</span>
              <span className={styles.date}>2024-2029</span>
            </div>
            <p className={styles.major}>Majoring in Biostatistics with a minor in Economics</p>
            <p className={styles.gpa}>GPA: 4.0+</p>
            <p className={styles.clubs}>Clubs &amp; Organizations: English Society, Moot Court, SafeTails Initiative, Women's Centre, ICSN, Math Society Marketing Team</p>
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className={styles.section}>
          <h2>Certifications</h2>

          <div className={styles.certificationsGrid}>
            <div className={styles.certItem}>
              <h4>AI-900: Microsoft Azure AI Fundamentals</h4>
              <span className={styles.issuer}>Microsoft Certification</span>
              <span className={styles.date}>2022</span>
            </div>

            <div className={styles.certItem}>
              <h4>Introduction to Statistics</h4>
              <span className={styles.issuer}>Stanford University</span>
              <span className={styles.date}>2023</span>
            </div>

            <div className={styles.certItem}>
              <h4>Introduction to Philosophy</h4>
              <span className={styles.issuer}>The University of Edinburgh</span>
              <span className={styles.date}>2023</span>
            </div>

            <div className={styles.certItem}>
              <h4>Google Data Analytics Professional Certificate</h4>
              <span className={styles.issuer}>Google Career Certificates</span>
              <span className={styles.date}>2023</span>
            </div>

            <div className={styles.certItem}>
              <h4>Google Business Intelligence Professional Certificate</h4>
              <span className={styles.issuer}>Google Career Certificates</span>
              <span className={styles.date}>2023</span>
            </div>

            <div className={styles.certItem}>
              <h4>Meta Data Analyst Professional Certificate</h4>
              <span className={styles.issuer}>Meta</span>
              <span className={styles.date}>2024</span>
            </div>

            <div className={styles.certItem}>
              <h4>Meta Social Media Marketing Professional Certificate</h4>
              <span className={styles.issuer}>Meta</span>
              <span className={styles.date}>2024</span>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className={styles.section}>
          <h2>Skills</h2>

          <div className={styles.skillsGrid}>
            <div className={styles.skillsColumn}>
              <h3>Technical Skills</h3>
              <ul>
                <li><strong>Programming Languages:</strong> Python, Racket</li>
                <li><strong>Software Tools:</strong> Microsoft 365 Suite, Azure Machine Learning Service</li>
                <li><strong>Data Analysis:</strong> Statistical analysis, report writing, and data visualization</li>
              </ul>
            </div>

            <div className={styles.skillsColumn}>
              <h3>Soft Skills</h3>
              <ul>
                <li>Leadership</li>
                <li>Problem-Solving</li>
                <li>Communication</li>
                <li>Teamwork</li>
                <li>Event Planning</li>
              </ul>
            </div>

            <div className={styles.skillsColumn}>
              <h3>Languages</h3>
              <ul>
                <li><strong>English:</strong> Fluent</li>
                <li><strong>Chinese:</strong> Fluent</li>
                <li><strong>French:</strong> Working knowledge</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
