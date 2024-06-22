import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Certificate = () => {
  const [certificates, setCertificates] = useState([{ name: "", issuer: "" }]);

  useEffect(() => {
    const storedCertificates = JSON.parse(localStorage.getItem("certificateInfo"));
    if (storedCertificates && storedCertificates.length > 0) {
      setCertificates(storedCertificates);
    }
  }, []);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedCertificates = [...certificates];
    updatedCertificates[index][name] = value;
    setCertificates(updatedCertificates);
  };

  const handleAddCertificate = () => {
    setCertificates([...certificates, { name: "", issuer: "" }]);
  };

  const handleRemoveCertificate = (index) => {
    const updatedCertificates = certificates.filter((_, i) => i !== index);
    setCertificates(updatedCertificates);
  };

  const handleSave = () => {
    localStorage.setItem("certificateInfo", JSON.stringify(certificates));
    alert("Certificate information saved!");
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Certificate Information</h1>
      </div>
      <div className="space-y-6">
        {certificates.map((certificate, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg shadow">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField
                label="Certificate Name"
                name="name"
                value={certificate.name}
                onChange={(e) => handleInputChange(index, e)}
              />
              <InputField
                label="Issuing Organization"
                name="issuer"
                value={certificate.issuer}
                onChange={(e) => handleInputChange(index, e)}
              />
            </div>
            {certificates.length > 1 && (
              <button
                onClick={() => handleRemoveCertificate(index)}
                className="mt-4 px-3 py-1 bg-red-500 text-white text-sm font-semibold rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={handleAddCertificate}
            className="w-full sm:w-auto px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition"
          >
            Add Certificate
          </button>
          <button
            onClick={handleSave}
            className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition"
          >
            SAVE
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Link
          to="/experience"
          className="w-full sm:w-auto px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition text-center"
        >
          Previous
        </Link>
        <Link
          to="/summary"
          className="w-full sm:w-auto px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition text-center"
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

export default Certificate;