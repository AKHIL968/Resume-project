import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Summary = () => {
  const [summary, setSummary] = useState("");

  const handleSave = () => {
    const summaryInfo = { summary };
    localStorage.setItem("summaryInfo", JSON.stringify(summaryInfo));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Professional Summary
      </h2>
      <textarea
        className="w-full h-40 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
        placeholder="Enter your professional summary here..."
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />
      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition"
        >
          SAVE
        </button>
        <div className="space-x-4">
          <Link
            to="/certificate"
            className="w-full sm:w-auto px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition text-center"
          >
            Previous
          </Link>
          <Link
            to="/preview"
            className="inline-block px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75 transition text-center"
          >
            Preview
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Summary;
