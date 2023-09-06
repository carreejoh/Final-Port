"use client";
import ProjectCard from "../components/projectCard";

function Projects() {
  return (
    <div className="w-[100vw] h-[100vh] pt-16 pb-16 pl-16 pr-16 bg-gradient-to-tr from-baseGray to-black overflow-y-hidden">
      <div className="w-full h-full bg-gradient-to-tr from-black to-baseGray overflow-y-scroll">
        <div className="grid grid-cols-12 gap-4 h-full pt-2 pb-2 pr-60 pl-60 mb-5">
          {/* Featured Project */}
          <div className="col-span-12 mt-6">
            <h1 className="text-xl text-gray-500">Featured Project:</h1>
          </div>
          <div className="col-span-12 h-96 flex justify-between bg-baseGray rounded-lg overflow-hidden shadow-purpleBoxShadow">
            <div className="w-[50%] flex-col justify-between">
              <div className="p-2">
                <a className="italic font-semibold text-4xl cursor-pointer text-white">
                  Crusaders
                </a>
                <p className="mt-4">Crusaders is a social media app blah blah blah Crusaders is a social media Crusaders is a social media app blah blah blah</p>
                <div className="flex mt-4">
                <img src="/react.svg" className="mr-2 h-8 w-8"></img>
                <img src="/tailwindcss.svg" className="mr-2 h-8 w-8"></img>
                <img src="/mongodb.svg" className="mr-2 h-8 w-8"></img>
                <img src="/mongoose.svg" className="mr-2 h-8 w-8"></img>
                <img src="/graphql.svg" className="mr-2 h-8 w-8"></img>
                <img src="/nodedotjs.svg" className="mr-2 h-8 w-8"></img>
                <img src="/nextdotjs.svg" className="mr-2 h-8 w-8"></img>
                </div>
              </div>
              <button className="bottom-0 flex p-2">
                Check It Out
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </button>
            </div>
            <div className="h-96">
              <img
                src="/images/crusadersSocial.png"
                className="h-96 rounded-lg overflow-hidden bg-center hover:scale-105 duration-100"
                alt="Background"
              ></img>
            </div>
          </div>
          <div className="col-span-12 mt-6">
            <h1 className="text-xl text-gray-500">Other Projects:</h1>
          </div>
          <div className="col-span-4 ">
            <ProjectCard
              title="Code Spot"
              link="codespot"
              bgImg={"/images/codelounge.png"}
              desc={
                "Effortlessly develop code, share code, and explore javascript ideas all while online."
              }
              techStack={[
                "React",
                "Tailwind",
                "Mongo",
                "Mongoose",
                "Express",
                "Node",
                "Next"
              ]}
            />
          </div>
          <div className="col-span-4">
            <ProjectCard
              title="Tyr's Vault"
              link="tyrsvault"
              bgImg={"/images/tyrsvault.png"}
              desc={
                "Discover new titles, connect with fellow gamers, and showcase your games."
              }
              techStack={[
                "JavaScript",
                "Fomantic",
                "MySQL",
                "Sequelize",
                "Express",
                "Node",
              ]}
            />
          </div>
          <div className="col-span-4">
            <ProjectCard
              title="Tech Blog"
              link="techblog"
              bgImg={"/images/techblog.png"}
              desc={
                "A site for sharing coding related topics. One of my first full stack projects."
              }
              techStack={[
                "JavaScript",
                "Fomantic",
                "MySQL",
                "Sequelize",
                "Express",
                "Node",
              ]}
            />
          </div>
          <div className="col-span-4">
            <ProjectCard
              title="Portfolio"
              link="portfolio"
              bgImg={"/images/myportfolio.PNG"}
              desc={
                "My sixth portfolio. I just can't seem to get it quite right."
              }
              techStack={["React", "Tailwind", "Next"]}
            />
          </div>
          <div className="col-span-12 h-12">
              
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
