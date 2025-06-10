import Head from 'next/head';
import Link from 'next/link';
import { getSortedTermsData } from '../lib/terms';

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
    <>
      <Head>
        <title>Georgina&apos;s Notes</title>
      </Head>
      <div className="homepage-content-padding">
        <section className="text-xl leading-8 pt-1">
          <p className="text-xl">
            Hi! This is the home for all of my notes on my courses.
          </p>
        </section>
        <section className="text-xl leading-8 pt-1 md:text-xl content-rectangle">
          <h2 className="text-2xl my-4">Terms</h2>
          <div className="unit-grid">
            {allTermsData.map(({ id, date, title, courses }) => (
              <Link href={`/terms/${id}`} key={id} className="unit-card">
                <div className="unit-title">{title}</div>
                <small className="text-gray-500">
                  {date}
                  <br />
                  {courses.map((course, index) => (
                    <span key={course} className="mr-2">
                      {course}
                      {index < courses.length - 1 ? ',' : ''}
                    </span>
                  ))}
                </small>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
} 