import '../styles/globals.css';
import Footer from '../components/Footer';
import NewHeader from '../components/NewHeader';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NewHeader />
      <div className="main-content-padding">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp; 