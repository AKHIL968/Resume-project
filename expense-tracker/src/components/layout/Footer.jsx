import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 fixed bottom-0 w-full">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Expense Tracker by Akhil Mali. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
