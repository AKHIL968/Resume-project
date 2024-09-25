import React from "react";
import picture from "../assets/image.jpg";

const About = () => {
  return (
    <div className="min-h-fit flex flex-col items-center  p-4 gap-24 my-8 pb-10 bg-blue md:flex-row md:justify-center">
      <h2 className="text-white bg-gray py-1 px-6 rounded-xl mt-4 mb-[-4rem] md:hidden">About</h2>
      <div className=" md:w-2/4">
        <img className="rounded-lg md:w-80 flex justify-center m-auto md:p-4 " src={picture} alt="" />
      </div>
      <div className="text-white text-left  md:w-2/4 md:p-4">
        <h2>
          Hello! I recently graduated with a Bachelor of Technology (B.Tech) in
          Computer Science Enginee ring. My journey through this program has
          equipped me with a solid foundation in programming languages,
          algorithms, and software development, particularly in HTML, CSS,
          JavaScript, and React.
        </h2>
        <br />
        <h2>
          As a passionate front-end developer, I am excited about the endless
          possibilities in web development. I thrive on creating intuitive and
          engaging user experiences, and I am committed to continuous learning
          and improvement in this rapidly evolving field.
        </h2>
        <br />
        <h2>
          Throughout my academic career, I have worked on various projects that
          showcase my skills and creativity. I believe that collaboration and
          innovation are key to developing impactful solutions, and I am eager
          to connect with other professionals and contribute to exciting
          projects.
        </h2>
        <br />
       <li>B.tech in Computer Science</li>
       <li>Avid learner</li>
       <br />
       <h2>One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉</h2>
      </div>
      
    </div>
  );
};

export default About;
