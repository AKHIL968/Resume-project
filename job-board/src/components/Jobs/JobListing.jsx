import React, { useState, useEffect } from "react";
import { database } from "../../firebase/firebase";
import { ref, onValue } from "firebase/database";
import { Link } from "react-router-dom";
import { MapPinned, CodeXml, ArrowRight, ArrowLeft } from "lucide-react";

const JobListing = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9); // Set the desired number of items per page

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

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredJobs.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="flex flex-col lg:border-4 w-full lg:w-3/4 m-auto p-8 justify-center items-center gap-8 mt-8 h-full mb-8 lg:rounded-2xl">
      <div className="text-center">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          type="text"
          placeholder="Search here" 
          value={search}
          onChange={handleSearch}
        />
        <p>Total jobs: {jobs.length}</p>
        <p>Filtered jobs: {filteredJobs.length}</p>
      </div>
      <div className="w-full">
        {currentItems.length > 0 ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
            {currentItems.map((job) => (
              <li key={job.id} className="border-2 p-4 rounded-xl">
                <Link to={`/job/${job.id}`}>
                  <h2>Title: {job.title || "No title"}</h2>
                  <hr className="border-1 border-gray-400"/>
                  <p>Description: {job.description || "No description"}</p>
                  <hr className="border-1 border-gray-400" />
                  <div className="flex gap-2 text-center items-center justify-center">
                    <p>
                      <MapPinned className="w-4 h-4" />{" "}
                    </p>
                    <p>{job.location || "No location"}</p>
                  </div>
                  <hr className="border-1 border-gray-400" />
                  <p>Tech: {job.requirements || "No requirements"}</p>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center">
            <p>No jobs found</p>

          </div>
        )}
      </div>
      {/* Add pagination controls */}
      <div className="flex justify-between gap-16 lg:gap-96">
        {/* Previous page button */}
        <div className="flex gap-1">
          <div>
            <ArrowLeft className="w-5" />
          </div>
          <div>
            <button
              className="underline"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previous
            </button>
          </div>
        </div>

        {/* Next page button */}
        <div className="flex gap-1">
          <div>
            <button
              className="underline"
              disabled={
                currentPage === Math.ceil(filteredJobs.length / itemsPerPage)
              }
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </button>
          </div>
          <div>
            <ArrowRight className="w-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
