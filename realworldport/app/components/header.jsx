import Link from "next/link";

function Header() {
  return (
    <div className="fixed z-50 h-16 w-[100vw] top-0 right-0 left-0 bg-transparent">
      <div className="w-full h-full flex justify-between pt-4 pl-20 pr-20 items-center">
        <a className="text-white text-2xl hover:text-indigo-400 cursor-pointer">
          <Link href="/">&lt;Carreejoh/&gt;</Link>
        </a>
        <div className="flex">
          <a className="text-white text-md ml-3 hover:text-indigo-400 cursor-pointer">
            <Link href="/about">About</Link>
          </a>
          <a className="text-white text-md ml-3 hover:text-indigo-400 cursor-pointer">
            <Link href="/skills">Skills</Link>
          </a>
          <a className="text-white text-md ml-3 hover:text-indigo-400 cursor-pointer">
            <Link href="/projects">Projects</Link>
          </a>
          <a className="text-white text-md ml-3 hover:text-indigo-400 cursor-pointer">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
