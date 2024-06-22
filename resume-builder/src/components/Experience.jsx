import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Experience = () => {
  const [hasExperience, setHasExperience] = useState(false);
  const [experienceList, setExperienceList] = useState([]);

  useEffect(() => {
    const storedExperienceList = JSON.parse(localStorage.getItem("experienceInfo"));
    if (storedExperienceList && Array.isArray(storedExperienceList)) {
      setExperienceList(storedExperienceList);
      setHasExperience(storedExperienceList.length > 0);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("experienceInfo", JSON.stringify(experienceList));
    alert("Experience information saved");
  };

  const handleAddField = () => {
    setExperienceList([
      ...experienceList,
      { company: "", position: "", startDate: "", endDate: "", description: "" },
    ]);
  };

  const handleInputChange = (index, field, value) => {
    const updatedList = [...experienceList];
    updatedList[index][field] = value;
    setExperienceList(updatedList);
  };

  const handleRemoveField = (index) => {
    const updatedList = [...experienceList];
    updatedList.splice(index, 1);
    setExperienceList(updatedList);
  };

  const handleExperienceCheckbox = (event) => {
    setHasExperience(event.target.checked);
    if (!event.target.checked) {
      setExperienceList([]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Experience</h1>
      <label className="flex items-center mb-4">
        <input
          type="checkbox"
          checked={hasExperience}
          onChange={handleExperienceCheckbox}
          className="form-checkbox h-5 w-5 text-blue-600"
        />
        <span className="ml-2 text-gray-700">I have experience</span>
      </label>

      {hasExperience && (
        <>
          {experienceList.map((exp, index) => (
            <div key={index} className="mb-8 p-4 bg-gray-50 rounded-lg shadow">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <InputField
                  label="Company"
                  placeholder="Enter Company Name"
                  value={exp.company}
                  onChange={(e) => handleInputChange(index, "company", e.target.value)}
                />
                <InputField
                  label="Position"
                  placeholder="Enter Position"
                  value={exp.position}
                  onChange={(e) => handleInputChange(index, "position", e.target.value)}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <InputField
                  label="Start Date"
                  placeholder="Enter Start Date"
                  value={exp.startDate}
                  onChange={(e) => handleInputChange(index, "startDate", e.target.value)}
                />
                <InputField
                  label="End Date"
                  placeholder="Enter End Date"
                  value={exp.endDate}
                  onChange={(e) => handleInputChange(index, "endDate", e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  placeholder="Enter Description"
                  value={exp.description}
                  onChange={(e) => handleInputChange(index, "description", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  rows="4"
                />
              </div>
              {index > 0 && (
                <button
                  onClick={() => handleRemoveField(index)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            onClick={handleAddField}
            className="mb-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition"
          >
            Add Experience
          </button>
        </>
      )}
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
        <button
          onClick={handleSave}
          className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition"
        >
          SAVE
        </button>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <Link
          to="/projects"
          className="w-full sm:w-auto px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition text-center"
        >
          Previous
        </Link>
        <Link
          to="/certificate"
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

export default Experience;