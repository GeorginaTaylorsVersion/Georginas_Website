import '../styles/globals.css';
import 'katex/dist/katex.min.css';
import '../styles/markdown.css';
import Header from '../components/Header';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  // Match notes pages: /[term]/[course]/units/[unit]/notes/[note]
  const isNotesPage = /^\/[\w%\-.]+\/[\w%\-.]+\/units\/[\w%\-.]+\/notes\/[\w%\-.]+$/.test(router.asPath);

  return (
    <>
      <Header />
      {isNotesPage ? (
      <div className="main-content-padding">
          <div className="content-rectangle">
            <Component {...pageProps} />
          </div>
        </div>
      ) : (
        <Component {...pageProps} />
      )}
      <footer>
        <p>&copy; 2025 Georgina Wang. All rights reserved.</p>
      </footer>
    </>
  );
}

export default MyApp; 