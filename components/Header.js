import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles['header-bar']}>
      <div className={styles['nav-content']}>
        <div className={styles.name}>
          Georgina's Website <span style={{ marginLeft: '0.5rem' }} role="img" aria-label="heart">❤️</span>
        </div>
        <nav className={styles['menu-links']}>
          <a href="/personal-website/" className={styles['menu-link']}>
            AUTHOR
          </a>
          <a href="/" className={styles['menu-link']}>
            NOTES
          </a>
          <a href="https://github.com/GeorginaTaylorsVersion/Georginas_Website" target="_blank" rel="noopener noreferrer" className={styles['menu-link']}>
            GITHUB
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles['menu-link']}>
            INSTAGRAM
          </a>
          <a href="/podcast" className={styles['menu-link']}>
            PODCAST
          </a>
        </nav>
      </div>
    </header>
  );
} 