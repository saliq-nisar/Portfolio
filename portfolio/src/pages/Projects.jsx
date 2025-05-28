import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  const projectList = [
    {
      title: "Air Gloss(E-comm) Website",
      description: "An online store built with React with animations, showcasing my frontend skills .",
      link: "https://github.com/saliq-nisar/e-comm",
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio built with React and styled-components.",
      link: "/",
    },
    {
      title: "DocApp",
      description: "A doctor booking app made with React .",
      link: "https://github.com/saliq-nisar/Portfolio",
    },
  ];

  return (
    <section className="projects">
      <div className="projects-container">
        <h2>My Projects</h2>
        <div className="project-cards">
          {projectList.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
