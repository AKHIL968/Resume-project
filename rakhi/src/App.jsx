// import "./App.css";
// import Laptop from "./Laptop";
// import car from "./car-removebg-preview.png";




// function App() {
 
//   // function downloadImage(imageUrl) {
//   //   fetch(imageUrl)
//   //     .then((response) => response.blob())
//   //     .then((blob) => {
//   //       const url = window.URL.createObjectURL(blob);
//   //       const a = document.createElement("a");
//   //       a.style.display = "none";
//   //       a.href = url;
//   //       a.download = "image.jpg";
//   //       document.body.appendChild(a);
//   //       a.click();
//   //       window.URL.revokeObjectURL(url);
//   //     })
//   //     .catch(() => alert("An error occurred while downloading the image."));
//   // }

//   //   const handleDownload = () => {
//   //     downloadImage(car);
//   //   };
//   //   const redirectToWhatsapp = () => {
//   //     window.open("https://wa.me/8619414632", "_blank")
//     // }
//   return (
//     <div>
//        {/* <button
//         onClick={redirectToWhatsapp}
//         className="fixed right-4 top-3/4 transform -translate-y-1/2 bg-dark_pink text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-50"
//       >
//         WhatsApp
//       </button>
//       <header className="flex justify-center h-20 text-center items-center sticky top-0 bg-pink">
//       <p className="text-4xl kalam-bold italic">
//       राखी बाज़ार
//         </p>
//       </header>

//       <div className="flex justify-center  mt-6">
//         <section className="grid grid-rows-4 gap-8">
//           <div className="w-72 h-72 bg-green flex flex-col justify-center items-center rounded-3xl p-3">
//             <div className="h-4/5 text-center">
//               <img id="carImage" src={car} alt="" />
//               <p>Lorem ipsum dolor sit amet.</p>
//               <p>
//                 Price: <span>₨ 101</span>
//               </p>
//             </div>
//             <div className="h-1/5  items-center flex">
//               <button onClick={handleDownload}  className=" p-2 mt-6 w-36 bg-pink rounded-xl">
//                 Download ↓
//               </button>
//             </div>
//           </div>
//           <div className="w-72 h-72 bg-green flex flex-col justify-center items-center rounded-3xl p-3">
//             <div className="h-4/5 text-center">
//               <img src={car} alt="" />
//               <p>Lorem ipsum dolor sit amet.</p>
//               <p>
//                 Price: <span>💸101</span>
//               </p>
//             </div>
//             <div className="h-1/5  items-center flex">
//               <button onClick={handleDownload} className=" p-2 mt-6 w-36 bg-pink rounded-xl">
//                 Download ↓
//               </button>
//             </div>
//           </div>
//           <div className="w-72 h-72 bg-green flex flex-col justify-center items-center rounded-3xl p-3">
//             <div className="h-4/5 text-center">
//               <img src={car} alt="" />
//               <p>Lorem ipsum dolor sit amet.</p>
//               <p>
//                 Price: <span>💸101</span>
//               </p>
//             </div>
//             <div className="h-1/5  items-center flex">
//               <button onClick={handleDownload} className=" p-2 mt-6 w-36 bg-pink rounded-xl">
//                 Download ↓
//               </button>
//             </div>
//           </div>
//           <div className="w-72 h-72 bg-green flex flex-col justify-center items-center rounded-3xl p-3">
//             <div className="h-4/5 text-center">
//               <img src={car} alt="" />
//               <p>Lorem ipsum dolor sit amet.</p>
//               <p>
//                 Price: <span>💸101</span>
//               </p>
//             </div>
//             <div className="h-1/5  items-center flex">
//               <button onClick={handleDownload} className=" p-2 mt-6 w-36 bg-pink rounded-xl">
//                 Download ↓
//               </button>
//             </div>
//           </div>
//         </section>
//       </div>
//       <div className="text-center mt-8 bg-cream p-4">
//         <h1>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo corporis
//           omnis, velit labore placeat doloremque vel facilis laborum vero
//           aspernatur adipisci nostrum reprehenderit, assumenda perferendis modi
//           temporibus vitae, inventore doloribus enim! Tempore quibusdam
//           perferendis officiis quae? Provident dolor qui dolorum, vero quas
//           explicabo, error illo accusantium tempore similique animi minima!
//         </h1>
//       </div>
//       <div className="flex justify-center  mt-6">
//         <section className="grid grid-rows-4 gap-8">
//           <div className="w-72 h-72 bg-green flex flex-col justify-center items-center rounded-3xl p-3">
//             <div className="h-4/5 text-center">
//               <img id="carImage" src={car} alt="" />
//               <p>Lorem ipsum dolor sit amet.</p>
//               <p>
//                 Price: <span>💸101</span>
//               </p>
//             </div>
//             <div className="h-1/5  items-center flex">
//               <button onClick={handleDownload}  className=" p-2 mt-6 w-36 bg-pink rounded-xl">
//                 Download ↓
//               </button>
//             </div>
//           </div>
//           <div className="w-72 h-72 bg-green flex flex-col justify-center items-center rounded-3xl p-3">
//             <div className="h-4/5 text-center">
//               <img src={car} alt="" />
//               <p>Lorem ipsum dolor sit amet.</p>
//               <p>
//                 Price: <span>💸101</span>
//               </p>
//             </div>
//             <div className="h-1/5  items-center flex">
//               <button onClick={handleDownload} className=" p-2 mt-6 w-36 bg-pink rounded-xl">
//                 Download ↓
//               </button>
//             </div>
//           </div>
//           <div className="w-72 h-72 bg-green flex flex-col justify-center items-center rounded-3xl p-3">
//             <div className="h-4/5 text-center">
//               <img src={car} alt="" />
//               <p>Lorem ipsum dolor sit amet.</p>
//               <p>
//                 Price: <span>💸101</span>
//               </p>
//             </div>
//             <div className="h-1/5  items-center flex">
//               <button onClick={handleDownload} className=" p-2 mt-6 w-36 bg-pink rounded-xl">
//                 Download ↓
//               </button>
//             </div>
//           </div>
//           <div className="w-72 h-72 bg-green flex flex-col justify-center items-center rounded-3xl p-3">
//             <div className="h-4/5 text-center">
//               <img src={car} alt="" />
//               <p>Lorem ipsum dolor sit amet.</p>
//               <p>
//                 Price: <span>💸101</span>
//               </p>
//             </div>
//             <div className="h-1/5  items-center flex">
//               <button onClick={handleDownload} className=" p-2 mt-6 w-36 bg-pink rounded-xl">
//                 Download ↓
//               </button>
//             </div>
//           </div>
//         </section>
//       </div> */}
//       <h1>hello</h1>
//       <Laptop />
//     </div>
//   );
// }

// export default App;

