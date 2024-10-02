import React from 'react';
import SectionContainer from "../hoc/SectionContainer";
import { getProjectsWording } from '../../data/wording_data';

const Projects = ({isUkLangage}) => {
  return (
      <SectionContainer sectionId="projects" title={getProjectsWording(isUkLangage)} bgColor="white" fullScreen={false}>
      <div className='projects'>
        <div>Projects are comming soon</div>
      </div>
      </SectionContainer>
  );
};

export default Projects;
