import "./AboutContent.css";
import bg from "../resource/bg.jpg";

import React from "react";
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I?</h1>
        <p>
          I'm a MERN stack developer. create dynamic and user friendly products
        </p>
        <Link to={"/contact"}>
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={bg} alt="My bg" className="img" />
          </div>
          <div className="img-stack bottom">
            <img src={bg} alt="My bg" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
