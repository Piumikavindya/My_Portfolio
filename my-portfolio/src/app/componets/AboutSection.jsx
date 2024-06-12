import React from 'react';
import styled from 'styled-components';
import _default from '../themes/default';
import { Bio } from '../data/constans';


export default function AboutSection() {
  return (
    <section className='text-white grid grid-cols-1 md:grid-cols-2 relative' id="about">
      <div className=''></div>
      <div className='py-6 px-6 md:py-40 md:px-12'>
        <h1 className='mb-10 text-3xl sm:text-4xl lg:text-5xl font-semibold'>About Me</h1>
        <p className='text-base lg:text-lg'>
          I am a 3rd year undergraduate in computer engineering Faculty of engineering University of Ruhuna. I have experience with a variety of technologies including HTML, CSS, JavaScript, React, Node.js, and MongoDB and programming languages such as C, C++, Java. I am always looking to learn new things and improve my skills. In my free time, I enjoy reading, hiking, and spending time with my family.
        </p>
      </div>
      
      <section className='text-white grid grid-cols-1'>
        <div className='py-5 px-6 md:py-20 md:px-12'>
          <h1 className='mb-7 text-3xl sm:text-4xl lg:text-5xl font-semibold'>Education</h1>
          <p>
            B.Sc. (Hons) in Computer Engineering (UG) <br />
            Faculty of Engineering, University of Ruhuna, Galle, Sri Lanka
          </p>
        </div>
      </section>
    </section>
  );
}
