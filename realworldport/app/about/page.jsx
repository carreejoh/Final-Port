"use client";
import Link from "next/link";
import LanguageTile from "../components/languageTile";
import Image from "next/image";

function About() {
  return (
    <div className="w-[100vw] h-[100vh] pt-20 md:pt-16 md:pb-16 md:pl-16 md:pr-16 bg-gradient-to-tr from-baseGray to-black ">
      <div className="p-4 w-full h-full bg-baseShade md:bg-gradient-to-tr from-black to-baseGray  overflow-y-scroll">
        {/* <div className="pt-10 w-full h-72 bg-gray-500 flex">
            <img src="/images/profilepic.jpg" className="h-64"></img>
        </div> */}
        <div className="w-full md:pl-60 md:pr-60">
          {/* <h1 className="text-2xl">About Me:</h1> */}
          <h1 className="mt-6 text-4xl font-rubik border-b-2 border-neonGreen w-[165px]">
            About Me
          </h1>
          {/* <p className="text-sm mt-6 text-gray-400">Myself:</p> */}
          <div className="md:w-[80%] mt-6">
            {/* <img
              src="/images/profilepicProfessional.jpg"
              className="absolute bottom-0 rounded-lg h-full"
            /> */}
            <div className="w-full md:flex p-2 bg-baseGray rounded-lg">
              <Image
                width={180}
                height={180}
                className="rounded-lg"
                src="/images/profilePic.jpg"
              ></Image>
              <div className="pl-2">
                <h1 className="text-2xl font-rubik">Carter Johnson</h1>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-blue-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <p className="mt-[1px]">Salt Lake City, UT </p>
                </div>
                <p className="pt-4">
                  Full stack web developer who turns complex ideas into sleek,
                  fast, intuitive solutions. I thrive in team environments and
                  running solo. React.js and Node.js are my bread and butter,
                  but I&apos;m also proficient with other technologies.
                </p>
              </div>
            </div>
          </div>
          <p className="text-2xl mt-6 text-white font-rubik border-b-2 border-neonGreen w-[62px]">
            Skills
          </p>
          <div className="p-2 mt-2 bg-baseGray w-full md:w-[60%] rounded-lg">
            <p className="text-lg text-white font-rubik">Tools & Practices:</p>
            <ul>
              <li>&bull; Agile development</li>
              <li>&bull; Object-oriented programming</li>
              <li>&bull; UI/UX design</li>
              <li>&bull; Git</li>
              <li>&bull; Heroku</li>
            </ul>
          </div>
          <div className="p-2 mt-2 bg-baseGray w-full md:w-[60%] rounded-lg">
            <p className="text-lg text-white font-rubik">Front-End</p>
            <p className="text-sm mt-2 ml-2 text-gray-400">
              My best front-end project:
            </p>
            <Link href="/projects/crusaders">
              <p className="text-lg ml-4 text-blue-500">
                Crusaders Social Media
              </p>
            </Link>
            <p className="text-sm mt-1 ml-2 text-gray-400">Languages:</p>
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
          <div className="p-2 mt-2 bg-baseGray w-full md:w-[60%] rounded-lg">
            <p className="text-lg text-white font-rubik">Back-End</p>
            <p className="text-sm mt-2 ml-2 text-gray-400">
              My best back-end project:
            </p>
            <Link href="/projects/techblog">
              <p className="text-lg ml-4 text-blue-500">Tech Blog</p>
            </Link>
            <p className="text-sm mt-1 ml-2 text-gray-400">Languages:</p>
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
          <p className="text-2xl mt-6 text-white font-rubik border-b-2 border-neonGreen w-[118px]">
            Education
          </p>
          <div className="w-full md:w-[60%] mt-2">
            <p>
              University of Utah Coding Boot Camp. 30 hours/week for 24 weeks. 
            </p>
            <Link href="https://bootcamps.continue.utah.edu/coding/">
              <button className="flex justify-center align-middle items-center bg-baseGray w-48 h-12 mt-2 rounded-lg hover:scale-95 duration-100">
                <img src="/images/utahUtes.png" className="h-8"></img>
                <a className="h-7 ml-2">Coding Boot Camp</a>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
