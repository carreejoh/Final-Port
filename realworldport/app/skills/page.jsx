"use client";
import { Line, Circle } from 'rc-progress';

function Skills() {

    const percentage = 66;

    return (
      <div className="w-[100vw] h-[100vh] pt-16 pb-16 pl-16 pr-16 bg-gradient-to-tr from-baseGray to-black ">
        <div className="flex items-center p-4 w-full h-full bg-gradient-to-tr from-black to-baseGray">
        <Line percent={50} strokeWidth={4} strokeColor="#121212" className='h-12 w-12' />
     <Circle percent={60} strokeWidth={4} strokeColor="#D3D3D3" className='h-12 w-12'/> 
        </div>
      </div>
    );
  }
  
  export default Skills;