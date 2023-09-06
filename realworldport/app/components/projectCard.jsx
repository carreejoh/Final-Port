"use client";
import LanguageLogo from "./languageLogo";
import Link from "next/link";

function ProjectCard({ bgImg, techStack, desc, title, link }) {
  return (
    <div className="h-full w-full">
      <div className=" bg-baseShade w-full h-full flex flex-col ">
        <div className="bg-baseGray relative right-0 top-0 left-0 h-52 overflow-hidden rounded-tl-lg rounded-tr-lg ">
          <Link href={`/projects/${link}`}>
            <img
              src={bgImg}
              className="rounded-tl-lg rounded-tr-lg bg-center hover:scale-110 duration-200"
              alt="Background"
            ></img>
          </Link>
        </div>
        <div className="flex-grow bg-baseGray rounded-bl-lg rounded-br-lg p-1 shadow-customBoxShadow">
          <Link href={`/projects/${link}`}>
          <h1 className="text-2xl text-white font-semibold italic mt-1">
            {title}
          </h1>
          </Link>
          <h1 className="font-light text-sm mt-1">{desc}</h1>
          <div className="flex mt-2">
            {techStack.map((tech) => (
              <div key={tech} className="mr-2">
                {tech === "JavaScript" && (
                  <img src="/javascript.svg" className="h-6 w-6"></img>
                )}
                {tech === "HTML" && (
                  <img src="/html5.svg" className="h-6 w-6"></img>
                )}
                {tech === "CSS" && (
                  <img src="/css3.svg" className="h-6 w-6"></img>
                )}
                {tech === "React" && (
                  <img src="/react.svg" className="h-6 w-6"></img>
                )}
                {tech === "MySQL" && (
                  <img src="/mysql.svg" className="h-6 w-6"></img>
                )}
                {tech === "Sequelize" && (
                  <img src="/sequelize.svg" className="h-6 w-6"></img>
                )}
                {tech === "Mongo" && (
                  <img src="/mongodb.svg" className="h-6 w-6"></img>
                )}
                {tech === "Mongoose" && (
                  <img src="/mongoose.svg" className="h-6 w-6"></img>
                )}
                {tech === "Express" && (
                  <img src="/express.svg" className="h-6 w-6"></img>
                )}
                {tech === "Node" && (
                  <img src="/nodedotjs.svg" className="h-6 w-6"></img>
                )}
                {tech === "GraphQL" && (
                  <img src="/graphql.svg" className="h-6 w-6"></img>
                )}
                {tech === "Next" && (
                  <img src="/nextdotjs.svg" className="h-6 w-6"></img>
                )}
                {tech === "Tailwind" && (
                  <img src="/tailwindcss.svg" className="h-6 w-6"></img>
                )}
                {tech === "Fomantic" && (
                  <img src="/fomanticLogo.png" className="h-6 w-6"></img>
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
