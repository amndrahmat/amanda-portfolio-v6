import React from "react";
import Hero from "./components/hero/Hero";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Certification from "./components/certification/certifications";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Hero />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Certification />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
