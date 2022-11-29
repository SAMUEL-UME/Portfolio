import React from "react";
import Form from "../components/Form";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Contact." text="Let's have a chat" />
      <Form />
      <Footer />
    </div>
  );
}

export default Contact;
