import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import StarCanvas from "./StarBackground";
import BgAnimation from "./BgAnimation/index.js";
import MouseMove from "./MouseMove";
import { Bio } from '../data/constans';
import styled from 'styled-components';
import Link from 'next/link';



export const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    :hover {
      color: ${({ theme }) => theme.primary};
    }

    &.active {
      border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;


export const StyledButton = styled.button`
/* Add the same styles as the provided button */
padding: 0.75rem 1.5rem;
width: 100%;
border-radius: 9999px;
background-image: linear-gradient(to bottom right, #3b82f6, #8b5cf6, #ec4899);
color: white;
border: none;
cursor: pointer;
transition: background-color 0.3s ease;
font-size: 1rem;
font-weight: 600;
outline: none;

/* Add hover effect */
&:hover {
  background-color: white;
}

/* Add responsive styles */
@media (min-width: 640px) {
  width: auto;
}
`;


// export const GitHubButton = styled.a`

//   justify-content: center;
//   display: flex;
//   align-items: center;
//   height: 70%;
//   border-radius: 20px;
//   color: white;
//   cursor: pointer;
//   padding: 0 20px;
//   font-weight: 500;
//   text-decoration: none;
//   font-size: 16px;
//   transition: all 0.6s ease-in-out;
//     :hover {
//       background: ${({ theme }) => theme.primary};
//       color: ${({ theme }) => theme.white};     
//     }
//     @media screen and (max-width: 768px) { 
//     font-size: 14px;
//     }
// `;

export const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color:${({ theme }) => theme.white};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    box-shadow:  20px 20px 60px #1F2634,
    -20px -20px 60px #1F2634;
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 

`;



// export const GitHubButton = styled.a`
//   border: 1.8px solid ${({ theme }) => theme.primary};
//   justify-content: center;
//   display: flex;
//   align-items: center;
//   height: 70%;
//   border-radius: 20px;
//   color: ${({ theme }) => theme.primary};
//   cursor: pointer;
//   padding: 0 20px;
//   font-weight: 500;
//   text-decoration: none;
//   font-size: 16px;
//   transition: all 0.6s ease-in-out;
//     :hover {
//       background: ${({ theme }) => theme.primary};
//       color: ${({ theme }) => theme.white};     
//     }
//     @media screen and (max-width: 768px) { 
//     font-size: 14px;
//     }
// `;

// export const ButtonContainer = styled.div`
//   width: 80%;  
//   height: 100%;
//   display: flex;
//   justify-content: end;
//   align-items: center;
//   padding: 0 6px;
//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// export const Bio = {
//   github: "https://github.com/Piumikavindya",
//   resume: "https://drive.google.com/file/d/1R9ybm-4kE4F9QQuFHeTbb5ASBU-9pnSv/view?usp=drive_link",
//   linkedin: "www.linkedin.com/in/piumi-kavindya",
//   hackerrank: "https://www.hackerrank.com/piumikavindya",
// };


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

export default function HeroSection() {
  
 
 

  return (
    
<section className="relative">
  {/* Container for the HeroSection content */}
  <StarCanvas />
  <div className="grid grid-cols-l sm:grid-cols-12 my-12">
    <div className="col-span-7 place-self-center sm:text-left mt-20">
      <h1 className="mb-2 mr-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
        <span className="text-transparent text-center bg-clip-text bg-gradient-to-r from-purple-500 to-pink-400">


          Hello, I am
        </span>
        <br />
        <TypeAnimation
          sequence={[
            'Piumi Kavindya',
            1000,
            'Piumi Kavindya',
            1000,
            // 'Web Developer', // Optional comment out
            // 1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </h1>
          <p style={{ color: '#a0d4f5', fontSize: '16px', marginBottom: '0.1rem' }} className="text-[#a0d4f5] custom-small-text  sm:text-lg mb-3 lg:text-xl">B.Sc. (HONS) IN COMPUTER ENGINEERING (UG)
</p>
<p style={{ color: '#a0d4f5', fontSize: '14px', marginTop: '0.5rem' }} className="text-[#add8f3] text-sm  sm:text-lg mb-4 lg:text-xl">UNIVERSITY OF RUHUNA
</p>
          <div>
        


        

          {/* <a href={Bio.resume} target="_blank" className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>
  Check Resume
</a> */}
   {/* <StyledButton>
          <GitHubButton href={Bio.resume} target="display">Check Resume</GitHubButton>
        </StyledButton> */}
       
            {/* <button href="https://drive.google.com/file/d/1R9ybm-4kE4F9QQuFHeTbb5ASBU-9pnSv/view?usp=drive_link" className='px-1 py-1 w-full sm:w-fit rounded-full bg-transparent bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  hover:bg-slate-800 text-white border mt-3'>
              <Link href={Bio.resume}></Link>
              <span className='block bg-[#121212]  hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
            </button> */}

            
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
      
     
    </section>
    
  );
}
 