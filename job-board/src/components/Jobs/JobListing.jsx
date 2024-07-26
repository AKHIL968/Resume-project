// import React, { useState, useEffect } from "react";
// import { database } from "../../firebase/firebase";
// import { ref, onValue } from "firebase/database";
// import { Link } from "react-router-dom";
// import { MapPinned, CodeXml, ArrowRight, ArrowLeft } from "lucide-react";

// const JobListing = () => {
//   const [jobs, setJobs] = useState([]);
//   const [search, setSearch] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(9); // Set the desired number of items per page

//   useEffect(() => {
//     const jobsRef = ref(database, "jobs");
//     const unsubscribe = onValue(jobsRef, (snapshot) => {
//       const jobsData = snapshot.val();
//       const jobList = [];
//       for (let id in jobsData) {
//         jobList.push({ id, ...jobsData[id] });
//       }
//       setJobs(jobList);
//     });
//     return () => unsubscribe();
//   }, []);

//   const handleSearch = (e) => {
//     setSearch(e.target.value);
//   };

//   const filteredJobs = search
//     ? jobs.filter((job) => {
//         return (
//           (job.title &&
//             job.title.toLowerCase().includes(search.toLowerCase())) ||
//           (job.description &&
//             job.description.toLowerCase().includes(search.toLowerCase())) ||
//           (job.location &&
//             job.location.toLowerCase().includes(search.toLowerCase())) ||
//           (job.requirements &&
//             job.requirements.toLowerCase().includes(search.toLowerCase()))
//         );
//       })
//     : jobs;

//   // Calculate the index range for the current page
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredJobs.slice(indexOfFirstItem, indexOfLastItem);

//   return (
//     <div className="flex flex-col lg:border-4 w-full lg:w-3/4 m-auto p-8 justify-center items-center gap-8 mt-8 h-full mb-8 lg:rounded-2xl">
//       <div className="text-center">
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
//           type="text"
//           placeholder="Search here" 
//           value={search}
//           onChange={handleSearch}
//         />
//         <p>Total jobs: {jobs.length}</p>
//         <p>Filtered jobs: {filteredJobs.length}</p>
//       </div>
//       <div className="w-full">
//         {currentItems.length > 0 ? (
//           <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
//             {currentItems.map((job) => (
//               <li key={job.id} className="border-2 p-4 rounded-xl">
//                 <Link to={`/job/${job.id}`}>
//                   <h2>Title: {job.title || "No title"}</h2>
//                   <hr className="border-1 border-gray-400"/>
//                   <p>Description: {job.description || "No description"}</p>
//                   <hr className="border-1 border-gray-400" />
//                   <div className="flex gap-2 text-center items-center justify-center">
//                     <p>
//                       <MapPinned className="w-4 h-4" />{" "}
//                     </p>
//                     <p>{job.location || "No location"}</p>
//                   </div>
//                   <hr className="border-1 border-gray-400" />
//                   <p>Tech: {job.requirements || "No requirements"}</p>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <div className="text-center">
//             <p>No jobs found</p>

//           </div>
//         )}
//       </div>
//       {/* Add pagination controls */}
//       <div className="flex justify-between gap-16 lg:gap-96">
//         {/* Previous page button */}
//         <div className="flex gap-1">
//           <div>
//             <ArrowLeft className="w-5" />
//           </div>
//           <div>
//             <button
//               className="underline"
//               disabled={currentPage === 1}
//               onClick={() => setCurrentPage(currentPage - 1)}
//             >
//               Previous
//             </button>
//           </div>
//         </div>

//         {/* Next page button */}
//         <div className="flex gap-1">
//           <div>
//             <button
//               className="underline"
//               disabled={
//                 currentPage === Math.ceil(filteredJobs.length / itemsPerPage)
//               }
//               onClick={() => setCurrentPage(currentPage + 1)}
//             >
//               Next
//             </button>
//           </div>
//           <div>
//             <ArrowRight className="w-5" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobListing;

import React, { useState, useEffect } from "react";
import { database } from "../../firebase/firebase";
import { ref, onValue } from "firebase/database";
import { Link } from "react-router-dom";
import { MapPinned, ArrowRight, ArrowLeft, Search } from "lucide-react";

const JobListing = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);

  useEffect(() => {
    const jobsRef = ref(database, "jobs");
    const unsubscribe = onValue(jobsRef, (snapshot) => {
      const jobsData = snapshot.val();
      const jobList = [];
      for (let id in jobsData) {
        jobList.push({ id, ...jobsData[id] });
      }
      setJobs(jobList);
    });
    return () => unsubscribe();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredJobs = search
    ? jobs.filter((job) => {
        return (
          (job.title &&
            job.title.toLowerCase().includes(search.toLowerCase())) ||
          (job.description &&
            job.description.toLowerCase().includes(search.toLowerCase())) ||
          (job.location &&
            job.location.toLowerCase().includes(search.toLowerCase())) ||
          (job.requirements &&
            job.requirements.toLowerCase().includes(search.toLowerCase()))
        );
      })
    : jobs;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredJobs.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="bg-[#EEEDEB] min-h-screen pb-20">
      <div className="max-w-6xl mx-auto">
        {/* <h1 className="text-3xl md:text-4xl font-bold text-[#2F3645] mb-8 text-center">Available Jobs</h1> */}
        
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center border-2 border-[#E6B9A6] rounded-lg px-3 py-2 mb-4">
            <Search className="text-[#939185] w-5 h-5 mr-2" />
            <input
              className="w-full focus:outline-none text-[#2F3645]"
              type="text"
              placeholder="Search jobs..."
              value={search}
              onChange={handleSearch}
            />
          </div>
          <div className="text-[#939185] text-sm">
            <p>Total jobs: {jobs.length} | Filtered jobs: {filteredJobs.length}</p>
          </div>
        </div>

        {currentItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentItems.map((job) => (
              <Link key={job.id} to={`/job/${job.id}`} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
                <h2 className="text-xl font-semibold text-[#2F3645] mb-2">{job.title || "No title"}</h2>
                <p className="text-[#939185] mb-4 line-clamp-2">{job.description || "No description"}</p>
                <div className="flex items-center text-[#E6B9A6] mb-2">
                  <MapPinned className="w-4 h-4 mr-2" />
                  <p>{job.location || "No location"}</p>
                </div>
                <p className="text-sm text-[#939185]">Tech: {job.requirements || "No requirements"}</p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center text-[#939185]">
            <p>No jobs found</p>
          </div>
        )}

        <div className="flex justify-between mt-8">
          <button
            className="flex items-center text-[#2F3645] hover:text-[#E6B9A6] transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Previous
          </button>
          <button
            className="flex items-center text-[#2F3645] hover:text-[#E6B9A6] transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentPage === Math.ceil(filteredJobs.length / itemsPerPage)}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
