import React from 'react';

const projects = [
  { title: 'Projet 1', description: 'Description du projet 1' },
  { title: 'Projet 2', description: 'Description du projet 2' },
  { title: 'Projet 3', description: 'Description du projet 3' },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Mes Projets</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
