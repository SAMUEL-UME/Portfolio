import "./FooterStyles.css";

import React from "react";
import {
  FaFacebook,
  FaHome,
  FaMailBulk,
  FaPhone,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Lagos, Nigeria.</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <a href="tel:+2348170032449"> +2348170032449</a>
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <a href="mailto:cume357@mail.com">cume357@mail.com</a>
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About me 🙃</h4>
          <p>
            I'm a highly motivated individual who's very passionate about the
            Web technologies in various ways, from ways it affects the real
            world to how it's solves milions of problems.
          </p>
          <br />
          <br />
          <p>
            <span style={{ color: "red", fontWeight: "700", fontSize: "30px" }}>
              A quick ask
            </span>
            <br />
            <span>How do you comfort a JavaScript bug?</span>
            <br />
            <br/>
            <span>You console it.😂</span>
          </p>
          <div className="social">
            <FaFacebook
              size={20}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <a href="https://twitter.com/ume7276">
              <FaTwitter
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://www.linkedin.com/in/samuel-ume-805b37258/">
              <FaLinkedin
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
