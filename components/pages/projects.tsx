import React from "react";
import burgers from "@/images/burgers.png";
import moviewebsite from "@/images/moviewebsite.png";
import Image from "next/image";

const Projects = () => {
  return (
    <section className="min-h-screen wrapper py-10" id="projects">
      <h1 className="text-4xl font-bold mb-12 text-[#4b4a46] text-center pt-[6rem]">
        Projects
      </h1>

      <div className="flex flex-row flex-wrap gap-8 w-full justify-center   ">
        {/* Project 1 */}
        <div className="bg-white !rounded-[2rem] shadow-md overflow-hidden flex flex-col w-[30rem] hover:shadow-lg hover:scale-103 duration-300">
          <Image
            src={burgers}
            alt="Burger Website"
            className="w-full h-[300px] object-cover p-4 !rounded-[2rem]"
            height={500}
            width={500}
          />
          <div className="p-5 flex flex-col justify-between flex-1">
            <h2 className="text-2xl font-semibold mb-2">Burger Website</h2>
            <p className="text-gray-600 mb-4">
              Full-stack application built using the MERN stack (MongoDB,
              Express.js, React, Node.js)! This project is a complete online
              food ordering system, designed with both regular users and
              administrators in mind. Users can browse the menu, place orders,
              and track them — while admins can manage meals, users, and
              delivery statuses.
            </p>
            <div className="flex gap-4 mt-auto">
              <a
                href="https://github.com/Aytac20/Burgers"
                target="_blank"
                className="px-4 py-2 text-sm font-medium bg-gray-200 hover:bg-gray-300 rounded-md transition"
              >
                Code
              </a>
              <a
                href="https://burgers-zo9w.onrender.com"
                target="_blank"
                className="px-4 py-2 text-sm font-medium bg-[#56c993] text-white hover:bg-[#47b582] rounded-md transition"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white !rounded-[2rem] shadow-md overflow-hidden flex flex-col w-[30rem] hover:shadow-lg hover:scale-103 duration-300">
          <Image
            src={moviewebsite}
            alt="ChillFix – Movie Website"
            className="w-full h-[300px] object-cover p-4 !rounded-[2rem]"
            height={500}
            width={500}
          />
          <div className="p-5 flex flex-col justify-between flex-1">
            <h2 className="text-2xl font-semibold mb-2">
              ChillFix – Movie Website
            </h2>
            <p className="text-gray-600 mb-4">
              ChillFix, a sleek and modern movie tracking web app built with
              Next.js! Whether you are a casual watcher or a movie buff,
              ChillFix helps you discover, organize, and keep track of your
              favorite films effortlessly.
            </p>
            <div className="flex gap-4 mt-auto">
              <a
                href="https://github.com/Aytac20/chillfix"
                target="_blank"
                className="px-4 py-2 text-sm font-medium bg-gray-200 hover:bg-gray-300 rounded-md transition"
              >
                Code
              </a>
              <a
                href="https://chillfix.vercel.app"
                target="_blank"
                className="px-4 py-2 text-sm font-medium bg-[#56c993] text-white hover:bg-[#47b582] rounded-md transition"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
