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
import aidify1 from './assets/aidify1.png';
import aidify2 from './assets/aidify2.png';
import aidify3 from './assets/aidify3.png';
import aidify4 from './assets/aidify4.png';
import flashcard from './assets/flashcard.png'
import whiteboard from './assets/whiteboard.webp'
import molecularProperties from './assets/molecularProperties.png'
import proteinfold from './assets/proteinfold.png'
import bindingaffinity from './assets/bindingaffinity.png'

const Portfolio = () => {
  return (
    <div id = "portfolio" class="portfolio">
      <h1 class="subheading workSubheading">My Work</h1>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <WorkCard
            title="Predicting Molecular Properties"
            link="https://github.com/ghostboy3/Predicting-Molecular-Properties-QSAR-using-TorchDrug/blob/main/main.ipynb"
            description="Creating a Graph Isomorphism Network to predict FDA approval and toxicity of molecules."
            img = {molecularProperties}
            />
            
          </div>
          <div class="col-sm">
            <WorkCard
            title="Protein Structure Prediction"
            link="https://github.com/ghostboy3/Protein-Structure-Prediction/blob/main/main.py"
            liveDemo = "https://ghostboy3-protein-structure-prediction-main-ebxh90.streamlit.app/"
            img = {proteinfold}
            description="Using ESMfold to predict the structure of proteins."/>
          </div>
          <div class="col-sm">
            <WorkCard
            title="Predicting Peptide Binding Affinity"
            link="https://medium.com/@nico.to/predicting-peptide-binding-affinity-with-mhcflurry-2-0-e60e2e6a75ce"
            img = {bindingaffinity}
            description="Used MHCflurry 2.0 to predict peptide binding affinities."/>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-sm">
            <WorkCard
            title="Aidify.ca"
            link="https://aidify.ca/"
            description="A chrome extension to help teachers measure student effort and combat AI plagiarism."
            img = {aidify1}
            img2 = {aidify2}
            img3 = {aidify3}
            img4 = {aidify4}
            video = "https://www.youtube.com/embed/J2ELU75IONo?si=GAbHvxrpWsvVbBCu"
            />
            
          </div>
          <div class="col-sm">
            <WorkCard
            title="AI flashcard generator"
            link="https://medium.com/@nico.to/generating-custom-flashcards-from-your-notes-using-open-ai-af59ef94af76"
            img = {flashcard}
            description="An AI study notes flashcard generator for Google Documents."/>
          </div>
          <div class="col-sm">
            <WorkCard
            title="AI Hand Gesture Controlled Whiteboard"
            link="https://medium.com/@nico.to/building-a-hand-gesture-controlled-whiteboard-with-opencv-mediapipe-and-sklearn-433c8406cbe3"
            img = {whiteboard}
            description="A whiteboard that uses computer vision and AI to track and recongize hand gestures."/>
          </div>
        </div>
      </div>
      
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
            link="https://github.com/ghostboy3/waterTrackers.github.io/tree/master"
            liveDemo = "https://ghostboy3.github.io/waterTrackers.github.io/"
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
