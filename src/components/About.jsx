import React from "react";
import "./styles/about.css";
import shork from "./assets/shork.jpg"

const About = () => {
  return (
    <>
      <div id = "about" class="about container">
        <div class="abt-row row">
          <div class="col-sm col col1">
            <img class="shork" src={shork} alt="" />
          </div>
          <div class="col-sm col col2">
            <h1 class="subheading">About Me</h1>
            <p>I'm a grade 11 student from William Lyon Mackenzie CI. I love coding and science. I'm currently learning how to build and design websites. In the future, I hope to use my skills to impact the world for good.</p>
            <p>I'm passionate about climate change and trans rights. During my free time I love cuddling with my dogs and going on long bike rides.</p>
            <p>I can't find any good pictures of myself so here's my favourite ikea shork instead!</p>
            {/* <a href="Resume1.pdf" className="btn btn-outline-dark" download>Download Resumee</a> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
