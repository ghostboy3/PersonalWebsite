import React from 'react';

const WorkCard = (props) => {
    return (
        <>
        {/* <h1>hi</h1> */}
        <div class="card">
        <img class="card-img-top" src={props.img} alt="Card image cap"/>
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.description}</p>
          <a href={props.link} target="_blank" class="btn btn-primary card-btn">View Project</a>
        </div>
      </div>
      </>
  );
};

export default WorkCard;
