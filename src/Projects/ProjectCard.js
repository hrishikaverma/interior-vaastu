import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  // Require ka use karein agar images src/images/project/ folder me hain
  const imagePath = require(`../images/project/${project.image}`);

  return (
    <div className="project-card">
      <img src={imagePath} alt={project.title} className="project-image" />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectCard;
