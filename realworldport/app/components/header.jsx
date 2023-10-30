"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

function Header() {
  const [active, setActive] = useState("home");

  return (
    <div className="fixed z-50 h-48 lg:h-16 lg:w-[100vw] top-0 right-0 left-0 bg-black lg:bg-transparent">
      <div className="w-full h-full lg:flex justify-between pt-4 lg:pl-20 lg:pr-20 pr-4 pl-4 items-center">
        <Link href="/">
          <h1
            onClick={() => setActive("home")}
            className="text-white lg:border-b-2 border-neonGreen font-semibold font-rubik text-[70px] lg:text-2xl hover:text-neonGreen cursor-pointer"
          >
            Carreejoh
          </h1>
        </Link>
        <div className="flex lg:mt-0 mt-2 ">
          <Link href="/">
            <h1
              onClick={() => setActive("home")}
              className={`font-rubik text-3xl lg:text-lg ml-0 lg:ml-3 border-b-2 hover:border-neonGreen hover:text-neonGreen duration-100 cursor-pointer ${
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
              className={`font-rubik text-3xl lg:text-lg ml-3 border-b-2 hover:border-neonGreen hover:text-neonGreen duration-100 cursor-pointer ${
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
              className={`font-rubik text-3xl lg:text-lg ml-3 border-b-2 hover:border-neonGreen hover:text-neonGreen duration-100 cursor-pointer ${
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
              className={`font-rubik text-3xl lg:text-lg ml-3 border-b-2 hover:border-neonGreen hover:text-neonGreen duration-100 cursor-pointer ${
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
