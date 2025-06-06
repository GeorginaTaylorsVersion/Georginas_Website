import '../styles/globals.css';
import Header from '../components/Header';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      {router.pathname !== '/' && <Header />}
      <div className={router.pathname !== '/' ? 'main-content-padding' : ''}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp; 