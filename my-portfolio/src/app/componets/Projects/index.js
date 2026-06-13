import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectStyles'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constans'

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          Selected projects from my resume, covering full-stack systems, academic work, and production-ready workflows.
        </Desc>
        <ToggleButtonGroup>
          {toggle === 'all' ? (
            <ToggleButton active value="all" onClick={() => setToggle('all')}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle('all')}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === 'web app' ? (
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>
              Web Apps
            </ToggleButton>
          ) : (
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>
              Web Apps
            </ToggleButton>
          )}
          <Divider />
          {toggle === 'ai' ? (
            <ToggleButton active value="ai" onClick={() => setToggle('ai')}>
              AI
            </ToggleButton>
          ) : (
            <ToggleButton value="ai" onClick={() => setToggle('ai')}>
              AI
            </ToggleButton>
          )}
          <Divider />
          {toggle === 'machine learning' ? (
            <ToggleButton active value="machine learning" onClick={() => setToggle('machine learning')}>
              Machine Learning
            </ToggleButton>
          ) : (
            <ToggleButton value="machine learning" onClick={() => setToggle('machine learning')}>
              Machine Learning
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' &&
            projects.map((project, index) => ( // Added key prop
              <ProjectCard key={index} project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
          {toggle !== 'all' &&
            projects.filter((item) => item.category === toggle).map((project, index) => ( // Added key prop
              <ProjectCard key={index} project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects