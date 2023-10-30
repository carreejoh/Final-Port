import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="fixed z-50 h-16 w-[100vw] bottom-0 right-0 left-0 bg-transparent hidden md:block">
      <div className="w-full h-full flex justify-between pb-4 pl-20 pr-20 items-center">
        <div className="flex">
          <Link href="https://github.com/carreejoh" className="mr-3 hover:scale-95 duration-100">
            <Image
              src="/github.svg"
              className="hover:text-blue-500"
              width={26}
              height={26}
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>

          <Link href="https://www.linkedin.com/in/carter-johnson-080318266/" className="mr-3 hover:scale-95 duration-100">
            <Image
              src="/linkedin.svg"
              className="hover:text-blue-500"
              width={26}
              height={26}
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>
{/* 
          <Link href="https://twitter.com/carreejoh6" className="mr-3 hover:scale-95 duration-100">
            <Image
              src="/discord.svg"
              className="hover:text-blue-500"
              width={26}
              height={26}
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
