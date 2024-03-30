import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import StarCanvas from "./StarBackground";
import BgAnimation from "./BgAnimation/index.js";
import MouseMove from "./MouseMove";

export default function HeroSection() {
  return (
    <section className="relative">
      {/* Container for the HeroSection content */}
      <div className='grid grid-cols-l sm:grid-cols-12 my-12'>
        <div className='col-span-7 place-self-center sm:text-left mt-20'>
          <h1 className='mb-2 mr-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold'> 
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-400'>
              Hello, I'm{" "} 
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'Piumi',
                1000, 
                'Software Engineer',
                1000,
                'Web Developer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">Full Stack Developer</p>
          <div>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  hover:bg-slate-200 text-white'>Hire Me</button>
            <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-transparent bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  hover:bg-slate-800 text-white border mt-3'>
              <span className='block bg-[#121212]  hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
            </button>
          </div>
        </div>

        <div className='col-span-5 place-self-center mt-10 lg:mt-0 relative'>
          <div className="absolute inset-0 z-0 col-span-5 place-self-center mt-2 lg:-mt-20 ">
            <BgAnimation />
          </div>
          <div className='rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[300px] lg:h-[300px] relative mt-20'>
            <Image src="/assets/my.jpg" alt="my" width={300} height={300} className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
          </div>
        </div>
      </div>
      
      {/* Render the MouseMove component as an under layer */}
      <div className="absolute inset-0 z-10">
        <MouseMove />
      </div>
    </section>
  );
}
 