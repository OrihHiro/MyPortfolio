import React from "react";
import "./skills.css";
import react from "./assets/react.png";
import js from "./assets/js.png";
import htmlcss2 from "./assets/htmlcss2.png";
import c from "./assets/c.png";
import git from "./assets/git.png";
import tailwindcss from "./assets/tailwindcss.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skills-title">What I do</span>
      <span className="skills-description">
        As a beginner web developer, I proficiently wield HTML, CSS, and
        JavaScript to create visually appealing and functional websites. Eager
        to learn and grow, I am enthusiastic about building my skills and taking
        on exciting projects in the dynamic world of web development.
      </span>
      <div className="skills-bar">
        <div className="skillbar skillbarhover1">
          <img src={htmlcss2} alt="skill" className="skillsbarimg htmlcss" />
          <div className="skillsbartext">
            <h2>HTML & CSS</h2>
            <p></p>
          </div>
        </div>
        <div className="skillbar skillbarhover2">
          <img src={js} alt="skill" className="skillsbarimg" />
          <div className="skillsbartext">
            <h2>Javascript Fundamentals</h2>
            <p></p>
          </div>
        </div>
        <div className="skillbar skillbarhover3">
          <img src={git} alt="skill" className="skillsbarimg" />
          <div className="skillsbartext">
            <h2>Git Commands</h2>
            <p></p>
          </div>
        </div>
        <div className="skillbar skillbarhover3">
          <img src={c} alt="skill" className="skillsbarimg" />
          <div className="skillsbartext">
            <h2>C Language (42KL)</h2>
            <p></p>
          </div>
        </div>
        <div className="skillbar skillbarhover3">
          <img src={react} alt="skill" className="skillsbarimg" />
          <div className="skillsbartext">
            <h2>React Framework</h2>
            <p></p>
          </div>
        </div>
        <div className="skillbar skillbarhover3">
          <img src={tailwindcss} alt="skill" className="skillsbarimg" />
          <div className="skillsbartext">
            <h2>Tailwind CSS</h2>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
