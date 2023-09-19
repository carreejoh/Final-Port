"use client";

import { useEffect, useState } from "react";
import projectData from "../../projectInfo.json";
import Link from "next/link";
import Image from "next/image";

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
    if (params.id === "crusaders") {
      setProject(projectData[4]);
    }
  }, [params.id]);

  useEffect(() => {
    console.log(project);
  }, [project]);

  return (
    <div className="w-[100vw] h-[100vh] pt-24 md:pt-16 md:pb-16 md:pl-16 md:pr-16 bg-gradient-to-tr from-baseGray to-black overflow-y-hidden">
      <div className="w-full h-full bg-gradient-to-tr from-black to-baseGray overflow-y-scroll">
        <div className="w-full h-20 md:pr-56 md:pl-36 pt-10 items-center flex justify-between">
          <div className="md:flex md:pt-0 pt-4">
            <Link href="/projects">
              <button className="w-12 hover:translate-x-[-6px] duration-100 fixed">
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
            <div>
              <h1 className="text-4xl md:ml-24 font-rubik">{project?.title}</h1>
              <h1 className="italic text-lg ml-24">{project?.motto}</h1>
            </div>
          </div>
          {params?.id === "codespot" ? (
            <div className="flex">
              <Link href={`${project?.oldLink}`}>
              <button className="flex items-center justify-center p-2 rounded-md bg-yellow-500 hover:scale-95 duration-100">
                <h1 className="h-6 text-black">Old Version</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="black"
                  className="w-5 h-5 transform rotate-[-40deg] ml-2 mb-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </button>
            </Link>
            <Link href={`${project?.newLink}`}>
              <button className="flex items-center justify-center p-2 rounded-md bg-yellow-500 hover:scale-95 duration-100 ml-3">
                <h1 className="h-6 text-black">React Version</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="black"
                  className="w-5 h-5 transform rotate-[-40deg] ml-2 mb-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </button>
            </Link>
              </div>
          ) : (
            <Link href={`${project?.link}`}>
              <button className="flex items-center justify-center rounded-md p-2 bg-mainBlue hover:scale-95 duration-100">
                <h1 className="h-6">Check it out</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 transform rotate-[-40deg] ml-2 mb-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </button>
            </Link>
          )}
        </div>
        <div className="h-full pt-4 pb-2 pr-60 pl-60 mb-5">
          {project?.status === false ? (
            <div className=" mt-4">
              <h1 className="text-sm text-gray-400">Status:</h1>
              <h1 className="text-sm text-yellow-500 ml-2">Work in progress</h1>
            </div>
          ) : (
            <div className=" mt-4">
              <h1 className="text-sm text-gray-400">Status:</h1>
              <h1 className="text-sm text-green-500 ml-2">Complete</h1>
            </div>
          )}
          <p className="text-sm mt-4 text-gray-400">Tech Stack:</p>
          <div className="flex mt-1 ml-2">
            {project?.techstack.map((tech) => (
              <div key={tech} className="mr-2">
                {tech === "JavaScript" && (
                  <Image width={30} height={30} alt="Technology Picture" src="/javascript.svg"></Image>
                )}
                {tech === "HTML" && (
                  <Image width={30} height={30} alt="Technology Picture" src="/html5.svg"></Image>
                )}
                {tech === "CSS" && (
                  <Image width={8} height={8} alt="Technology Picture" src="/css3.svg"></Image>
                )}
                {tech === "React" && (
                  <Image width={30} height={30} alt="Technology Picture" src="/react.svg"></Image>
                )}
                {tech === "MySQL" && (
                  <Image width={30} height={30} alt="Technology Picture" src="/mysql.svg"></Image>
                )}
                {tech === "Sequelize" && (
                  <Image width={30} height={30} alt="Technology Picture" src="/sequelize.svg"></Image>
                )}
                {tech === "Mongo" && (
                  <Image width={30} height={30} alt="Technology Picture" src="/mongodb.svg"></Image>
                )}
                {tech === "Mongoose" && (
                  <Image width={30} height={30} alt="Technology Picture" src="/mongoose.svg"></Image>
                )}
                {tech === "Express" && (
                  <Image width={30} height={30} alt="Technology Picture" src="/express.svg"></Image>
                )}
                {tech === "Node" && (
                  <Image width={30} height={30} alt="Technology Picture" src="/nodedotjs.svg"></Image>
                )}
                {tech === "GraphQL" && (
                  <Image width={30} height={30} alt="Technology Picture" src="/graphql.svg"></Image>
                )}
                {tech === "Next" && (
                  <Image width={30} height={30} alt="Technology Picture"
                    src="/nextdotjs.svg"
                    className="h-8 w-8 bg-gray-500 rounded-sm"
                  ></Image>
                )}
                {tech === "Tailwind" && (
                  <Image width={30} height={30} alt="Technology Picture" src="/tailwindcss.svg"></Image>
                )}
                {tech === "Fomantic" && (
                  <Image width={30} height={30} alt="Technology Picture" src="/fomanticLogo.png"></Image>
                )}
              </div>
            ))}
          </div>
          <p className="text-sm mt-4 text-gray-400">Description:</p>
          <p className="text-md ml-2">{project?.desc}</p>
          <p className="text-sm mt-4 text-gray-400">My Contribution:</p>
          <p className="text-md ml-2">{project?.contribution}</p>
          {/* <p className="text-sm mt-4 text-gray-400">Pictures:</p> */}
          <div className="mr-72 mt-6 ">
            <img
              className="mt-1 border-2 border-black"
              style={{ filter: "brightness(80%)" }}
              src={project?.pictures[0]}
            ></img>
            <img
              className="mt-8 border-2 border-black"
              style={{ filter: "brightness(80%)" }}
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
