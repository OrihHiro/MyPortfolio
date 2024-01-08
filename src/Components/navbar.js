import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="logo" />
      <div className="desktopmenu">
        <Link
          activeClass="active"
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
          activeClass="active"
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
          activeClass="active"
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
          activeClass="active"
          to="myclient"
          spy={true}
          smooth={true}
          offset={-67}
          duration={500}
          className="desktopmenulistitem"
        >
          Clients
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
