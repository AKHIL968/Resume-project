import { useState, useEffect } from "react";
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
  const [user, setUser] = useState("");

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
      alert("You Should Login first");
    }
    const jobsRef = ref(database, "jobs");
    const job = {
      title,
      description,
      location,
      requirements,
      posterEmail,
    };
    push(jobsRef, job)
      .then(() => {
        setTitle("");
        setDescription("");
        setLocation("");
        setRequirements("");
        setPosterEmail("");
      })
      .catch((error) => {
        console.error("Error adding job: ", error);
      });
  };

  if (!user) {
    return (
      <div>
        <h1>Post a Job</h1>
        <p>You must be logged in to post a job.</p>
        <button>
          <Link>Login here</Link>
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full lg:border-4 lg:w-3/4 m-auto p-8 justify-center items-center gap-8 mt-8 lg:rounded-2xl">
      <div className="text-text-dark text-3xl font-extrabold">
        <h1>Post a Job</h1>
      </div>
      <div className="">
        <form onSubmit={handlePost}>
          <div>
            <p className="block text-gray-700 text-sm font-bold mb-2">Title:</p>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />{" "}
          </div>
          <div>
            <p className="block text-gray-700 text-sm font-bold mb-2">
              Description:
            </p>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />{" "}
          </div>
          <div>
            <p className="block text-gray-700 text-sm font-bold mb-2">
              Location:
            </p>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />{" "}
          </div>
          <div>
            <p className="block text-gray-700 text-sm font-bold mb-2">
              Requirements:
            </p>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="requirements"
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
            />{" "}
          </div>
          <div>
          <p className="block text-gray-700 text-sm font-bold mb-2">
              Your Email:
            </p>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Enter Your Email"
              value={posterEmail}
              onChange={(e) => setPosterEmail(e.target.value)}
              required
            />{" "}
          </div>
            <div className="flex items-center justify-center flex-col">

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 w-32" type="submit">Post</button>
            </div>
        </form>
      </div>
      
    </div>
  );
};

export default JobPosting;
