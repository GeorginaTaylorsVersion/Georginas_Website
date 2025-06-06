import '../styles/globals.css';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className="main-content-padding">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp; 