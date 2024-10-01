import React from 'react';
import SectionContainer from "../hoc/SectionContainer";
import "./projects.scss"

const Projects = () => {
  return (
      <SectionContainer sectionId="projects" title="Projects" bgColor="white" fullScreen={false}>
      <div className='projects'>
        <div>Projects are comming soon</div>
      </div>
      </SectionContainer>
  );
};

export default Projects;
