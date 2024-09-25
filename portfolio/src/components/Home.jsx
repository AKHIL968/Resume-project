import React from "react";
import picture from "../assets/image.jpg";
import { MapPin,  Twitter,Laptop, Github, Linkedin, MessageCircleCode } from "lucide-react";
import { motion } from "framer-motion";


const Home = () => {
  return (
    <div className="min-h-fit md:my-0 md:h-fit md:flex-row-reverse flex flex-col items-center p-4 gap-24 my-8 ">
      <div className=""> 
        <img className="md:w-80 md:mr-16 " src={picture} alt="" />
       
      </div>
      <div className=" md:w-3/4   ">
        <motion.h1
          className="text-white text-4xl mb-2"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 2 }}
        >
          Hello, I'm Akhil Mali 👋
        </motion.h1>
        <h2 className="text-white text-left ">
          Hello! I'm a passionate front-end developer with a strong foundation
          in HTML, CSS, JavaScript, and React. As a recent graduate, I am eager
          to learn and grow in the field of web development. <br />
          This portfolio showcases my skills and projects, reflecting my
          commitment to creating dynamic and user-friendly web experiences. I am
          excited to connect with like-minded individuals and explore
          opportunities to contribute to innovative projects. Thank you for
          visiting!
        </h2>
        <div className="text-white flex flex-col gap-2 mt-4">
          <div className="flex gap-2">
            <div>
              <h2>
                <MapPin />
              </h2>
            </div>
            <div>
              <h2>Udaipur, Rajasthan</h2>
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <h2>
                <Laptop />
              </h2>
            </div>
            <div>
              <h2>Available for new projects</h2>
            </div>
          </div>
        </div>
        <div className="text-white flex gap-2 mt-4 ">
        <div className="hover:bg-gray p-1 rounded-xl">
            <a href="https://x.com/akhil_mali02"><Twitter /></a>
        </div>
        <div className="hover:bg-gray p-1 rounded-xl">
            <Github/>
        </div>
        <div className="hover:bg-gray p-1 rounded-xl">
           <a href="https://www.linkedin.com/in/akhil-mali-51a9301b6/"><Linkedin/></a> 
        </div>
        <div className="hover:bg-gray p-1 rounded-xl">
        <MessageCircleCode />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
