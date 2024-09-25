import React from "react";
import css from "../assets/css.png";
import html from "../assets/html.png";
import js from "../assets/js.svg";
import react from "../assets/react.svg";
import next from "../assets/next.svg";
import tailwind from "../assets/tailwind.svg";
import material from "../assets/materil.png";
import git from "../assets/git.svg";
import github from "../assets/github.png";
import {motion} from "framer-motion"


const Skill = () => {
  return (
    <div className="min-h-fit flex flex-col items-center p-4 gap-24">
      <h2 className="text-white bg-gray py-1 px-6 rounded-xl mt-4 mb-[-4rem]">
        Skills
      </h2>
      <h2 className="text-white text-center text-xl mb-[-4rem]">The skills, tools and <br /> technologies I am really good at:</h2>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-4 text-center">
        <motion.div className="flex flex-col text-white items-center  p-2" whileHover={{scale: 1.1}} transition={{duration:.3}}>
          <div className="h-20 flex items-center justify-center">
            <img src={html} alt="HTML" className="h-full" />
          </div>
          <h2 className="mt-2">HTML</h2>
        </motion.div>
        <motion.div className="flex flex-col text-white items-center  p-2" whileHover={{scale: 1.1}} transition={{duration:.3}}>
          <div className="h-20 flex items-center justify-center">
            <img src={css} alt="CSS" className="h-full" />
          </div>
          <h2 className="mt-2">CSS</h2>
        </motion.div>
        <motion.div whileHover={{scale: 1.1}} transition={{duration:.3}} className="flex flex-col text-white items-center  p-2">
          <div className="h-20 flex items-center justify-center">
            <img src={js} alt="JS" className="h-full" />
          </div>
          <h2 className="mt-2">JS</h2>
        </motion.div>
        <motion.div whileHover={{scale: 1.1}} transition={{duration:.3}} className="flex flex-col text-white items-center  p-2">
          <div className="h-20 flex items-center justify-center">
            <img src={react} alt="React" className="h-full" />
          </div>
          <h2 className="mt-2">React</h2>
        </motion.div>
        <motion.div whileHover={{scale: 1.1}} transition={{duration:.3}} className="flex flex-col text-white items-center  p-2">
          <div className="h-20 flex items-center justify-center">
            <img src={next} alt="Next.js" className="h-full" />
          </div>
          <h2 className="mt-2">Next.js</h2>
        </motion.div>
        <motion.div className="flex flex-col text-white items-center  p-2" whileHover={{scale: 1.1}} transition={{duration:.3}}>
          <div className="h-20 flex items-center justify-center">
            <img src={tailwind} alt="Tailwind CSS" className="h-full" />
          </div>
          <h2 className="mt-2">Tailwind CSS</h2>
        </motion.div>
        <motion.div className="flex flex-col text-white items-center  p-2" whileHover={{scale: 1.1}} transition={{duration:.3}}>
          <div className="h-20 flex items-center justify-center">
            <img src={material} alt="Material UI" className="h-full" />
          </div>
          <h2 className="mt-2">Material UI</h2>
        </motion.div>
        <motion.div className="flex flex-col text-white items-center p-2" whileHover={{scale: 1.1}} transition={{duration:.3}}>
            <div className="h-20 flex items-center justify-center"> 
                    <img src={git} alt="" className="h-full" />
            </div>
            <h2 className="mt-2">Git</h2>
        </motion.div>
        <motion.div className="flex flex-col text-white items-center p-2" whileHover={{scale: 1.1}} transition={{duration:.3}}>
            <div className="h-20 flex items-center justify-center"> 
                    <img src={github} alt="" className="h-full" />
            </div>
            <h2 className="mt-2">GitHub</h2>
        </motion.div>
      </div>
    </div>
  );
};

export default Skill;
