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

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 105%;
  overflow-x: hidden;
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
      <main className="flex min-h-screen flex-col container ">
        <Navbar />

        <Body>
          <div>
            <HeroSection />
            {/* <BgAnimation /> */}
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
          </div>
        </Body>
      </main>
    </ThemeProvider>
  );
}
