import React from "react";
import "./clients.css";
import logo from "./assets/logo.png";

const Myclient = () => {
  return (
    <section id="myclient">
      <span className="client-title">My Client</span>
      <span className="client-descr">
        Dedicated to understanding and meeting the unique needs of each client,
        I provide tailored solutions with a focus on fostering long-term
        partnerships and delivering exceptional bla bla bla results.
      </span>
      <div className="client-imgs">
        <img className="client-img" alt="client-img" src={logo} />
        <img className="client-img" alt="client-img" src={logo} />
        <img className="client-img" alt="client-img" src={logo} />
        <img className="client-img" alt="client-img" src={logo} />
      </div>
    </section>
  );
};

export default Myclient;
