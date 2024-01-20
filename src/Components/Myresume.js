import React from "react";
import "./myresume.css";
import resumecropped from "./assets/resumecropped.png";
import linkedin from "./assets/linkedin.png";

const Myresume = () => {
  return (
    <section id="myresume">
      <span className="resume-title">My Resume</span>
      <span className="resume-descr">
        Dedicated to understanding and meeting the unique needs of each client,
        I provide tailored solutions with a focus on fostering long-term
        partnerships and delivering exceptional bla bla bla results.
      </span>
      <div className="resume-imgs">
        <a href={require("./Resume.pdf")} download="Resume.pdf">
          <img className="resume-img" alt="client-img" src={resumecropped} />
        </a>
        <a href="https://www.linkedin.com/in/how-yee-yap-5694571a9/">
          <img className="resume-img" alt="client-img" src={linkedin} />
        </a>
      </div>
    </section>
  );
};

export default Myresume;
