import React from "react";
import { Link } from "react-scroll";
import "./myportfolio.css";
import portfolio1 from "./assets/portfolio1.png";
import portfolio2 from "./assets/portfolio2.png";

const Myportfolio = () => {
  return (
    <section id="myportfolio">
      <span className="myportfolio-title">My Portfolio</span>
      <span className="myportfolio-descr">
        Enthusiastic web developer with a strong focus on creating visually
        appealing and functional websites.
      </span>
      <div className="portfolio-img">
        <Link to="intro" spy={true} smooth={true} offset={-100}>
          <img src={portfolio1} alt="portfolio1" className="worksImg" />
          <div className="language">
            <p>React JS</p>
            <p>Vanilla CSS</p>
          </div>
        </Link>
        <a href="https://hy-ecommerce-plat.netlify.app/">
          <img src={portfolio2} alt="portfolio2" className="worksImg" />
          <div className="language">
            <p>React JS</p>
            <p>React-Router</p>
            <p>Tailwind CSS</p>
          </div>
        </a>
      </div>
      <button className="btnPortfolio">See More</button>
    </section>
  );
};

export default Myportfolio;
