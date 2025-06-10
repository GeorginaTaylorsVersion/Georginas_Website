import Head from 'next/head';
import Link from 'next/link';
import { getSortedTermsData } from '../lib/terms';
import Layout from '../components/layout';
import Date from '../components/date';

export async function getStaticProps() {
  const allTermsData = getSortedTermsData();
  return {
    props: {
      allTermsData
    }
  };
}

export default function Home({ allTermsData }) {
  return (
    <Layout home>
      <Head>
        <title>Georgina&apos;s Notes</title>
      </Head>
      <section className="text-xl leading-8 pt-1">
        <p className="text-xl">
          Hi! This is the home for all of my notes on my courses.
        </p>
      </section>
      <section className="text-xl leading-8 pt-1 md:text-xl">
        <h2 className="text-2xl my-4">Terms</h2>
        <ul className="list-none p-0 m-0">
          {allTermsData.map(({ id, date, title, courses }) => (
            <li className="mb-5" key={id}>
              <Link href={`/terms/${id}`}>
                <a className="text-blue-500 hover:underline">{title}</a>
              </Link>
              <br />
              <small className="text-gray-500">
                <Date dateString={date} />
                <br />
                {courses.map((course, index) => (
                  <span key={course} className="mr-2">
                    {course}
                    {index < courses.length - 1 ? ',' : ''}
                  </span>
                ))}
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
} 