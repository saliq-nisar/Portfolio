import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  const projectList = [
    {
      title: "E-commerce Website",
      description: "An online store built with React, Firebase, and Stripe.",
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio built with React and styled-components.",
      link: "/",
    },
    {
      title: "DocApp",
      description: "A doctor booking app made with Flutter and Firebase.",
      link: "#",
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
