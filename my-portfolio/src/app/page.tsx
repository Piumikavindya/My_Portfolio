"use client";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Themes";
import HeroSection from "./componets/HeroSection";
import Navbar from "./componets/Navbar";
import AboutSection from "./componets/AboutSection";
import SkillsSection from "./componets/SkillsSection";
import styled from "styled-components";
import StarCanvas from "./componets/StarBackground";
import Projects from "./componets/Projects/index";
import ProjectDetails from "./componets/ProjectDetails/index";
import EmailSection from "./componets/EmailSection";
import Footer from "./componets/Footer";
import BgAnimation from "./componets/BgAnimation";
import MouseMove from "./componets/MouseMove";
import "./globals.css";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 105%; /* Change from 105% to 100% */
  overflow-x: hidden;

  @media screen and (min-width: 670px) and (max-width: 766px),
    screen and (min-width: 806px) and (max-width: 1024px) {
    padding: 0;
    margin: 0;
    width: 105%;
    overflow-x: hidden; /* This will hide any horizontal overflow */
  }
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <main className="flex min-h-screen flex-col container main-container">
        <Navbar />
        <Body>
          <div>
            <HeroSection />
            <MouseMove />
            <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
              <StarCanvas />
            </ThemeProvider>
            <Wrapper>
              <AboutSection />
            </Wrapper>
            <SkillsSection />
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
            {openModal.state && (
              <ProjectDetails
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            )}
            <EmailSection />
            <Wrapper>
              <Footer />
            </Wrapper>
          </div>
        </Body>
      </main>
    </ThemeProvider>
  );
}
