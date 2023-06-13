import React from "react";
import "./styles/portfolio.css";
import WorkCard from "./WorkCard";
import slideintohighschool from './assets/slideintohighschool.png'
import boggle from './assets/boggle.png'
import watertrackers from './assets/watertrackers.png'

const Portfolio = () => {
  return (
    <div id = "portfolio" class="portfolio">
      <h1 class="subheading workSubheading">My Work</h1>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <WorkCard title="SlideIntoHighSchool" link="https://github.com/charlie-to/SlideIntoHighschool" description="SlideIntoHighschool is a game aimed at middle/elementary school students to prepare them for high school. It has 3 interactive levels that gives users an idea of what to expect in highschool. They will be able to go to classes, interact with classmates and teachers, and play minigames to simulate the high school extra curricular experience. Made with Milena Mofrad for Grade 12 Computer Science culminating project." img = {slideintohighschool}/>
          </div>
          <div class="col-sm">
            <WorkCard title="Boggle" link="https://github.com/charlie-to/Boggle" img = {boggle} description="A 2 player boggle game made with java. Final project for Grade 11 Computer Science made with Dana Hum."/>
          </div>
          <div class="col-sm">
            <WorkCard title="WaterTrackers" link="https://devpost.com/software/water-tracker-7o92cp" img = {watertrackers} description="WaterTrackers tells you everything you need to know in case of a flood, and how at risk you are of encountering one. Using the map, you can find your location and see how many floods occur in your area, and whether you're in danger. Made with Dev Narula, Mona Afshar, and Maryam Afshar for the NotUniversity Hacks hackathon."/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
