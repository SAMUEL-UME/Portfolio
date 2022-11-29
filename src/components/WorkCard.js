import "./WorkCard.css";
import React from "react";
import {NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgSrc} alt="mmmm" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btn">
          <a
            href="https://rick-and-morty-wiki-samuel-ume.vercel.app/"
            rel="noreferrer"
            target="_blank"
            className="btn"
          >
            View
          </a>
          <NavLink to="url.com" className="btn">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
