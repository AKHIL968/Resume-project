import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-cream w-full py-6 text-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <nav className="flex flex-wrap justify-center mb-4">
            <Link to="/privacy-policy" className="text-blue-600 hover:text-blue-800 text-sm mx-2 my-1">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-blue-600 hover:text-blue-800 text-sm mx-2 my-1">
              Terms of Service
            </Link>
            <Link to="/contact" className="text-blue-600 hover:text-blue-800 text-sm mx-2 my-1">
              Contact
            </Link>
            <Link to="/about" className="text-blue-600 hover:text-blue-800 text-sm mx-2 my-1">
              About Us
            </Link>
            <Link to="/refund" className="text-blue-600 hover:text-blue-800 text-sm mx-2 my-1">
              Refund Policy
            </Link>
            <Link to="/shipping" className="text-blue-600 hover:text-blue-800 text-sm mx-2 my-1">
              Shipping Policy
            </Link>
          </nav>
          <p className="text-gray-600 text-sm text-center">
            © {new Date().getFullYear()} ShoeBazar by Akhil Mali. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;