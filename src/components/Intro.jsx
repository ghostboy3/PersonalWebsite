import React from "react";
import "./styles/intro.css";
import Background from "./Background";

const Intro = () => {
  return (
    <div className="intro bg">
      <Background/>
      <h2 className="gray sub-title">
        Hi!
        <span role="img" aria-label="jsx-a11y/accessible-emoji">
          👋
        </span>
        My name is
      </h2>
      <h1 className="teel title">Charlie To</h1>
      <h3 className="gray short-bio">Welcome to my little corner on the internet!!</h3>
      <p className="gray bio">I'm a grade 10 student from William Lyon Mackenzie and I like building websites.</p>
      <button className="btn btn-outline-light">Download Resume</button>
      <button className="btn btn-outline-light">Contact Me!</button>
      <button className="btn btn-outline-light">Learn About Me</button>
    </div>
  );
};
export default Intro;
