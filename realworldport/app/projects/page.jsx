
import ProjectCard from "../components/projectCard";
import Link from "next/link";

function Projects() {
  return (
    <div className="w-[100vw] h-[100vh] pt-48 lg:pt-16 lg:pb-16 lg:pl-16 lg:pr-16 bg-gradient-to-tr from-baseGray to-black overflow-y-hidden">
      <div className="w-full h-full bg-baseShade lg:bg-gradient-to-tr from-black to-baseGray overflow-y-scroll">
        <div className="grid grid-cols-12 gap-4 w-full h-full pt-2 pb-2 xl:pr-60 xl:pl-60 mb-5 xl:p-0 p-4">
          {/* Featured Project */}
          <div className="col-span-12 mt-6">
            <h1 className="lg:text-4xl text-[60px] w-60 leading-[70px] text-white font-rubik border-b-2 border-neonGreen lg:w-36">
              Projects
            </h1>
          </div>
          <div className="hidden col-span-12 h-96 xl:flex justify-between bg-baseGray rounded-lg overflow-hidden shadow-customBoxShadow">
            <div className="w-[50%] flex-col justify-between">
              <div className="p-2">
                <Link href="/projects/routine">
                  <h1 className="italic text-4xl cursor-pointer text-white font-rubik">
                    Routine-Scheduler
                  </h1>
                </Link>
                <p className="mt-4">
                Routine-Scheduler is my take on a simple, yet effective way to manage time. Users make easy-to-understand &quot;time blocks&quot;, of essential and priority events.
                </p>
                <div className="flex mt-4">
                  <img src="/react.svg" className="mr-2 h-8 w-8"></img>
                  <img src="/tailwindcss.svg" className="mr-2 h-8 w-8"></img>
                  <img src="/mongodb.svg" className="mr-2 h-8 w-8"></img>
                  <img src="/mongoose.svg" className="mr-2 h-8 w-8"></img>
                  <img src="/redux.svg" className="mr-2 h-8 w-8 bg-gray-500 rounded-sm" ></img>
                  <img src="/nodedotjs.svg" className="mr-2 h-8 w-8"></img>
                  <img src="/nextdotjs.svg" className="mr-2 h-8 w-8 bg-gray-500 rounded-sm"></img>
                </div>
              </div>
            </div>
            <div className="h-96">
              <Link href="/projects/routine">
                <img
                  src="https://drive.google.com/uc?id=1STDUfFmg9hIF8zGDPNO52U9A1DTyampU"
                  className="h-96 rounded-lg overflow-hidden bg-center hover:scale-105 duration-100"
                  alt="Background"
                ></img>
              </Link>
            </div>
          </div>
          {/* <div className="col-span-12 mt-6">
            <h1 className="text-xl text-white font-rubik border-b-[1px] border-neonGreen w-[146px]">
              Other Projects:
            </h1>
          </div> */}
          <div className="col-span-12 lg:col-span-6 xl:col-span-4 mt-2">
            <ProjectCard
              title="Crusaders"
              link="crusaders"
              bgImg={"/images/crusadersSocial.png"}
              desc={
                "A social media site built for photos. Find and follow your friends, share special moments, and explore the page on mobile."
              }
              techStack={[
                "React",
                "Tailwind",
                "Mongo",
                "Mongoose",
                "Express",
                "Node",
                "Next",
              ]}
            />
          </div>

          <div className="col-span-12 lg:col-span-6 xl:col-span-4 mt-2">
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
          <div className="col-span-12 lg:col-span-6 xl:col-span-4 mt-2">
            <ProjectCard
              title="Tech Blog"
              link="techblog"
              bgImg={"/images/techblog.png"}
              desc={
                "A site for sharing coding related topics."
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
          {/* <div className="col-span-4">
            <ProjectCard
              title="Portfolio"
              link="portfolio"
              bgImg={"/images/myportfolio.PNG"}
              desc={
                "My fifth, and most recent portfolio."
              }
              techStack={["React", "Tailwind", "Next"]}
            />
          </div> */}
          <div className="col-span-12 h-12"></div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
