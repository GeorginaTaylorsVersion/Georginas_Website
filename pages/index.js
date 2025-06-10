import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Georgina's Business</title>
        <meta name="description" content="Professional services by Georgina" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.title}>Welcome to Georgina's Business</h1>
          <p className={styles.description}>
            Professional services tailored to your needs
          </p>
          <button className={styles.ctaButton}>Get Started</button>
        </section>

        {/* Services Section */}
        <section className={styles.services}>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <div className={styles.serviceGrid}>
            <div className={styles.serviceCard}>
              <h3>Service 1</h3>
              <p>Detailed description of your first service offering.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Service 2</h3>
              <p>Detailed description of your second service offering.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Service 3</h3>
              <p>Detailed description of your third service offering.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className={styles.contact}>
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <div className={styles.contactContent}>
            <p>Ready to get started? Reach out to us today!</p>
            <button className={styles.contactButton}>Contact Now</button>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Georgina's Business. All rights reserved.</p>
      </footer>
    </div>
  );
} 