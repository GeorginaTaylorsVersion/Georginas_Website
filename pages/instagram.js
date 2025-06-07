import Head from 'next/head';

export default function Instagram() {
  return (
    <div className="instagram-container">
      <Head>
        <title>Instagram Break</title>
      </Head>
      <div className="message">
        Georgina is trying to quit social media (again)
      </div>

      <style jsx>{`
        .instagram-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh; /* Full viewport height */
          background: linear-gradient(45deg, #fff5f7 0%, #ffd6e0 50%, #fff5f7 100%); /* Pink background */
          color: #2c3e50; /* Dark text color */
          font-family: 'Times New Roman', Times, serif; /* Match website font */
          text-align: center;
          padding: 20px;
        }
        .message {
          font-size: 1.5rem; /* Adjust font size as needed */
          max-width: 600px; /* Limit text width */
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
} 