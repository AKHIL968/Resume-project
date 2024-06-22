import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-10 px-4">
      <div className="text-center pt-10 gap-8">
        <p className="text-3xl md:text-5xl mb-2">Welcome to JobHub.</p>
        <p className="text-lg md:text-2xl">
          Where you can post or apply for a job, as for your location or position
        </p>
      </div>
      {/* For Button */}
      <div className="w-full md:w-2/4 h-auto md:h-64 mt-8 flex flex-col md:flex-row justify-center items-center p-8 gap-4 md:gap-28 border-4 border-solid rounded-2xl">
        <div>
          <Link to="/post-job">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 text-center w-32">
              Post Job
            </button>
          </Link>
        </div>
        <div>
          <Link to="jobs">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 text-center w-32">
              View Job
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
