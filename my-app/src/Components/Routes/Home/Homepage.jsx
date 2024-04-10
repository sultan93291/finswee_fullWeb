import React from "react";
import Banner from "./Banner/Banner";
import Work from "./Work/Work";
import Projects from "./Projects/Projects";
import Features from "./Features/Features";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Form from "./Form/Form";
import Blog from "./Blog/Blog";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Work />
      <Projects />
      <Features />
      <About />
      <Contact />
      <Form />
      <Blog />
    </>
  );
};

export default HomePage;
