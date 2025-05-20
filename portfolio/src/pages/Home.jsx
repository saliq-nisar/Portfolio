import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="intro">
        <h1>Hello, I'm <span>Saliq Nisar</span></h1>
        <p>A passionate frontend developer building web interfaces with React.</p>
        <a href="/projects" className="btn">View My Work</a>
      </div>
    </section>
  );
};

export default Home;
