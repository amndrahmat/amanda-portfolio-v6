import React from "react";
import "./hero.css";
import header_picture from "../../assets/header-photo.png";
import Resume from "../../assets/Resume_Amanda_Rahmat_Hidayat.pdf";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import GraphemeSplitter from "grapheme-splitter"; // npm i grapheme-splitter

const splitter = new GraphemeSplitter();

const header = () => {
  return (
    <header>
      <div className="container hero_container">
        <TypeAnimation
          splitter={(str) => splitter.splitGraphemes(str)}
          sequence={[
            "Halo saya",
            1000,
            "Hello I'm",
            1000,
            "你好，我叫",
            1000,
            "안녕 나는",
            1000,
            "Hola soy",
            1000,
            "Bonjour je suis",
            1000,
            "こんにちは私は",
            1000,
          ]}
          // style={{ fontSize: "2em" }}
          wrapper="h3"
          repeat={Infinity}
        />
        <TypeAnimation
          sequence={[
            "Amanda",
            1000,
            "Amanda Rahmat",
            1000,
            "Amanda Rahmat Hidayat",
            1000,
          ]}
          // style={{ fontSize: "4em" }}
          wrapper="h1"
          cursor={false}
          preRenderFirstString={true}
        />

        <TypeAnimation
          sequence={[
            "Fullstack",
            1000,
            "Fullstack Developer",
            1000,
            "Fullstack Developer from",
            1000,
            "Fullstack Developer from Indonesia",
            1000,
          ]}
          wrapper="h3"
          className="text-light"
          cursor={false}
        />

        <div className="button_cta">
          <a href={Resume} download className="btn">
            Download CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Contact Info
          </a>
        </div>
        <div className="hero_social">
          <a href="https://www.instagram.com/amndrahmat/">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/amandarahmath/">
            <BsLinkedin />
          </a>
          <a href="https://github.com/amndrahmat">
            <FaGithub />
          </a>
        </div>
        <div className="amanda">
          <img src={header_picture} alt="Amanda Rahmat Hidayat" />
        </div>
        <a href="#contact" className="scroll_down">
          <TypeAnimation
            sequence={["Scroll", 1000, "Scroll Down", 1000]}
            style={{ fontSize: "1em" }}
            repeat={Infinity}
          />
        </a>
      </div>
    </header>
  );
};

export default header;
