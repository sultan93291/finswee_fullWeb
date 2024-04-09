import React from "react";
import Banner from "./Banner/Banner";
import Work from "./Work/Work";
import Projects from "./Projects/Projects";
import Features from "./Features/Features";
import About from "./About/About";
import Contact from "./Contact/Contact";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Work />
      <Projects />
      <Features />
      <About />
      <Contact />
    </>
  );
};

export default HomePage;
