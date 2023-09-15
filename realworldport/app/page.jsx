"use client";
import Image from "next/image";
import LanguageTile from "./components/languageTile";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [animation, showAnimation] = useState(false);

  useEffect(() => {
    showAnimation(true);
  }, []);

  return (
    // bg-gradient-to-tr from-darkPurple
    <div className="w-[100vw] h-[100vh] pt-16 pb-16 pl-16 pr-16 bg-gradient-to-tr from-baseGray to-black overflow-hidden">
      <div className="flex items-center w-full h-full bg-gradient-to-tr from-black to-baseGray overflow-hidden">
        <div
          className={`w-full h-full bg-leftAnimatedGradient  ${
            animation ? "translate-y-0" : "translate-y-full"
          } duration-300 ease-in-out`}
        ></div>
        <div
          className={`w-full h-full bg-rightAnimatedGradient ${
            animation ? "translate-y-0" : "translate-y-[-100%]"
          } duration-300 ease-in-out`}
        ></div>
        <div className="w-full pr-72 pl-40 z-40 fixed flex justify-between items-center">
          <div className="w-[50%]">
            <h1 className="text-white text-[60px] leading-[62px] font-rubik">
              {/* Hello There! <br /> */}
              Welcome to my portfolio! <br />
              I'm glad you're here.
            </h1>
            <p className="text-white mt-2">
              I&apos;m an ambitious web developer from Salt Lake City specializing in
              all things JavaScript, React.js, and Node.js. Let&apos;s build something great!
            </p>
          </div>
          <div>
            <Link href="/about">
              <div className="flex justify-end items-center">
                <h1 className="text-[50px] italic text-white border-b-2 leading-[44px] border-neonGreen font-rubik mt-6 mb-6 hover:text-neonGreen duration-100 hover:mr-2">About</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12 ml-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </Link>
            <Link href="/about">
            <div className="flex justify-end items-center">
                <h1 className="text-[50px] italic text-white border-b-2 leading-[44px] border-neonGreen font-rubik mt-6 mb-6 hover:text-neonGreen duration-100 hover:mr-2">Skills</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12 ml-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </Link>
            <Link href="/projects">
            <div className="flex justify-end items-center">
                <h1 className="text-[50px] italic text-white border-b-2 leading-[44px] border-neonGreen font-rubik mt-6 mb-6 hover:text-neonGreen duration-100 hover:mr-2">Projects</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12 ml-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </Link>
            <Link href="/contact">
            <div className="flex justify-end items-center">
                <h1 className="text-[50px] italic text-white border-b-2 leading-[44px] border-neonGreen font-rubik mt-6 mb-6 hover:text-neonGreen duration-100 hover:mr-2">Contact</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12 ml-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
        {/* This div could look cool as contrast with entire bg-slate-500 */}
      </div>
    </div>
  );
}
