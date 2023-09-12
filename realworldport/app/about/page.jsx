"use client";
import Link from "next/link";
import LanguageTile from "../components/languageTile";

function About() {
  return (
    <div className="w-[100vw] h-[100vh] pt-16 pb-16 pl-16 pr-16 bg-gradient-to-tr from-baseGray to-black ">
      <div className="p-4 w-full h-full bg-gradient-to-tr from-black to-baseGray  overflow-y-scroll">
        {/* <div className="pt-10 w-full h-72 bg-gray-500 flex">
            <img src="/images/profilepic.jpg" className="h-64"></img>
        </div> */}
        <div className="w-full pl-60 pr-60">
          {/* <h1 className="text-2xl">About Me:</h1> */}
          <h1 className="mt-6 text-4xl font-rubik border-b-2 border-neonGreen w-44">
            About Me
          </h1>
          <p className="text-sm mt-6 text-gray-400">Myself:</p>
          <div className="w-[80%] flex mt-1 ml-2">
            <p className="w-[75%]">
              Innovative web developer specializing in creating gorgeous, fast,
              and intuitive user interfaces. I excel at working with teams to
              turn complex ideas into full stack web applications. React.js and
              Node.js are my bread and butter, and I absolutely love the
              satisfaction of learning and implementing new technologies. I&apos;d
              love a chance to work with your team, and know I could make a
              meaningful impact. If I&apos;m not working on a personal project you
              can find me exploring the beautiful Utah landscape, snowboarding
              with friends, or playing video games.
            </p>
            <div className="h-40 w-[20%] overflow-hidden relative">
              <img src="/images/profilepic.jpg" className="absolute bottom-0 rounded-lg h-full" />
            </div>
          </div>
          <p className="text-sm mt-6 text-gray-400">Education:</p>
          <div className="w-[80%] mt-1 ml-2">
            <p className="">
              I initially discovered coding when I was at the University of Utah
              pursuing a Mechanical Engineering degree. My love of software
              development and coding exploded, and I transferred majors into
              Computer Science. Following that transition I decided to leave
              school, niche down in the coding world, and pursued a coding boot
              camp. This change was the best descision I ever made, and I loved
              the boot camp even more than anticipated.
            </p>
            <Link href="https://bootcamps.continue.utah.edu/coding/">
              <button className="flex justify-center align-middle items-center bg-baseGray w-48 h-12 mt-2 rounded-lg hover:scale-95 duration-100">
                <img src="/images/utahUtes.png" className="h-8"></img>
                <a className="h-7 ml-2">Coding Boot Camp</a>
              </button>
            </Link>
          </div>
          <p className="text-4xl mt-6 text-white font-rubik border-b-2 border-neonGreen w-[8%]">
            Skills
          </p>
          <div className="p-2 mt-2 bg-baseGray w-[60%] rounded-lg">
            <p className="text-lg text-white font-rubik">
              Tools & Practices:
            </p>
            <h1 className="text-md ml-2 mt-1 text-white">
              I have a thorough understanding of
              <span className="text-blue-500"> agile development</span> and
              <span className="text-blue-500">
                {" "}
                object-oriented programming
              </span>
              , aswell as an eye for{" "}
              <span className="text-blue-500"> UI/UX design</span>. I&apos;ve become
              familiar with <span className="text-blue-500"> Git</span>,
              <span className="text-blue-500"> version control</span>, and have
              deployed sites to <span className="text-blue-500"> Heroku</span>.
              Lastly, I have some experience with{" "}
              <span className="text-blue-500"> algorithms</span> and
              <span className="text-blue-500"> time complexity</span>. Through
              practice and repetition I have learned to implement these
              practices in all of my work.
            </h1>
          </div>
          <div className="p-2 mt-2 bg-baseGray w-[60%] rounded-lg">
            <p className="text-lg text-white font-rubik">Front-End:</p>
            <p className="text-sm mt-2 ml-2 text-gray-400">My best work:</p>
            <Link href="/projects/crusaders">
              <p className="text-lg mt-1 ml-4 text-blue-500">
                Crusaders Social Media
              </p>
            </Link>
            <p className="text-sm mt-2 ml-2 text-gray-400">Languages:</p>
            <div className="ml-4">
              <LanguageTile
                name={"HTML5"}
                bgColor={"#000000"}
                textColor={"#82D907"}
              />
              <LanguageTile
                name={"CSS3"}
                bgColor={"#000000"}
                textColor={"#82D907"}
              />
              <LanguageTile
                name={"JavaScript"}
                bgColor={"#000000"}
                textColor={"#82D907"}
              />
            </div>
            <p className="text-sm mt-2 ml-2 text-gray-400">
              Libraries & Frameworks:
            </p>
            <div className="ml-4">
              <LanguageTile
                name={"React.js"}
                bgColor={"#000000"}
                textColor={"#ffffff"}
              />
              <LanguageTile
                name={"jQuery.js"}
                bgColor={"#000000"}
                textColor={"#ffffff"}
              />
              <LanguageTile
                name={"Next.js"}
                bgColor={"#000000"}
                textColor={"#ffffff"}
              />
              <LanguageTile
                name={"Tailwind CSS"}
                bgColor={"#000000"}
                textColor={"#ffffff"}
              />
              <LanguageTile
                name={"Bootstrap"}
                bgColor={"#000000"}
                textColor={"#ffffff"}
              />
              <LanguageTile
                name={"Fomantic UI"}
                bgColor={"#000000"}
                textColor={"#ffffff"}
              />
            </div>
          </div>
          <div className="p-2 mt-2 bg-baseGray w-[60%] rounded-lg">
            <p className="text-lg text-white font-rubik">Back-End:</p>
            <p className="text-sm mt-2 ml-2 text-gray-400">My best work:</p>
            <Link href="/projects/techblog">
              <p className="text-lg mt-1 ml-4 text-blue-500">Tech Blog</p>
            </Link>
            <p className="text-sm mt-2 ml-2 text-gray-400">Languages:</p>
            <div className="ml-4">
              <LanguageTile
                name={"MySQL"}
                bgColor={"#000000"}
                textColor={"#ffffff"}
              />
              <LanguageTile
                name={"MongoDB"}
                bgColor={"#000000"}
                textColor={"#ffffff"}
              />
            </div>
            <p className="text-sm mt-2 ml-2 text-gray-400">Libraries & Misc:</p>
            <div className="ml-4">
              <LanguageTile
                name={"Node.js"}
                bgColor={"#000000"}
                textColor={"#ffffff"}
              />
              <LanguageTile
                name={"Express.js"}
                bgColor={"#000000"}
                textColor={"#ffffff"}
              />
              <LanguageTile
                name={"Sequelize.js"}
                bgColor={"#000000"}
                textColor={"#ffffff"}
              />
              <LanguageTile
                name={"Mongoose.js"}
                bgColor={"#000000"}
                textColor={"#ffffff"}
              />
              <LanguageTile
                name={"GraphQL"}
                bgColor={"#000000"}
                textColor={"#ffffff"}
              />
            </div>
          </div>
          <div className="w-full"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
