import '../styles/globals.css';
import 'katex/dist/katex.min.css';
import '../styles/markdown.css';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;