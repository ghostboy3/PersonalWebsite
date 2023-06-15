import React from "react";
import "./styles/portfolio.css";
import WorkCard from "./WorkCard";
import slideintohighschool from './assets/slideintohighschool.png'
import boggle from './assets/boggle.png'
import watertrackers from './assets/watertrackers.png'
import SlideIntoHighschool2 from './assets/SlideIntoHighSchool2.png';
import SlideIntoHighschool3 from './assets/SlideIntoHighschool3.png';
import SlideIntoHighschool4 from './assets/SlideIntoHighschool4.png';
import WaterTrackers2 from './assets/WaterTrackers2.PNG';
import WaterTrackers3 from './assets/WaterTrackers3.png';
import WaterTrackers4 from './assets/WaterTrackers4.png'
import boggle2 from './assets/boggle2.PNG';
import boggle3 from './assets/boggle3.png';
import boggle4 from './assets/boggle4.png';

const Portfolio = () => {
  return (
    <div id = "portfolio" class="portfolio">
      <h1 class="subheading workSubheading">My Work</h1>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <WorkCard
            title="SlideIntoHighSchool"
            link="https://github.com/charlie-to/SlideIntoHighschool"
            description="SlideIntoHighschool is a game aimed at middle/elementary school students to prepare them for high school."
            img = {slideintohighschool}
            img2 = {SlideIntoHighschool2}
            img3 = {SlideIntoHighschool3}
            img4 = {SlideIntoHighschool4}
            video = "https://www.youtube.com/embed/y6t63skubSw"
            />
            
          </div>
          <div class="col-sm">
            <WorkCard
            title="Boggle"
            link="https://github.com/charlie-to/Boggle"
            img = {boggle}
            img2 = {boggle2}
            img3 = {boggle3}
            img4 = {boggle4}
            description="A 2 player boggle game made with java."/>
          </div>
          <div class="col-sm">
            <WorkCard
            title="WaterTrackers"
            link="https://devpost.com/software/water-tracker-7o92cp"
            liveDemo = "https://charlie-to.github.io/waterTrackers.github.io/"
            img = {watertrackers}
            img2= {WaterTrackers2}
            img3= {WaterTrackers3}
            img4= {WaterTrackers4}
            video = "https://www.youtube.com/embed/UCCy1l35ncg"
            description="WaterTrackers tells you everything you need to know in case of a flood, and how at risk you are of encountering one."/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
