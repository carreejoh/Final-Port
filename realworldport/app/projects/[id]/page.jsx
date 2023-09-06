"use client";

import { useEffect, useState } from "react";
import projectData from "../../projectInfo.json";
import Link from "next/link";

function ProjectPage({ params }) {
  const [project, setProject] = useState();

  useEffect(() => {
    if (params.id === "codespot") {
      setProject(projectData[0]);
    }
    if (params.id === "tyrsvault") {
      setProject(projectData[1]);
    }
    if (params.id === "techblog") {
      setProject(projectData[2]);
    }
    if (params.id === "portfolio") {
      setProject(projectData[3]);
    }
  }, [params.id]);

  useEffect(() => {
    console.log(project);
  }, [project]);

  return (
    <div className="w-[100vw] h-[100vh] pt-16 pb-16 pl-16 pr-16 bg-gradient-to-tr from-baseGray to-black overflow-y-hidden">
      <div className="w-full h-full bg-gradient-to-tr from-black to-baseGray overflow-y-scroll">
        <div className="w-full h-20 flex pr-56 pl-36 pt-10 items-center">
          <Link href="/projects">
            <button className="w-12 hover:translate-x-[-6px] duration-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
          </Link>
          <h1 className="text-4xl ml-12">{project?.title}</h1>
        </div>
        <div className="h-full pt-1 pb-2 pr-60 pl-60 mb-5">
          <h1 className="italic text-lg">"{project?.motto}"</h1>
          {project?.status === false ? (
            <div className=" mt-6">
              <h1 className="text-sm text-gray-400">Completion:</h1>
              <h1 className="text-sm text-yellow-500 ml-2">Work in progress</h1>
            </div>
          ) : (
            <div className=" mt-6">
              <h1 className="text-sm text-gray-400">Completion:</h1>
              <h1 className="text-sm text-green-500 ml-2">Complete</h1>
            </div>
          )}
          <p className="text-sm mt-6 text-gray-400">Tech Stack:</p>
          <div className="flex mt-1 ml-2">
            {project?.techstack.map((tech) => (
              <div key={tech} className="mr-2">
                {tech === "JavaScript" && (
                  <img src="/javascript.svg" className="h-8 w-8"></img>
                )}
                {tech === "HTML" && (
                  <img src="/html5.svg" className="h-8 w-8"></img>
                )}
                {tech === "CSS" && (
                  <img src="/css3.svg" className="h-8 w-8"></img>
                )}
                {tech === "React" && (
                  <img src="/react.svg" className="h-8 w-8"></img>
                )}
                {tech === "MySQL" && (
                  <img src="/mysql.svg" className="h-8 w-8"></img>
                )}
                {tech === "Sequelize" && (
                  <img src="/sequelize.svg" className="h-8 w-8"></img>
                )}
                {tech === "Mongo" && (
                  <img src="/mongodb.svg" className="h-8 w-8"></img>
                )}
                {tech === "Mongoose" && (
                  <img src="/mongoose.svg" className="h-8 w-8"></img>
                )}
                {tech === "Express" && (
                  <img src="/express.svg" className="h-8 w-8"></img>
                )}
                {tech === "Node" && (
                  <img src="/nodedotjs.svg" className="h-8 w-8"></img>
                )}
                {tech === "GraphQL" && (
                  <img src="/graphql.svg" className="h-8 w-8"></img>
                )}
                {tech === "Next" && (
                  <img
                    src="/nextdotjs.svg"
                    className="h-8 w-8 bg-gray-500 rounded-sm"
                  ></img>
                )}
                {tech === "Tailwind" && (
                  <img src="/tailwindcss.svg" className="h-8 w-8"></img>
                )}
                {tech === "Fomantic" && (
                  <img src="/fomanticLogo.png" className="h-8 w-8"></img>
                )}
              </div>
            ))}
          </div>
          <p className="text-sm mt-6 text-gray-400">Description:</p>
          <p className="text-md ml-2">{project?.desc}</p>
          <p className="text-sm mt-6 text-gray-400">My Contribution:</p>
          <p className="text-md ml-2">{project?.contribution}</p>
          <p className="text-sm mt-6 text-gray-400">Pictures:</p>
          <div className="ml-2 mr-72">
            <img
              className="mt-1 border-2 border-black"
              style={{ filter: "brightness(60%)" }}
              src={project?.pictures[0]}
            ></img>
            <img
              className="mt-8 border-2 border-black"
              style={{ filter: "brightness(60%)" }}
              src={project?.pictures[1]}
            ></img>
          </div>
          <div className="w-full h-12"></div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
