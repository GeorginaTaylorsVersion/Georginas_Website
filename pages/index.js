import Link from 'next/link';
import { getTerms } from '../lib/notes';

export default function Home({ terms }) {
  return (
    <div>
      <h1>My Notes</h1>
      <ul>
        {terms.map(term => (
          <li key={term}>
            <Link href={`/${term}`}>{term}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const terms = getTerms();
  return { props: { terms } };
} 