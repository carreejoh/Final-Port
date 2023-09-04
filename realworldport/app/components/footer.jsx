import Image from 'next/image'

function Footer() {
  return (
    <div className="fixed z-50 h-24 w-[100vw] bottom-0 right-0 left-0 bg-black">
      <div className="w-full h-full flex justify-between p-8 pl-12 pr-12 items-center">
        <div className="flex">
          <a className="text-white text-lg mr-4 hover:text-indigo-400 cursor-pointer">
            <Image src="/github.svg" width={26} height={26} style={{ filter: 'brightness(0) invert(1)' }}/>
          </a>
          <a className="text-white text-lg mr-4 hover:text-indigo-400 cursor-pointer">
            <Image src="/linkedin.svg" width={26} height={26} style={{ filter: 'brightness(0) invert(1)' }}/>
          </a>
          <a className="text-white text-lg mr-4 hover:text-indigo-400 cursor-pointer">
            <Image src="/discord.svg" width={26} height={26} style={{ filter: 'brightness(0) invert(1)' }}/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
