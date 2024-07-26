import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <nav>
        <Link to="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          Dashboard
        </Link>
        <Link to="/expense" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          Expenses
        </Link>
        <Link to="/categories" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          Categories
        </Link>
        <Link to="/reports" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          Reports
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;