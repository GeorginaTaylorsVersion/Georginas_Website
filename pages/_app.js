import '../styles/globals.css';
import 'katex/dist/katex.min.css';
import '../styles/markdown.css';
import Layout from '../components/Layout';
import Chatbot from '../components/Chatbot';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Chatbot />
    </Layout>
  );
}

export default MyApp;