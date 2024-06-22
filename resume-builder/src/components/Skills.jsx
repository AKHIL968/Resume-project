import React, { useState } from "react";
import { Link } from "react-router-dom";

const Skills = () => {
  const [language, setLanguage] = useState("");
  const [development, setDevelopment] = useState("");
  const [tools, setTools] = useState("");

  const handleSave = () => {
    const skillsInfo = {
      language,
      development,
      tools
    };
    localStorage.setItem("skillsInfo", JSON.stringify(skillsInfo));
    alert("Technical skills saved");
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Skills Information</h1>
      <div className="space-y-6 mb-8">
        <InputField
          label="Language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        />
        <InputField
          label="Development"
          value={development}
          onChange={(e) => setDevelopment(e.target.value)}
        />
        <InputField
          label="Development Tools"
          value={tools}
          onChange={(e) => setTools(e.target.value)}
        />
        <button
          onClick={handleSave}
          className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition"
        >
          SAVE
        </button>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <Link
          to="/education"
          className="w-full sm:w-auto px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition text-center"
        >
          Previous
        </Link>
        <Link
          to="/projects"
          className="w-full sm:w-auto px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition text-center"
        >
          Next
        </Link>
        <Link
          to="/preview"
          className="w-full sm:w-auto px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75 transition text-center"
        >
          Preview
        </Link>
      </div>
    </div>
  );
};

const InputField = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      {...props}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
    />
  </div>
);

export default Skills;