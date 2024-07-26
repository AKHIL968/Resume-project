// import { Link } from "react-router-dom";

// const HomePage = () => {
//   return (
//     <div className="flex flex-col justify-center items-center mb-10 px-4">
//       <div className="text-center pt-10 gap-8">
//         <p className="text-3xl md:text-5xl mb-2">Welcome to JobHub.</p>
//         <p className="text-lg md:text-2xl">
//           Where you can post or apply for a job, as for your location or position
//         </p>
//       </div>
//       {/* For Button */}
//       <div className="w-full md:w-2/4 h-auto md:h-64 mt-8 flex flex-col md:flex-row justify-center items-center p-8 gap-4 md:gap-28 border-4 border-solid rounded-2xl">
//         <div>
//           <Link to="/post-job">
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 text-center w-32">
//               Post Job
//             </button>
//           </Link>
//         </div>
//         <div>
//           <Link to="jobs">
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 text-center w-32">
//               View Job
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-10 px-4  min-h-screen">
      <div className="text-center pt-10 gap-8">
        <p className="text-3xl md:text-5xl mb-2 text-[#2F3645] font-bold">Welcome to JobHub.</p>
        <p className="text-lg md:text-2xl text-[#939185]">
          Where you can post or apply for a job, as for your location or position
        </p>
      </div>
      {/* For Button */}
      <div className="w-full md:w-3/4 lg:w-2/4 mt-8 flex flex-col md:flex-row justify-center items-center p-4 md:p-8 gap-4 md:gap-8 border-4 border-[#E6B9A6] rounded-2xl bg-white">
        <div className="w-full md:w-1/2">
          <Link to="/post-job" className="block">
            <button className="bg-[#2F3645] hover:bg-[#939185] text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E6B9A6] transition duration-300 ease-in-out w-full">
              Post Job
            </button>
          </Link>
        </div>
        <div className="w-full md:w-1/2">
          <Link to="jobs" className="block">
            <button className="bg-[#2F3645] hover:bg-[#939185] text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E6B9A6] transition duration-300 ease-in-out w-full">
              View Job
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;