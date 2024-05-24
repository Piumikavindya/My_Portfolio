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
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
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
          {toggle === 'android app' ? (
            <ToggleButton active value="android app" onClick={() => setToggle('android app')}>
              Android Apps
            </ToggleButton>
          ) : (
            <ToggleButton value="android app" onClick={() => setToggle('android app')}>
              Android Apps
            </ToggleButton>
          )}
          <Divider />
          {toggle === 'machinelearning' ? (
            <ToggleButton active value="machinelearning" onClick={() => setToggle('machinelearning')}>
              Machine Learning
            </ToggleButton>
          ) : (
            <ToggleButton value="machinelearning" onClick={() => setToggle('machinelearning')}>
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