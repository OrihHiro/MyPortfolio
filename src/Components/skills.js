import React from "react";
import "./skills.css";
import react from "./assets/react.png";
import js from "./assets/js.png";
import htmlcss2 from "./assets/htmlcss2.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skills-title">What I do</span>
      <span className="skills-description">
        Proficient in creating structured, semantic, and accessible HTML markup.
        Experienced in building the foundation of web pages, incorporating
        essential tags, and optimizing for SEO. Knowledgeable about HTML5
        features and best practices.
      </span>
      <div className="skills-bar">
        <div className="skillbar skillbarhover1">
          <img src={htmlcss2} alt="skill" className="skillsbarimg htmlcss" />
          <div className="skillsbartext">
            <h2>HTML & CSS</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="skillbar skillbarhover2">
          <img src={js} alt="skill" className="skillsbarimg" />
          <div className="skillsbartext">
            <h2>Javascript</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="skillbar skillbarhover3">
          <img src={react} alt="skill" className="skillsbarimg" />
          <div className="skillsbartext">
            <h2>React Framework</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
