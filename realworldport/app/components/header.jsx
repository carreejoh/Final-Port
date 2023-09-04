function Header() {
  return (
    <div className="fixed z-50 h-24 w-[100vw] top-0 right-0 left-0 bg-black">
      <div className="w-full h-full flex justify-between p-8 pl-12 pr-12 items-center">
        <a className="text-white text-2xl hover:text-indigo-400 cursor-pointer">
          Carreejoh
        </a>
        <div className="flex">
          <a className="text-white text-md ml-3 hover:text-indigo-400 cursor-pointer">
            About
          </a>
          <a className="text-white text-md ml-3 hover:text-indigo-400 cursor-pointer">
            Projects
          </a>
          <a className="text-white text-md ml-3 hover:text-indigo-400 cursor-pointer">
            Contact
          </a>
          <a className="text-white text-md ml-3 hover:text-indigo-400 cursor-pointer">
            Blog
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
