import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";

const WorkCard = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const waterBody = <h1>testing</h1>;
  return (
    <>
      {/* <h1>hi</h1> */}
      <div class="card">
        <img class="card-img-top" src={props.img} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.description}</p>
          <a href={props.link} target="_blank" class="btn btn-primary card-btn">
            View Project
          </a>
          {props.title == "WaterTrackers" || props.title=="Protein Structure Prediction" ? (
            <a
              href={props.liveDemo}
              target="_blank"
              class="btn btn-primary card-btn"
            >
              Live Demo
            </a>
          ): null}
          {props.title == "SlideIntoHighSchool" || props.title=="Boggle" || props.title=="WaterTrackers" || props.title=="Aidify.ca" ? (
            <Button
            className="card-btn "
            variant="btn btn-outline-secondary"
            onClick={handleShow}
          >
            Learn More
          </Button>
          ): null}
          
          <Modal className="modal-lg" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={props.img}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={props.img2}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={props.img3}
                  />

                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={props.img4}
                  />
                </Carousel.Item>
                {props.video != null && (
                <Carousel.Item>
                <iframe width="100%" height="500" src={props.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Carousel.Item>)}
              </Carousel>
              {props.title == "SlideIntoHighSchool" && (
                <>
                  <br />
                  <h3>Description</h3>
                  <p>SlideIntoHighschool is a game aimed at middle/elementary school students to prepare them for high school. It has 3 interactive levels that gives users an idea of what to expect in highschool. They will be able to go to classes, interact with classmates and teachers, and play minigames to simulate the high school extra curricular experience. Made with Milena Mofrad for Grade 12 Computer Science culminating project.</p>
                  <br />
                  <h3>Game Details</h3>
                  <p>The game has 3 levels: Learning, Maze, and Escape</p>
                  <h5>Learning Level</h5>
                  <p>
                    Users get to explore different rooms in the school and click
                    objects to learn more about them
                  </p>
                  <h5>Maze Level</h5>
                  <p>
                    Users have to escape a maze by completeing obstacles they
                    encounter along the way
                  </p>
                  <p>
                    These obastacles teach users fundamental highschool skills
                    such as unlocking a lock, mapping classrooms in a school,
                    and making friends.
                  </p>
                  <h5>Escape Level</h5>
                  <p>
                    Users will have to survive a simulated high school day by
                    playing minigames that realate to real high school
                    experiences.
                  </p>
                  <p>
                    Some minigames include gathering items for class, talking to
                    teachers, taking class notes and more.
                  </p>
                  <br />
                  <h3>Individual Contribution</h3>
                  <p>
                    I coded half the mini games, the learning level, and the
                    level screens - ex. the maze for the maze level and the
                    school map for the escape level.
                  </p>
                  <p>
                    I also linked all the code together, added transition
                    screens, and handeld all user input.
                  </p>
                </>
              )}
              {props.title == "WaterTrackers" && (
                <>
                <br />
                  <h3>Description</h3>
                  <p>WaterTrackers tells you everything you need to know in case of a flood, and how at risk you are of encountering one. Using the map, you can find your location and see how many floods occur in your area, and whether you're in danger. Made with Dev Narula, Mona Afshar, and Maryam Afshar.</p>
                  <br/>
                  <h3>How we Built It</h3>
                  <p>We brainstormed ideas and chose WaterTrackers because we felt it would be most useful and could save lives. Then we discussed our skill set and used trello to split the tasks, and github to share files. Some of us did research, some worked on the website, while others planned the video. We took the map data from a CSV file which was prepared via a python script. We used bootstrap studio to create the UI and UX of the website, and exported the HTML and CSS code. We then used the Google Maps API to embed the map with various flood locations in our website. As for the information -checklist and additional resources-, we researched a lot of information related to floods. Throughout the way, we helped each other out.</p>
                  <br />
                  <h3>Individual Contribution</h3>
                  <p>I worked on collecting data on floods and cleaning up and preparing the database for the front end with Python Pandas. Also helped write to the script, and design the wire frame. I had a lot of fun working with the team.</p>
                </>
              )}
              {props.title == "Boggle" &&(
                <>
                  <br />
                  <h3>Description</h3>
                  <p>A 2 player Boggle game made with java. Final project for Grade 11 Computer Science made with Dana Hum.</p>
                  <p>Has a timed mode and unlimited time mode. All scores are stored in files and top 10 can be viewed on the highscore pages.</p>
                  <br />
                  <h3>My Contribution</h3>
                  <p>I made the Boggle game timed and untimed versions, implemented all the error traps as well as the algorithm to find if a word is in the board</p>
                </>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button
                className="card-btn"
                variant="primary"
                onClick={handleClose}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default WorkCard;
