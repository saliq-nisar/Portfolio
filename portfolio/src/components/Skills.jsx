import React from "react";
import "../styles/Skills.css";

const Skills = () => {
  const skillSet = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "React", level: "75%" },
    { name: "Flutter", level: "70%" },
    { name: "Node.js", level: "65%" },
  ];

  return (
    <section className="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skillSet.map((skill, index) => (
          <div className="skill" key={index}>
            <span>{skill.name}</span>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: skill.level }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
