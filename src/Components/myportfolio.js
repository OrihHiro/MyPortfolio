import React from "react";
import "./myportfolio.css";
import portfolio from "./assets/portfolio.jpg";

const Myportfolio = () => {
  return (
    <section id="myportfolio">
      <span className="myportfolio-title">My Portfolio</span>
      <span className="myportfolio-descr">
        Enthusiastic web developer with a strong focus on creating visually
        appealing and functional websites.
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
