import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact-page">
      <span className="contact-title">Contact Me</span>
      <span className="contact-descr">
        Please fill out the form below to discuss any work opportunities
      </span>
      <form className="contact-form">
        <input type="text" className="name" placeholder="Your Name" />
        <input type="email" className="email" placeholder="Your Email" />
        <textarea
          className="msg"
          name="message"
          rows="5"
          placeholder="Your Name"
        ></textarea>
        <button type="submit" value="Send" className="submitBtn">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
