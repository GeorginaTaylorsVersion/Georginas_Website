import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Georgina | Portfolio</title>
        <meta name="description" content="Georgina's professional portfolio and personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>Georgina</h1>
          <p className={styles.subtitle}>Welcome to my world</p>
        </section>

        <section className={styles.about}>
          <h2>About Me</h2>
          <p>I am a passionate professional dedicated to creating meaningful work that makes a difference.</p>
        </section>

        <section className={styles.work}>
          <h2>My Work</h2>
          <div className={styles.workGrid}>
            <div className={styles.workItem}>
              <h3>Project 1</h3>
              <p>Description of your first project</p>
            </div>
            <div className={styles.workItem}>
              <h3>Project 2</h3>
              <p>Description of your second project</p>
            </div>
            <div className={styles.workItem}>
              <h3>Project 3</h3>
              <p>Description of your third project</p>
            </div>
          </div>
        </section>

        <section className={styles.contact}>
          <h2>Get in Touch</h2>
          <p>I'd love to hear from you</p>
          <a href="mailto:your.email@example.com" className={styles.contactButton}>
            Contact Me
          </a>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Georgina. All rights reserved.</p>
      </footer>
    </div>
  );
} 