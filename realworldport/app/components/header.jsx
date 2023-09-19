"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

function Header() {
  
  const [active, setActive] = useState("home");

  return (
    <div className="fixed z-50 h-24 md:h-16 md:w-[100vw] top-0 right-0 left-0 bg-black md:bg-transparent">
      <div className="w-full h-full md:flex justify-between pt-4 md:pl-20 md:pr-20 pr-4 pl-4 items-center">
        <Link href="/">
          <h1
            onClick={() => setActive("home")}
            className="text-white md:border-b-2 border-neonGreen font-rubik text-2xl hover:text-neonGreen cursor-pointer"
          >
            Carreejoh
          </h1>
        </Link>
        <div className="flex md:mt-0 mt-2">
          <Link href="/">
            <h1
              onClick={() => setActive("home")}
              className={`font-rubik text-md ml-0 md:ml-3 border-b-2 hover:border-neonGreen hover:text-neonGreen duration-100 cursor-pointer ${
                active === "home"
                  ? "border-neonGreen text-neonGreen"
                  : "border-transparent text-white"
              }`}
            >
              Home
            </h1>
          </Link>

          <Link href="/about">
            <h1
              onClick={() => setActive("about")}
              className={`font-rubik text-md ml-3 border-b-2 hover:border-neonGreen hover:text-neonGreen duration-100 cursor-pointer ${
                active === "about"
                  ? "border-neonGreen text-neonGreen"
                  : "border-transparent text-white"
              }`}
            >
              About
            </h1>
          </Link>

          <Link href="/projects">
            <h1
              onClick={() => setActive("projects")}
              className={`font-rubik text-md ml-3 border-b-2 hover:border-neonGreen hover:text-neonGreen duration-100 cursor-pointer ${
                active === "projects"
                  ? "border-neonGreen text-neonGreen"
                  : "border-transparent text-white"
              }`}
            >
              Projects
            </h1>
          </Link>

          <Link href="/contact">
            <h1
              onClick={() => setActive("contact")}
              className={`font-rubik text-md ml-3 border-b-2 hover:border-neonGreen hover:text-neonGreen duration-100 cursor-pointer ${
                active === "contact"
                  ? "border-neonGreen text-neonGreen"
                  : "border-transparent text-white"
              }`}
            >
              Contact
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
