import Head from 'next/head';
import { useEffect } from 'react';
import styles from './author.module.css';

export default function Author() {
  useEffect(() => {
    // Add smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          const headerHeight = document.querySelector('.header-bar').offsetHeight;
          const targetPosition = targetSection.offsetTop - headerHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });

    // Add scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe all sections for animation
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(30px)';
      section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(section);
    });

    // Add hover effects for experience items
    const experienceItems = document.querySelectorAll('.experience-item, .education-item, .project-item');
    experienceItems.forEach(item => {
      item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(10px)';
        this.style.transition = 'transform 0.3s ease';
      });
      
      item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
      });
    });

    // Add click to copy functionality for contact information
    const contactItems = document.querySelectorAll('.contact-item p');
    contactItems.forEach(item => {
      if (!item.querySelector('a')) { // Only for non-link contact info
        item.style.cursor = 'pointer';
        item.title = 'Click to copy';
        
        item.addEventListener('click', function() {
          const text = this.textContent;
          navigator.clipboard.writeText(text).then(() => {
            // Show temporary feedback
            const originalText = this.textContent;
            this.textContent = 'Copied!';
            this.style.color = 'var(--secondary-color)';
            
            setTimeout(() => {
              this.textContent = originalText;
              this.style.color = '';
            }, 2000);
          });
        });
      }
    });

    // Add scroll to top functionality
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: var(--secondary-color);
      color: white;
      border: none;
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      z-index: 1000;
      box-shadow: var(--shadow);
    `;
    
    document.body.appendChild(scrollToTopBtn);

    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.visibility = 'visible';
      } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.visibility = 'hidden';
      }
    });

    // Scroll to top functionality
    scrollToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

  }, []);

  return (
    <>
      <Head>
        <title>Georgina Wang - Author</title>
        <meta name="description" content="Georgina Wang - Mathematics Co-op Student at the University of Waterloo" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>

          <h1>Georgina Wang</h1>
          <h2>Mathematics Co-op Student at the University of Waterloo</h2>
          <p className={styles.heroSubtitle}>Majoring in Biostatistics with a minor in Economics</p>
          <div className={styles.heroContact}>
            <p>(289) 888-4577</p>
            <p>georgina.wang@uwaterloo.ca</p>
          </div>
          <div className={styles.socialLinks}>
            <a href="https://www.linkedin.com/in/georgina-wang-52a552346" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://georginas-website.vercel.app/" target="_blank" rel="noopener noreferrer" title="Personal Website">
              <i className="fas fa-globe"></i>
            </a>
            <a href="https://github.com/GeorginaTaylorsVersion/Georginas_Website" target="_blank" rel="noopener noreferrer" title="GitHub">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className={styles.main}>
        {/* Work Experience Section */}
        <section id="experience" className={styles.section}>
          <h2>Work Experience</h2>
          
          <div className={styles.experienceItem}>
            <div className={styles.experienceHeader}>
              <h3>Junior Software Engineer</h3>
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
            <div className={styles.experienceHeader}>
              <h3>Election Campaign Support</h3>
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

        {/* Volunteer Experience Section */}
        <section id="volunteer" className={styles.section}>
          <h2>Volunteer Experience</h2>
          
          <div className={styles.experienceItem}>
            <div className={styles.experienceHeader}>
              <h3>Camp Coordinator</h3>
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
            <div className={styles.experienceHeader}>
              <h3>Veterinary Assistant Intern</h3>
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

        {/* Extracurricular Section */}
        <section id="extracurricular" className={styles.section}>
          <h2>Extracurricular</h2>
          
          <div className={styles.experienceItem}>
            <div className={styles.experienceHeader}>
              <h3>Sergeant</h3>
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

        {/* Projects Section */}
        <section id="projects" className={styles.section}>
          <h2>Projects</h2>
          
          <div className={styles.projectItem}>
            <div className={styles.experienceHeader}>
              <h3>Personal Academic Website with AI-Powered Chatbot</h3>
              <span className={styles.date}>2025</span>
            </div>
            <ul>
              <li>Built and deployed a responsive website using Next.js and React with custom CSS</li>
              <li>Integrated a Gemini API chatbot with semantic search over academic notes</li>
              <li>Created a dynamic note system and optimized UX for all devices</li>
            </ul>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className={styles.section}>
          <h2>Education</h2>
          
          <div className={styles.educationItem}>
            <div className={styles.educationHeader}>
              <h3>Bachelor of Mathematics (Expected)</h3>
              <span className={styles.school}>University of Waterloo</span>
              <span className={styles.location}>Waterloo, ON</span>
              <span className={styles.date}>2024-2029</span>
            </div>
            <p className={styles.major}>Majoring in Biostatistics with a minor in Economics</p>
            <p className={styles.gpa}>GPA: 4.0+</p>
            <p className={styles.clubs}>Clubs & Organizations: English Society, Moot Court, SafeTails Initiative, Women's Centre, ICSN, Math Society Marketing Team</p>
          </div>
        </section>

        {/* Certifications Section */}
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

        {/* Skills Section */}
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
      </main>
    </>
  );
} 