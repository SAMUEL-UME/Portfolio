import React from "react";
// import About from "./routes/About";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import { Route, Routes } from "react-router-dom";
import Project from "./routes/Project";
import About from "./routes/About";
import NotFound from "./routes/NotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/project" element={<Project />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
