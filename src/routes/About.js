import React from "react";
import AboutContent from "../components/AboutContent";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/Navbar";

function About() {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="About." text="I'm a friendly fullstack developer" />
      <AboutContent />
      <Footer />
    </div>
  );
}

export default About;
