import Image from 'next/image'

function Footer() {
  return (
    <div className="fixed z-50 h-16 w-[100vw] bottom-0 right-0 left-0 bg-transparent">
      <div className="w-full h-full flex justify-between pb-4 pl-20 pr-20 items-center">
        <div className="flex">
          <a className="text-white  text-lg mr-4 hover:text-blue-500 cursor-pointer">
            <Image src="/github.svg" className='hover:text-blue-500' width={26} height={26} style={{ filter: 'brightness(0) invert(1)' }}/>
          </a>
          <a className="text-white  text-lg mr-4 hover:text-blue-500 cursor-pointer">
            <Image src="/linkedin.svg" className='hover:text-blue-500' width={26} height={26} style={{ filter: 'brightness(0) invert(1)' }}/>
          </a>
          <a className="text-white  text-lg mr-4 hover:text-blue-500 cursor-pointer">
            <Image src="/discord.svg" className='hover:text-blue-500' width={26} height={26} style={{ filter: 'brightness(0) invert(1)' }}/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
