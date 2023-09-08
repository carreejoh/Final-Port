"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

function Header() {
  // useEffect(() => {
  //   setActive('home')
  // }, [])

  const [active, setActive] = useState("home");

  return (
    <div className="fixed z-50 h-16 w-[100vw] top-0 right-0 left-0 bg-transparent">
      <div className="w-full h-full flex justify-between pt-4 pl-20 pr-20 items-center">
        <a className="text-white  border-b-2 border-neonGreen font-rubik text-2xl hover:text-neonGreen cursor-pointer">
          {/* <Link href="/">&lt;Carreejoh/&gt;</Link> */}
          <Link href="/">Carreejoh</Link>
        </a>
        <div className="flex">
          <Link href="/">
            <h1
              onClick={() => setActive("home")}
              className={`font-rubik text-md ml-3 border-b-2 hover:border-neonGreen hover:text-neonGreen duration-100 cursor-pointer ${
                active === "home"
                  ? "border-neonGreen text-neonGreen"
                  : "border-transparent text-white"
              }`}
            >Home</h1>
          </Link>

          <Link href="/about">
            <h1
              onClick={() => setActive("about")}
              className={`font-rubik text-md ml-3 border-b-2 hover:border-neonGreen hover:text-neonGreen duration-100 cursor-pointer ${
                active === "about"
                  ? "border-neonGreen text-neonGreen"
                  : "border-transparent text-white"
              }`}
            >About</h1>
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
