import React from "react";
import "../styles/Skills.css";

const Skills = () => {
  const skillSet = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "85%" },
    { name: "JavaScript", level: "90%" },
    { name: "TypeScript", level: "90%" },
    { name: "React", level: "100%" },
    { name: "Flutter", level: "60%" },
    { name: "MongoDB", level: "80%" },
    { name: "PostgreSQL", level: "60%" },
    { name: "MySQL", level: "60%" },
    { name: "Express.js", level: "70%" },
    { name: "Dart", level: "40%" },
    { name: "MUI", level: "90%" },
    { name: "Bootstrap", level: "60%" },
  ];

  return (
    <section className="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skillSet.map((skill, index) => (
          <div className="skill" key={index}>
            <span className="skill-name">{skill.name}</span>
            <div className="skill-bar">
              <div
                className="skill-level"
                style={{ width: skill.level }}
                data-level={skill.level}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
