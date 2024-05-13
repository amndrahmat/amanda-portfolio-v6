import React from "react";
import "../index.css";
import Hero from "../components/hero/hero";
import Nav from "../components/nav/nav";
import About from "../components/about/about";
import Experience from "../components/experience/experience";
import Portfolio from "../components/portfolio/portfolio";
import Certification from "../components/certification/certifications";
import Contact from "../components/contact/contact";

function Home() {
  return (
    <>
      <Hero />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Certification />
      <Contact />
    </>
  );
}

export default Home;
