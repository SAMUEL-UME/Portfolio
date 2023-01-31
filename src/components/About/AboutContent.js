import "./AboutContent.css";
import profile from "../../resource/profile1.jpg";
import bg from "../../resource/bg.jpg";

import React from "react";
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I?</h1>
        <p>
          I'm a MERN stack developer who is passionate about creating dynamic
          products from range of services from the clients side to the server
          side
        </p>
        <Link to={"/contact"}>
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={profile} alt="My bg" className="img" />
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
