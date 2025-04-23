// src/app/homepage.tsx

import Link from "next/link";
import styles from './homepage.module.css';

const Homepage = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to Career Readiness Platform</h1>
      <div className={styles.features}>
        <Link href="/resume-analyzer">
          <div className={styles.featureCard}>
            <h2>Resume Analyzer</h2>
            <p>Analyze your resume and get valuable feedback!</p>
          </div>
        </Link>

        <Link href="/resume-evolution">
          <div className={styles.featureCard}>
            <h2>Resume Evolution Tracker</h2>
            <p>Track the progress and evolution of your resume over time.</p>
          </div>
        </Link>

        <Link href="/mock-interview">
          <div className={styles.featureCard}>
            <h2>Mock Interview Chatbot</h2>
            <p>Prepare for interviews with a virtual chatbot!</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
