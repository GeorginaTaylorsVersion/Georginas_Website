import Link from 'next/link';
import styles from './NewHeader.module.css';

export default function NewHeader() {
  return (
    <header className={styles.header}>
      <div className={styles['header-content']}>
        <Link href="/" className={styles.logo}>
          Georgina's Website
        </Link>
        <nav className={styles.nav}>
          <Link href="/" className={styles['nav-link']}>
            AUTHOR
          </Link>
          <Link href="/notes" className={styles['nav-link']}>
            NOTES
          </Link>
        </nav>
      </div>
    </header>
  );
} 