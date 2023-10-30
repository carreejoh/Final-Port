import Link from "next/link";
import Image from "next/image";

function Contact() {
  return (
    <div className="w-[100vw] h-[100vh] pt-16 pb-16 pl-16 pr-16 bg-gradient-to-tr from-baseGray to-black">
      <div className="flex w-full h-full bg-gradient-to-tr from-black to-baseGray xl:overflow-y-hidden overflow-y-scroll">
        <div className="w-full pr-4 pl-4 xl:pr-60 xl:pl-60 mt-6 pt-4">
          <h1 className="text-4xl font-rubik border-b-2 border-neonGreen w-[200px]">
            Contact Me
          </h1>
          <div className="flex mt-6">
            <Link href="https://github.com/carreejoh">
              <div className="flex justify-start">
                <h1 className="text-xl text-white">Github</h1>
                <a className="text-white mr-3 hover:text-blue-500 cursor-pointer ml-1">
                  <Image
                    src="/github.svg"
                    className="hover:text-blue-500"
                    width={26}
                    height={26}
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </a>
              </div>
            </Link>
            <Link href="https://www.linkedin.com/in/carter-johnson-080318266/">
              <div className="ml-2 flex justify-start">
                <h1 className="text-xl text-white">LinkedIn</h1>
                <a className="text-white mr-3 hover:text-blue-500 cursor-pointer ml-1">
                  <Image
                    src="/linkedin.svg"
                    className="hover:text-blue-500"
                    width={26}
                    height={26}
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </a>
              </div>
            </Link>
            {/* <Link href="#">
              <div className="ml-2 flex justify-start">
                <h1 className="text-xl">Discord</h1>
                <a className="text-white mr-3 hover:text-blue-500 cursor-pointer ml-1">
                  <Image
                    src="/discord.svg"
                    className="hover:text-blue-500"
                    width={26}
                    height={26}
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </a>
              </div>
            </Link> */}
            <Link href="https://www.linkedin.com/in/carter-johnson-080318266/overlay/contact-info/">
              <div className="ml-2 flex justify-start">
                <h1 className="text-xl text-white">Text Me</h1>
                <a className="text-white mr-3 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>
                </a>
              </div>
            </Link>
          </div>
          <h1 className="text-sm text-gray-400 mt-6">Email Form:</h1>
          <div className="w-[70%] xl:w-[40%] mb-4 p-2 mt-1 bg-baseGray rounded-lg">
            <form>
              <h1 className="text-md text-white">Address</h1>
              <input
                type="text"
                className="w-full text-black rounded-md p-1"
                placeholder="your email address"
              ></input>
              <h1 className="text-md text-white mt-2">Subject</h1>
              <input
                type="text"
                className="w-full text-black rounded-md p-1"
                placeholder=""
              ></input>
              <h1 className="text-md text-white mt-2">Body</h1>
              <textarea className="w-full rounded-md text-black p-1 h-40 max-h-64 min-h-20" maxLength="5000" placeholder="5000 max chars">

              </textarea>
              <button type="submit" className="p-2 bg-mainBlue rounded-md mt-2 hover:scale-95">
                Submit
              </button>
            </form>
          </div>
          <div className="h-4">

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
