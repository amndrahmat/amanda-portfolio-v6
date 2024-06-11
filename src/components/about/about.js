import React from "react";
import "./about.css";
import profile_picture from "../../assets/profile.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  return (
    <section id="about">
      <TypeAnimation
        sequence={["Get", 2000, "Get To Know", 2000, "Get To Know More", 2000]}
        wrapper="h5"
        cursor={false}
        repeat={Infinity}
      />

      <TypeAnimation
        sequence={["About", 2000, "About Me", 2000]}
        wrapper="h2"
        cursor={false}
        repeat={Infinity}
      />
      <div className="container about_me_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={profile_picture} alt="About Amanda" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Education</h5>
              <small>S.Tr.T Telecommunication Engineering</small>
            </article>
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>
                3+ years <br /> Developer Experience
              </small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>
                3 project working on Job &
                <br />
                10+ personal project
              </small>
            </article>
          </div>
          <p>
            I am a Mid-Level Full-stack Developer who works on both frontend and
            backend development processes. With 3+ years of experience creating
            and developing websites. I have experience working on three large
            projects for Astra International company.
          </p>
          <p>
            I made the decision to change careers in the IT field because
            software engineer or programmer is a career that many people have
            dreamed of and I find happiness in the things I do in this role,
            particularly in developing websites.
          </p>
          <p>
            Throughout my career, I have attended various programmer training
            courses that can build my skill set so that I have received various
            certifications, one of which is Frontend Developer Expert at
            Dicoding Academy.
          </p>
          <p>
            Beyond my professional pursuits, I am deeply committed to improving
            my skill set. Currently, I am working freelance as a Frontend
            developer. I am dedicated to gaining a deeper understanding of
            backend and cloud computing.
          </p>
          <p></p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
