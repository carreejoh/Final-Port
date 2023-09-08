"use client";
import Image from "next/image";
import LanguageTile from "./components/languageTile";

export default function Home() {
  return (
    // bg-gradient-to-tr from-darkPurple
    <div className="w-[100vw] h-[100vh] pt-16 pb-16 pl-16 pr-16 bg-gradient-to-tr from-baseGray to-black ">
      <div className="flex items-center p-4 w-full h-full bg-gradient-to-tr from-black to-baseGray">
        <div className="w-full pr-16">
          <h1 className="text-white text-[60px] leading-[62px] font-rubik">
            Hello There! <br />
            Welcome to my portfolio!
          </h1>
          <p className="text-white mt-2">
            I'm an ambitious web developer from Salt Lake City specializing in
            all things JavaScript, React.js, and Node.js. I'd love a chance to
            join your team and build something great!
          </p>
        </div>
        {/* This div could look cool as contrast with entire bg-slate-500 */}
        <div className="w-full h-full pl-64">
          <div>
            <h1 className="text-2xl">What I can offer:</h1>
          </div>
          <div className=" w-[75%] border-[1px] border-white p-3 rounded-xl">
            <LanguageTile
              name={"JavaScript"}
              bgColor={"#FDD635"}
              textColor={"#FDD635"}
            />
            <LanguageTile
              name={"HTML"}
              bgColor={"#DE4C24"}
              textColor={"#DE4C24"}
            />
            <LanguageTile
              name={"CSS"}
              bgColor={"#2C97CD"}
              textColor={"#2C97CD"}
            />
            <LanguageTile
              name={"Tailwind"}
              bgColor={"#39BCF8"}
              textColor={"#39BCF8"}
            />
            <LanguageTile
              name={"React.js"}
              bgColor={"#00DCF8"}
              textColor={"#00DCF8"}
            />
            <LanguageTile
              name={"MySQL"}
              bgColor={"#E29000"}
              textColor={"#E29000"}
            />
            <LanguageTile
              name={"Sequelize.js"}
              bgColor={"#03AEEE"}
              textColor={"#03AEEE"}
            />
            <LanguageTile
              name={"MongoDB"}
              bgColor={"#50AB4C"}
              textColor={"#50AB4C"}
            />
            <LanguageTile
              name={"Mongoose.js"}
              bgColor={"#850501"}
              textColor={"#850501"}
            />
            <LanguageTile
              name={"Express.js"}
              bgColor={"#a0a0a0"}
              textColor={"#a0a0a0"}
            />
            <LanguageTile
              name={"Node.js"}
              bgColor={"#7BBB00"}
              textColor={"#7BBB00"}
            />
            <LanguageTile
              name={"GraphQL"}
              bgColor={"#E5019A"}
              textColor={"#E5019A"}
            />
            <LanguageTile
              name={"Next.js"}
              bgColor={"#E5019A"}
              textColor={"#E5019A"}
            />
          </div>
          {/* <div className="h-64 w-full mt-3 flex justify-start">

           </div>
           <div className="h-64 w-full mt-3 flex justify-end">

           </div>
           <div className="h-64 w-full mt-3 flex justify-start">

           </div> */}
        </div>
      </div>
    </div>
  );
}
