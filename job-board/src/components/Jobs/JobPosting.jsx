

import React, { useState, useEffect } from "react";
import { database } from "../../firebase/firebase";
import { ref, push } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";

const JobPosting = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [requirements, setRequirements] = useState("");
  const [posterEmail, setPosterEmail] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setPosterEmail(currentUser.email);
      }
    });

    return () => unsubscribe();
  }, []);

  const handlePost = (e) => {
    e.preventDefault();
    if (!user) {
      alert("You must be logged in to post a job.");
      return;
    }
    const jobsRef = ref(database, "jobs");
    const job = { title, description, location, requirements, posterEmail };
    push(jobsRef, job)
      .then(() => {
        setTitle("");
        setDescription("");
        setLocation("");
        setRequirements("");
        alert("Job posted successfully!");
      })
      .catch((error) => {
        console.error("Error adding job: ", error);
        alert("Failed to post job. Please try again.");
      });
  };

  if (!user) {
    return (
      <div className="bg-[#EEEDEB] min-h-screen flex items-center justify-center px-4">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
          <h1 className="text-2xl font-bold text-[#2F3645] mb-4">Post a Job</h1>
          <p className="text-[#939185] mb-4">You must be logged in to post a job.</p>
          <Link to="/login" className="bg-[#2F3645] text-white px-4 py-2 rounded-lg hover:bg-[#3a4255] transition duration-300">
            Login here
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#EEEDEB] min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-[#2F3645] mb-8 text-center">Post a Job</h1>
        <form onSubmit={handlePost} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-[#2F3645] font-semibold mb-2">Title:</label>
            <input
              id="title"
              className="w-full px-3 py-2 border border-[#E6B9A6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F3645]"
              type="text"
              placeholder="Job Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-[#2F3645] font-semibold mb-2">Description:</label>
            <textarea
              id="description"
              className="w-full px-3 py-2 border border-[#E6B9A6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F3645]"
              placeholder="Job Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows="4"
            />
          </div>
          <div>
            <label htmlFor="location" className="block text-[#2F3645] font-semibold mb-2">Location:</label>
            <input
              id="location"
              className="w-full px-3 py-2 border border-[#E6B9A6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F3645]"
              type="text"
              placeholder="Job Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="requirements" className="block text-[#2F3645] font-semibold mb-2">Requirements:</label>
            <input
              id="requirements"
              className="w-full px-3 py-2 border border-[#E6B9A6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F3645]"
              type="text"
              placeholder="Job Requirements"
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-[#2F3645] font-semibold mb-2">Your Email:</label>
            <input
              id="email"
              className="w-full px-3 py-2 border border-[#E6B9A6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F3645]"
              type="email"
              placeholder="Your Email"
              value={posterEmail}
              onChange={(e) => setPosterEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-[#2F3645] text-white px-6 py-3 rounded-lg hover:bg-[#3a4255] transition duration-300"
              type="submit"
            >
              Post Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobPosting;
