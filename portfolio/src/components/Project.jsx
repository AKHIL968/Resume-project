import React from "react";
import project1 from "../assets/one.webp";
import { motion } from "framer-motion";
import {SquareArrowOutUpRight}  from "lucide-react"

const Project = () => {
  return (
    <div className="min-h-fit flex flex-col items-center  p-4 gap-24 my-8 pb-10 bg-blue">
      <h2 className="text-white bg-gray py-1 px-6 rounded-xl mt-4 mb-[-4rem]">
        Project
      </h2>
      <h2 className="text-white text-center text-xl mb-[-4rem]">
        Some of the noteworthy <br /> projects I have built:
      </h2>
      <div className="h-fit mb-[-4rem] rounded-xl w-full flex flex-col md:flex-row md:px-32 ">
        <motion.div className="w-full h-52 md:w-2/4  md:h-80 flex justify-center items-center p-4 bg-gray rounded-t-xl md:rounded-t-none md:rounded-l-xl">
          <motion.img
            whileHover={{ scale: 1.050 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl md:w-96"
            src={project1} 
            alt=""
          />
        </motion.div>
        <div className="text-white md:h-80 md:w-2/4  text-left p-4 bg-dark_blue rounded-b-xl md:rounded-b-none md:text-center md:px-16 md:py-6">
          <h1 className="text-white text-xl mb-4 md:text-left">Project 1</h1>
          <h2>
            A platform for comparing and finding affordable flights, as well as
            booking and purchasing tickets safely and easily in a few simple
            clicks.
          </h2>
          <div className="mt-10 text-xl md:mt-4  ">
            <h2 className="md:text-left">Tech Used:</h2>
           <div className="flex flex-wrap gap-4 text-sm">
              <div className="bg-gray px-4 py-2 rounded-3xl">
                <h2>React</h2>
              </div>
              <div className="bg-gray px-4 py-2 rounded-3xl">
                <h2>JavaScript</h2>
              </div>
              <div className="bg-gray px-4 py-2 rounded-3xl">
                <h2>Tailwind CSS</h2>
              </div>
              <div className="bg-gray px-4 py-2 rounded-3xl">
                <h2>Firebase</h2>
              </div>
              <div className="bg-gray px-4 py-2 rounded-3xl">
                <h2>Razorpay</h2>
              </div>
           </div>
            
          </div>
        </div>
      </div>
      <div className="h-fit mb-[-4rem] rounded-xl w-full flex flex-col md:flex-row-reverse md:px-32 ">
        <motion.div className="w-full h-52 md:w-2/4  md:h-80 flex justify-center items-center p-4 bg-gray rounded-t-xl md:rounded-t-none">
          <motion.img
            whileHover={{ scale: 1.050 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl md:w-96"
            src={project1} 
            alt=""
          />
        </motion.div>
        <div className="text-white md:h-80 md:w-2/4  text-left p-4 bg-dark_blue rounded-b-xl md:rounded-b-none md:text-center md:px-16 md:py-6">
          <h1 className="text-white text-xl mb-4 md:text-left">Project 1</h1>
          <h2>
            A platform for comparing and finding affordable flights, as well as
            booking and purchasing tickets safely and easily in a few simple
            clicks.
          </h2>
          <div className="mt-10 text-xl md:mt-4  ">
            <h2 className="md:text-left">Tech Used:</h2>
           <div className="flex flex-wrap gap-4 text-sm">
              <div className="bg-gray px-4 py-2 rounded-3xl">
                <h2>React</h2>
              </div>
              <div className="bg-gray px-4 py-2 rounded-3xl">
                <h2>JavaScript</h2>
              </div>
              <div className="bg-gray px-4 py-2 rounded-3xl">
                <h2>Tailwind CSS</h2>
              </div>
              <div className="bg-gray px-4 py-2 rounded-3xl">
                <h2>Firebase</h2>
              </div>
              <div className="bg-gray px-4 py-2 rounded-3xl">
                <h2>Razorpay</h2>
              </div>
           </div>
            
          </div>
        </div>
      </div>
      <div className="h-fit mb-[-4rem] rounded-xl w-full flex flex-col md:flex-row md:px-32 ">
        <motion.div className="w-full h-52 md:w-2/4  md:h-80 flex justify-center items-center p-4 bg-gray rounded-t-xl md:rounded-t-none">
          <motion.img
            whileHover={{ scale: 1.050 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl md:w-96"
            src={project1} 
            alt=""
          />
        </motion.div>
        <div className= " text-white md:h-80 md:w-2/4  text-left p-4 bg-dark_blue rounded-b-xl md:rounded-b-none md:text-center md:px-16 md:py-6 ">
        <div className="flex gap-4">
            <div>
            <h1 className="text-white text-xl mb-4 md:text-left">Project 1</h1>
            </div>
            <div>

           <a href="https://akhilmali.netlify.app/"><SquareArrowOutUpRight /></a>
            </div>
        </div>
          <h2>
            A platform for comparing and finding affordable flights, as well as
            booking and purchasing tickets safely and easily in a few simple
            clicks.
          </h2>
          <div className="mt-10 text-xl md:mt-4  ">
            <h2 className="md:text-left">Tech Used:</h2>
           <div className="flex flex-wrap gap-4 text-sm">
              <div className="bg-gray px-4 py-2 rounded-3xl">
                <h2>React</h2>
              </div>
              <div className="bg-gray px-4 py-2 rounded-3xl">
                <h2>JavaScript</h2>
              </div>
              <div className="bg-gray px-4 py-2 rounded-3xl">
                <h2>Tailwind CSS</h2>
              </div>
              <div className="bg-gray px-4 py-2 rounded-3xl">
                <h2>Firebase</h2>
              </div>
              <div className="bg-gray px-4 py-2 rounded-3xl">
                <h2>Razorpay</h2>
              </div>
           </div>
            
          </div>
        </div>
      </div>
      <div className="h-fit mb-[-4rem] rounded-xl w-full flex flex-col md:flex-row-reverse md:px-32 ">
        <motion.div className="w-full h-52 md:w-2/4  md:h-80 flex justify-center items-center p-4 bg-gray rounded-t-xl md:rounded-t-none">
          <motion.img
            whileHover={{ scale: 1.050 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl md:w-96"
            src={project1} 
            alt=""
          />
        </motion.div>
        <div className="text-white md:h-80 md:w-2/4  text-left p-4 bg-dark_blue rounded-b-xl md:rounded-b-none md:text-center md:px-16 md:py-6 md:mb-16">
          <h1 className="text-white text-xl mb-4 md:text-left ">Project 1</h1>
          <h2>
            A platform for comparing and finding affordable flights, as well as
            booking and purchasing tickets safely and easily in a few simple
            clicks.
          </h2>
          <div className="mt-10 text-xl md:mt-4  ">
            <h2 className="md:text-left">Tech Used:</h2>
           <div className="flex flex-wrap gap-4 text-sm">
              <div className="bg-gray px-4 py-2 rounded-3xl">
                <h2>React</h2>
              </div>
              <div className="bg-gray px-4 py-2 rounded-3xl">
                <h2>JavaScript</h2>
              </div>
              <div className="bg-gray px-4 py-2 rounded-3xl">
                <h2>Tailwind CSS</h2>
              </div>
              <div className="bg-gray px-4 py-2 rounded-3xl">
                <h2>Firebase</h2>
              </div>
              <div className="bg-gray px-4 py-2 rounded-3xl">
                <h2>Razorpay</h2>
              </div>
           </div>
            
          </div>
           
        </div>
      </div>
    </div>
  );
};

export default Project;
