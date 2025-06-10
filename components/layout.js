import Head from 'next/head';
import Link from 'next/link';
import styles from './Header.module.css';

const name = 'Georgina';
export const siteTitle = 'Georgina's Notes';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Georgina's personal notes website"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.jpg"
              className={`${styles.headerHomeImage} rounded-full`}
              alt={name}
            />
            <h1 className="text-5xl leading-tight font-extrabold my-4 tracking-tighter">{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpg"
                  className={`${styles.headerImage} rounded-full`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className="text-2xl my-4">
              <Link href="/">
                <a className="text-inherit no-underline hover:underline">{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="pt-12 pb-24">
          <Link href="/">
            <a className="text-blue-500 hover:underline">← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
} 