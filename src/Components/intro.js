import React from "react";
import "./intro.css";
import { Link } from "react-scroll";
import me2 from "./assets/me2.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="intro-content">
        <span className="hello">Hello,</span>
        <span className="introtext">
          I'm <span className="introname">How Yee</span>
          <br />
          Developer Engineer
        </span>
        <p className="intropara">I'm a New Web Developer</p>
        <button className="btn">Hire Me</button>
      </div>
      <img src={me2} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
