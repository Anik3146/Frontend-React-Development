// Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <p className="text-sm mb-2">© {new Date().getFullYear()} Frontend Development Task</p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15v4a2 2 0 002 2h14a2 2 0 002-2v-4M5 9l7-4 7 4M12 3v10m0 0V3m0 10h7m-7 0H5"></path>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

