import { useState } from "react";
import { Link } from "react-router-dom";

const Education = () => {
  const [educationList, setEducationList] = useState([
    { education: "", course: "", year: "", location: "" },
  ]);

  const handleSave = () => {
    localStorage.setItem("educationInfo", JSON.stringify(educationList));
    alert("Education information saved");
  };

  const handleAddField = () => {
    setEducationList([...educationList, { education: "", course: "", year: "", location: "" }]);
  };

  const handleInputChange = (index, field, value) => {
    const updatedList = [...educationList];
    updatedList[index][field] = value;
    setEducationList(updatedList);
  };

  const handleRemoveField = (index) => {
    const updatedList = [...educationList];
    updatedList.splice(index, 1);
    setEducationList(updatedList);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Education</h1>
      {educationList.map((edu, index) => (
        <div key={index} className="mb-8 p-4 bg-gray-50 rounded-lg shadow">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <InputField
              label="College Name"
              placeholder="Enter College Name"
              value={edu.education}
              onChange={(e) => handleInputChange(index, "education", e.target.value)}
            />
            <InputField
              label="Course"
              placeholder="Enter Course"
              value={edu.course}
              onChange={(e) => handleInputChange(index, "course", e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <InputField
              label="Year"
              placeholder="Enter Year"
              value={edu.year}
              onChange={(e) => handleInputChange(index, "year", e.target.value)}
            />
            <InputField
              label="Location"
              placeholder="Enter Location"
              value={edu.location}
              onChange={(e) => handleInputChange(index, "location", e.target.value)}
            />
          </div>
          {index > 0 && (
            <button
              onClick={() => handleRemoveField(index)}
              className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition"
            >
              Remove
            </button>
          )}
        </div>
      ))}
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
        <button
          onClick={handleAddField}
          className="w-full sm:w-auto px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition"
        >
          Add Field
        </button>
        <button
          onClick={handleSave}
          className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition"
        >
          SAVE
        </button>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <Link
          to="/"
          className="w-full sm:w-auto px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition text-center"
        >
          Previous
        </Link>
        <Link
          to="/skills"
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

export default Education;