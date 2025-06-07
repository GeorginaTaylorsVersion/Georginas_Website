import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-content']}>
        <p>&copy; 2024 Georgina Wang. All rights reserved.</p>
      </div>
    </footer>
  );
} 