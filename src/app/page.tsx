// src/app/page.tsx

import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center sm:text-left">
          Welcome to Career Readiness Platform
        </h1>

        <p className="text-lg text-center sm:text-left">
          Analyze your resume, track your career growth, and prepare for mock interviews to boost your career prospects.
        </p>

        {/* Option to link to Resume Analyzer */}
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/resume-analyzer"
          >
            Start Resume Analysis
          </a>
        </div>

        {/* Features Overview */}
        <section className="w-full text-center sm:text-left mt-8">
          <h2 className="text-3xl font-semibold mb-4">Key Features:</h2>
          <ul className="list-disc list-inside text-lg">
            <li>Resume Analyzer to identify key skills and gaps.</li>
            <li>Mock Interview chatbot to help you prepare for interviews.</li>
            <li>Video pitch analysis to enhance your self-presentation.</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/about"
        >
          About Us
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/contact"
        >
          Contact Us
        </a>
      </footer>
    </div>
  );
}


