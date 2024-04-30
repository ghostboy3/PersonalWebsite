import React from "react";
import "./styles/intro.css";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact"
import Resumepdf from "./assets/Resume.pdf"

const Intro = () => {
  return (
    <>
    <div className="intro bg">
      <h2 className="gray sub-title">
        Hi!
        <span role="img" aria-label="jsx-a11y/accessible-emoji">
          👋
        </span>
        My name is
      </h2>
      <h1 className="teel title">Nico To</h1>
      <h3 className="gray short-bio">Welcome to my little corner on the internet!!</h3>
      <p className="gray bio">I'm a grade 11 student from William Lyon Mackenzie who loves to learn and work with others. <br/>My Core Values: Kindess, Courage, Curisotiy, Integrity</p>
      <a href={Resumepdf}
        download="Resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="btn btn-outline-light">Download Resume</a>
      {/* <button className="btn btn-outline-light">Contact Me!</button> */}
      <a href="#about" className="btn btn-outline-light">Learn About Me</a>
    </div>
    <About/>
    <Portfolio/>
    <Contact/>
    </>
  );
};
export default Intro;
