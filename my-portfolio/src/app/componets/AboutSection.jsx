import React from 'react';
import styled from 'styled-components';
import _default from '../themes/default';
import { Bio } from '../data/constans';

export const GitHubButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
    :hover {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.white};     
    }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    }
`;

export const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export default function AboutSection() {
  return (
    <section className='text-white grid grid-cols-2 relative' id ="about">
         <div className=''></div>
      <div className='py-40 px-6 sm:py-16'>

        <h1 className='mb-10 mt-20 mr-6 ml-20 px-10 text-3xl sm:text-4xl lg:text-5xl font-semibold'> About Me</h1>
        <p className='text-base mr-10 lg:text-lg'>
          I am a 3rd year undergraduate in computer engineering Faculty of engineering University of Ruhuna. I have experience with a variety of technologies including HTML, CSS,JavaScript, React, Node.js, and MongoDB and programming languages such as C, C++, Java. I am always looking to learn new things and improve my skills. In my free time, I enjoy reading, hiking, and spending time with my family.
        </p>

       
      </div>
    
      <section className='text-white grid grid-cols-1'>
        <div className='py-5 px-4 ml-20 sm:py-16'>
          <h1 className='mb-7 mr-10 ml-20 px-5 text-3xl sm:text-4xl lg:text-5xl font-semibold'> Education</h1>
          <p>
            B.Sc. (Hons) in Computer Engineering(UG) <br></br>	                     
            Faculty of Engineering, University of Ruhuna, Galle, Sri Lanka
          </p>
        </div>
        <div className=''></div>
      </section>
    
    </section>
  );
}
