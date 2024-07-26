// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import { database } from "../../firebase/firebase";
// import { ref, onValue, off } from "firebase/database";

// const JobDetails = () => {
//   const { id } = useParams();
//   const [job, setJob] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const jobRef = ref(database, `jobs/${id}`);

//     const handleData = (snapshot) => {
//       setJob(snapshot.val());
//       setLoading(false);
//     };

//     onValue(jobRef, handleData);

//     // Cleanup function
//     return () => off(jobRef, "value", handleData);
//   }, [id]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (!job) {
//     return <p>Job not found.</p>;
//   }

//   return (
//     <div className="lg:border-4 w-full lg:w-3/4 m-auto mt-8 p-8 flex justify-center flex-col gap-4 items-center mb-8 lg:rounded-2xl">
//       <div className="text-center w-2/4">
//         <h2>Title: {job.title}</h2> <hr className="border-1 border-gray-400 w-2/4 m-auto" />
//         <p>Description: {job.description}</p> <hr className="border-1 border-gray-400 w-2/4 m-auto" />
//         <p>Location: {job.location}</p> <hr className="border-1 border-gray-400 w-2/4 m-auto" />
//         <p>Tech: {job.requirements}</p>
//       </div>
//       <div>
//         <Link to={`/apply/${id}`}>
//           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 w-32">Apply For Job</button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default JobDetails;

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { database } from "../../firebase/firebase";
import { ref, onValue, off } from "firebase/database";
import { MapPinned, Briefcase, Code } from "lucide-react";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const jobRef = ref(database, `jobs/${id}`);

    const handleData = (snapshot) => {
      setJob(snapshot.val());
      setLoading(false);
    };

    onValue(jobRef, handleData);

    return () => off(jobRef, "value", handleData);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#EEEDEB] flex items-center justify-center">
        <p className="text-[#2F3645] text-xl">Loading...</p>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-[#EEEDEB] flex items-center justify-center">
        <p className="text-[#2F3645] text-xl">Job not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#EEEDEB] py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-[#2F3645] mb-6">{job.title}</h1>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-[#2F3645] mb-2">Description</h2>
          <p className="text-[#939185]">{job.description}</p>
        </div>

        <div className="flex items-center mb-4">
          <MapPinned className="w-5 h-5 text-[#E6B9A6] mr-2" />
          <p className="text-[#939185]">{job.location}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-[#2F3645] mb-2">Requirements</h2>
          <p className="text-[#939185]">{job.requirements}</p>
        </div>

        <Link to={`/apply/${id}`}>
          <button className="w-full bg-[#2F3645] hover:bg-[#3a4255] text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out flex items-center justify-center">
            {/* <Briefcase className="w-5 h-5 mr-2" /> */}
            Apply For Job
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
