import { useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projectList, setProjectList] = useState([
    { project: "", tech: "", descriptions: [""] },
  ]);

  const handleInputChange = (index, field, value, descriptionIndex = null) => {
    const updatedList = [...projectList];
    if (descriptionIndex !== null) {
      updatedList[index].descriptions[descriptionIndex] = value;
    } else {
      updatedList[index][field] = value;
    }
    setProjectList(updatedList);
  };

  const handleAddDescription = (index) => {
    const updatedList = [...projectList];
    updatedList[index].descriptions.push("");
    setProjectList(updatedList);
  };

  const handleRemoveDescription = (index, descriptionIndex) => {
    const updatedList = [...projectList];
    updatedList[index].descriptions.splice(descriptionIndex, 1);
    setProjectList(updatedList);
  };

  const handleAddField = () => {
    setProjectList([...projectList, { project: "", tech: "", descriptions: [""] }]);
  };

  const handleRemoveField = (index) => {
    const updatedList = [...projectList];
    updatedList.splice(index, 1);
    setProjectList(updatedList);
  };

  const handleSave = () => {
    localStorage.setItem("projectInfo", JSON.stringify(projectList));
    alert("Project information saved");
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Project Information</h1>
      {projectList.map((pro, index) => (
        <div key={index} className="mb-8 p-4 bg-gray-50 rounded-lg shadow">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <InputField
              label="Project Name"
              value={pro.project}
              onChange={(e) => handleInputChange(index, "project", e.target.value)}
            />
            <InputField
              label="Tech"
              value={pro.tech}
              onChange={(e) => handleInputChange(index, "tech", e.target.value)}
            />
          </div>
          {pro.descriptions.map((desc, descriptionIndex) => (
            <div key={descriptionIndex} className="mb-4">
              <div className="flex items-center space-x-2">
                <InputField
                  label={`Description ${descriptionIndex + 1}`}
                  value={desc}
                  onChange={(e) =>
                    handleInputChange(index, "descriptions", e.target.value, descriptionIndex)
                  }
                />
                {descriptionIndex > 0 && (
                  <button
                    onClick={() => handleRemoveDescription(index, descriptionIndex)}
                    className="mt-5 px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition"
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          ))}
          <button
            onClick={() => handleAddDescription(index)}
            className="mb-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition"
          >
            Add Description
          </button>
          {index > 0 && (
            <button
              onClick={() => handleRemoveField(index)}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition"
            >
              Remove Project
            </button>
          )}
        </div>
      ))}
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
        <button
          onClick={handleAddField}
          className="w-full sm:w-auto px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition"
        >
          Add Project
        </button>
        <button
          onClick={handleSave}
          className="w-full sm:w-auto px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition"
        >
          SAVE
        </button>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <Link
          to="/skills"
          className="w-full sm:w-auto px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition text-center"
        >
          Previous
        </Link>
        <Link
          to="/experience"
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

export default Projects;