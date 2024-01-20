import React from "react";
import "./navbar.css";
import logo2 from "./assets/logo2.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo2} className="logo" />
      <div className="desktopmenu">
        <Link
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopmenulistitem"
        >
          Home
        </Link>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopmenulistitem"
        >
          About
        </Link>
        <Link
          to="myportfolio"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopmenulistitem"
        >
          Portfolio
        </Link>
        <Link
          to="myresume"
          spy={true}
          smooth={true}
          offset={-67}
          duration={500}
          className="desktopmenulistitem"
        >
          Resume
        </Link>
      </div>
      <button
        className="desktopmenubtn"
        onClick={() =>
          document
            .getElementById("contact-page")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
