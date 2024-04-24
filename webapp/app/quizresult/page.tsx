import React from 'react';
import Link from 'next/link';

const mockResults = {
  score: 6,
  totalQuestions: 8,
  results: [
    { letter: 'A', isCorrect: true },
    { letter: 'B', isCorrect: false },
    { letter: 'C', isCorrect: true },
  ],
};

export default function Results() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Quiz Results</h2>
      <p className="text-xl text-center mb-8">
        You scored {mockResults.score} out of {mockResults.totalQuestions}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {mockResults.results.map((result, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-lg ${
              result.isCorrect ? 'bg-green-100' : 'bg-red-100'
            }`}
          >
            <span className="text-2xl font-semibold">{result.letter}</span>
            <span className={`mt-1 ${result.isCorrect ? 'text-green-600' : 'text-red-600'}`}>
              {result.isCorrect ? '✓ Correct' : '✗ Incorrect'}
            </span>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-5">
        <Link href="/quiz">
          <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
            Retake Quiz
          </button>
        </Link>
        <Link href="/select-level">
          <button className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300">
            Choose Level
          </button>
        </Link>
      </div>
    </div>
  );
}
