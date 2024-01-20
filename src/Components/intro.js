import React from "react";
import "./intro.css";
import IMG_9416 from "./assets/IMG_9416.JPG";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Intro = () => {
  return (
    <section id="intro">
      <div className="intro-content">
        <span className="hello">Hello,</span>
        <span className="introtext">
          I'm <span className="introname">How Yee</span>
          <br />
          Front-end Engineer
        </span>
        <p className="intropara">Ex-Business Development at PETRONAS & Setel</p>
        <button
          onClick={() =>
            document
              .getElementById("contact-page")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="btn"
        >
          Hire Me
        </button>
        <div className="intro-icons">
          <a href="">
            <FaGithub className="intro-icon" />
          </a>
          <a href="https://www.linkedin.com/in/how-yee-yap-5694571a9/">
            <FaLinkedin className="intro-icon" />
          </a>
        </div>
      </div>
      <img src={IMG_9416} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
