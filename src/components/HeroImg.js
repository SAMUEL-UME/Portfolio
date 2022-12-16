import "./HeroImg.css";

import React from "react";
import intoImg from "../resource/bg.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={intoImg} alt="brackground cover" />
      </div>
      <div className="content">
        <p>Hello, I'M Samuel Ume</p>
        <h1>I'm a full-stack web developer </h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
