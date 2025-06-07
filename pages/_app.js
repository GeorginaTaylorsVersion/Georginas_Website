import '../styles/globals.css';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className="main-content-padding">
        <Component {...pageProps} />
      </div>
      <footer>
        <p>&copy; 2025 Georgina Wang. All rights reserved.</p>
      </footer>
    </>
  );
}

export default MyApp; 