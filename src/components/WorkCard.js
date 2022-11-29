import "./WorkCard.css";
import React from "react";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgSrc} alt="mmmm" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btn">
          <a href={props.view} rel="noreferrer" target="_blank" className="btn">
            View
          </a>
          <a href={props.src} className="btn">
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
