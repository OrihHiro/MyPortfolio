import React from "react";
import "./myportfolio.css";
import portfolio from "./assets/portfolio.jpg";

const Myportfolio = () => {
  return (
    <section id="myportfolio">
      <span className="myportfolio-title">My Portfolio</span>
      <span className="myportfolio-descr">
        Passionate and dedicated web developer with a keen eye for design and
        functionality. Proficient in crafting responsive and visually appealing
        websites using the latest technologies. Committed to creating seamless
        user experiences and continuously expanding skills in the ever-evolving
        world of web development.
      </span>
      <div className="portfolio-img">
        <img src={portfolio} alt="portfolio1" className="worksImg" />
        <img src={portfolio} alt="portfolio2" className="worksImg" />
      </div>
      <button className="btnPortfolio">See More</button>
    </section>
  );
};

export default Myportfolio;
