import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { database } from "../firebase/firebase";
import { ref, onValue, off } from "firebase/database";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { storage } from "../firebase/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const ApplyJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(true);
  const [applying, setApplying] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState("");

  useEffect(() => {
    const jobRef = ref(database, `jobs/${id}`);

    const handleData = (snapshot) => {
      const jobData = snapshot.val();
      if (jobData) {
        setJob(jobData);
      } else {
        setError("Job not found");
      }
      setLoading(false);
    };

    onValue(jobRef, handleData, (error) => {
      setError(error.message);
      setLoading(false);
    });

    return () => off(jobRef, "value", handleData);
  }, [id]);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setEmail(currentUser.email);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("You should have to login first");
    }
    setApplying(true);
    setError(null);

    try {
      // Upload resume
      let resumeUrl = "";
      if (resume) {
        const storage = getStorage();
        const fileRef = storageRef(
          storage,
          `resumes/${Date.now()}_${resume.name}`
        );
        await uploadBytes(fileRef, resume);
        resumeUrl = await getDownloadURL(fileRef);
      }

      // Here you would typically send this data to a backend service
      // The backend service would then send an email to the job poster
      // For this example, we'll just log the data
      console.log({
        jobId: id,
        jobTitle: job.title,
        applicantName: name,
        applicantEmail: email,
        applicantMobileNumber: mobileNumber,
        applicantMessage: message,
        resumeUrl,
        posterEmail: job.posterEmail,
      });

      // Reset form
      setName("");
      setEmail("");
      setMobileNumber("");
      setMessage("");
      setResume(null);

      alert("Application submitted successfully!");
      navigate("/"); // Redirect to home page or job listings
    } catch (error) {
      setError("Failed to submit application. Please try again.");
      console.error("Application submission error:", error);
    } finally {
      setApplying(false);
    }
  };

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!job) {
    return <p>Job not found.</p>;
  }

  if (!user) {
    return (
      <div>
        <h1>Apply For a Job</h1>
        <h1>you have to login first</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:border-4 lg:w-3/4 m-auto p-8 justify-center items-center gap-8 mt-8 h-full mb-8 lg:rounded-2xl">
      <div>
        <h2 className="text-2xl text-color-darkest underline">
          Apply for {job.title}
        </h2>
      </div>
      <div className="flex flex-col">
        <form onSubmit={handleSubmit}>
          <div>
          <p className="block text-gray-700 text-sm font-bold mb-2">Name:</p>
          <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
            />
            </div>
            <div>
            <p className="block text-gray-700 text-sm font-bold mb-2">Email:</p>
          <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
            />
            </div>
            <div>
            <p className="block text-gray-700 text-sm font-bold mb-2">Mobile:</p>
          <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="tel"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            placeholder="Your Mobile Number"
            required
            />
            </div>
            <div>
            <p className="block text-gray-700 text-sm font-bold mb-2">Message:</p>
          <textarea
className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            required
            />
            </div>
            <div className="">
            <p className="block text-gray-700 text-sm font-bold mb-2">Resume:</p>
          <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="file"
            onChange={(e) => setResume(e.target.files[0])}
            accept=".pdf,.doc,.docx"
            required
            />
            </div>
            <div className="flex items-center justify-center">

          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 w-32" disabled={applying}>
            {applying ? "Submitting..." : "Submit Application"}
          </button>
            </div>
        </form>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default ApplyJob;
