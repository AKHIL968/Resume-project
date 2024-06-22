import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { database } from "../../firebase/firebase";
import { ref, onValue, off } from "firebase/database";

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

    // Cleanup function
    return () => off(jobRef, "value", handleData);
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!job) {
    return <p>Job not found.</p>;
  }

  return (
    <div className="lg:border-4 w-full lg:w-3/4 m-auto mt-8 p-8 flex justify-center flex-col gap-4 items-center mb-8 lg:rounded-2xl">
      <div className="text-center w-2/4">
        <h2>Title: {job.title}</h2> <hr className="border-1 border-gray-400 w-2/4 m-auto" />
        <p>Description: {job.description}</p> <hr className="border-1 border-gray-400 w-2/4 m-auto" />
        <p>Location: {job.location}</p> <hr className="border-1 border-gray-400 w-2/4 m-auto" />
        <p>Tech: {job.requirements}</p>
      </div>
      <div>
        <Link to={`/apply/${id}`}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 w-32">Apply For Job</button>
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
