import React from 'react';
import ProjectCard from './ProjectCard';
import projects from './project.json';
import './Project.css';

const Project = () => {
  return (
    <div className="project-container">
      <h2>Our Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
