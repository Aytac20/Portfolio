import css from "@/images/skills/css.png";
import express from "@/images/skills/express.png";
import firebase from "@/images/skills/firebase.png";
import git from "@/images/skills/git.png";
import github from "@/images/skills/github.png";
import html from "@/images/skills/html.png";
import js from "@/images/skills/js.png";
import mongo from "@/images/skills/mongo.png";
import next from "@/images/skills/next.png";
import node from "@/images/skills/node.png";
import postman from "@/images/skills/postman.png";
import react from "@/images/skills/react.png";
import reactquery from "@/images/skills/reactquery.png";
import redux from "@/images/skills/redux.png";
import router from "@/images/skills/router.png";
import supabse from "@/images/skills/supabase.png";
import tailwind from "@/images/skills/tailwind.png";
import ts from "@/images/skills/ts.png";
import reactbootstrap from "@/images/skills/reactbootstrap.png";
import sass from "@/images/skills/sass.png";

import Image from "next/image";

const skills = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: js },
  { name: "TypeScript", icon: ts },
  { name: "React", icon: react },
  { name: "Redux", icon: redux },
  { name: "React Query", icon: reactquery },
  { name: "React Router", icon: router },
  { name: "Next.js", icon: next },
  { name: "Node.js", icon: node },
  { name: "Express", icon: express },
  { name: "MongoDB", icon: mongo },
  { name: "Firebase", icon: firebase },
  { name: "Supabase", icon: supabse },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Git", icon: git },
  { name: "GitHub", icon: github },
  { name: "Postman", icon: postman },
  { name: "Sass", icon: sass },
  { name: "React Bootstrap", icon: reactbootstrap },
];

const Skills = () => {
  return (
    <div id="skills" className="wrapper min-h-[100vh] text-[#4b4a46]">
      <h3 className="text-xl  mb-8 text-center  pt-[8rem]">
        These are the primary technologies and development tools I have studied
        and implemented across various projects, demonstrating proficiency in
        both frontend and backend development
      </h3>

      <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-12 justify-center">
        {skills.map((skill) => (
          <span key={skill.name} className="flex w-full justify-center">
            <li className="flex flex-col justify-between items-center h-[6rem] w-[6rem] gap-2">
              <Image
                src={skill.icon}
                alt={skill.name}
                width={70}
                height={70}
                quality={100}
                className="object-contain"
              />
              <span className="text-sm text-center">{skill.name}</span>
            </li>
          </span>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
