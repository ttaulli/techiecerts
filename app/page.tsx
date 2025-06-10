import React from 'react';

const HomePage: React.FC = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-blue-100 to-white min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-3xl w-full">
          <h1 className="text-3xl font-bold text-blue-600 mb-6">Welcome to TechieCerts.com</h1>
          <p className="text-gray-700 mb-4">
            This is where you will find updates for Tom Taull&apos;s  book about the AI-900 exam.
          </p>
          <div className="mt-8">
            <img 
              src="/ai-900-cover.png" 
              alt="AI-900 Book Cover" 
              className="max-w-full h-auto mx-auto rounded-lg shadow-md" 
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;


