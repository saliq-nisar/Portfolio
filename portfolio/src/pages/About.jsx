import React from "react";
import "../styles/About.css";
import Skills from "../components/Skills";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <h2>About Me</h2>
        <p>
          I'm a passionate frontend developer focused on creating clean, user-friendly websites and web apps using React.
        </p>
        <p>
          I love turning complex problems into simple, beautiful, and intuitive designs. When I'm not coding, I enjoy reading, working out, and exploring new tech.
        </p>
        <p>
          I'm currently open to new opportunities where I can contribute, learn, and grow as a developer.
        </p>
        <Skills/>

        <a href="/Saliq_Nisar (1).pdf" download className="resume-button">Download Resume</a>

      </div>
    </section>
  );
};

export default About;
