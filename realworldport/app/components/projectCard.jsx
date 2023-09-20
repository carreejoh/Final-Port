"use client";
import LanguageLogo from "./languageLogo";
import Link from "next/link";

function ProjectCard({ bgImg, techStack, desc, title, link }) {
  return (
    <div className="h-full w-full ">
      <div className=" bg-baseShade w-full h-full flex flex-col ">
        <div className="bg-baseGray relative right-0 top-0 left-0  lg:h-52 overflow-hidden rounded-tl-lg rounded-tr-lg ">
          <Link href={`/projects/${link}`}>
            <img
              src={bgImg}
              className="rounded-tl-lg rounded-tr-lg bg-center hover:scale-110 duration-200 w-full h-full"
              alt="Background"
            ></img>
          </Link>
        </div>
        <div className="flex-grow bg-baseGray rounded-bl-lg rounded-br-lg p-2 lg:p-1 shadow-customBoxShadow">
          <Link href={`/projects/${link}`}>
          <h1 className="text-[50px] lg:text-2xl text-white font-rubik italic mt-1">
            {title}
          </h1>
          </Link>
          <h1 className="font-light text-3xl lg:text-sm lg:mt-1 text-white">{desc}</h1>
          <div className="flex mt-2">
            {techStack.map((tech) => (
              <div key={tech} className="mr-4 lg:mr-2">
                {tech === "JavaScript" && (
                  <img src="/javascript.svg" className="lg:h-6 lg:w-6 h-16 w-16"></img>
                )}
                {tech === "HTML" && (
                  <img src="/html5.svg" className="lg:h-6 lg:w-6 h-16 w-16"></img>
                )}
                {tech === "CSS" && (
                  <img src="/css3.svg" className="lg:h-6 lg:w-6 h-16 w-16"></img>
                )}
                {tech === "React" && (
                  <img src="/react.svg" className="lg:h-6 lg:w-6 h-16 w-16"></img>
                )}
                {tech === "MySQL" && (
                  <img src="/mysql.svg" className="lg:h-6 lg:w-6 h-16 w-16"></img>
                )}
                {tech === "Sequelize" && (
                  <img src="/sequelize.svg" className="lg:h-6 lg:w-6 h-16 w-16"></img>
                )}
                {tech === "Mongo" && (
                  <img src="/mongodb.svg" className="lg:h-6 lg:w-6 h-16 w-16"></img>
                )}
                {tech === "Mongoose" && (
                  <img src="/mongoose.svg" className="lg:h-6 lg:w-6 h-16 w-16"></img>
                )}
                {tech === "Express" && (
                  <img src="/express.svg" className="lg:h-6 lg:w-6 h-16 w-16"></img>
                )}
                {tech === "Node" && (
                  <img src="/nodedotjs.svg" className="lg:h-6 lg:w-6 h-16 w-16"></img>
                )}
                {tech === "GraphQL" && (
                  <img src="/graphql.svg" className="lg:h-6 lg:w-6 h-16 w-16"></img>
                )}
                {tech === "Next" && (
                  <img src="/nextdotjs.svg" className="lg:h-6 lg:w-6 h-16 w-16 bg-gray-500 rounded-sm"></img>
                )}
                {tech === "Tailwind" && (
                  <img src="/tailwindcss.svg" className="lg:h-6 lg:w-6 h-16 w-16"></img>
                )}
                {tech === "Fomantic" && (
                  <img src="/fomanticLogo.png" className="lg:h-6 lg:w-6 h-16 w-16"></img>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
