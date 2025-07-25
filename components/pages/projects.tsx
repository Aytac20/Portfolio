import React from "react";
import burgers from "@/images/burgers.png";
import moviewebsite from "@/images/moviewebsite.png";
import dailyFlow from "@/images/dailyFlow.png";
import Image from "next/image";

const projects = [
  {
    title: "Burger Website",
    description:
      "A full-stack food ordering system built using the MERN stack. Users can browse, order food, and track delivery while admins manage meals and orders.",
    image: burgers,
    code: "https://github.com/Aytac20/Burgers",
    live: "https://burgers-zo9w.onrender.com",
  },
  {
    title: "ChillFix – Movie Website",
    description:
      "A modern movie tracking app built with Next.js. Helps users discover and organize their favorite films with ease.",
    image: moviewebsite,
    code: "https://github.com/Aytac20/chillfix",
    live: "https://chillfix.vercel.app",
  },
  {
    title: "DailyFlow – To-Do App",
    description:
      "DailyFlow is a clean and intuitive task management app built with the MERN stack. Includes real-time updates, auth, and a responsive UI.",
    image: dailyFlow,
    code: "https://github.com/Aytac20/DailyFlow",
    live: "https://fullstackauth.onrender.com/",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen wrapper py-10" id="projects">
      <h1 className="text-4xl font-bold mb-12 text-[#4b4a46] text-center pt-[6rem]">
        Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col w-full max-w-[22rem] transition-transform transform hover:scale-[1.03] hover:shadow-2xl"
          >
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover p-4 rounded-[2rem]"
              width={500}
              height={300}
            />
            <div className="p-6 flex flex-col justify-between flex-1">
              <h2 className="text-xl font-semibold mb-2 text-[#4b4a46]">
                {project.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex gap-3 mt-auto">
                <a
                  href={project.code}
                  target="_blank"
                  className="px-4 py-2 text-sm font-medium bg-gray-200 hover:bg-gray-300 rounded-md transition"
                >
                  Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  className="px-4 py-2 text-sm font-medium bg-[#56c993] text-white hover:bg-[#47b582] rounded-md transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
