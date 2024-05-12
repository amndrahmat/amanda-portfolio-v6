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
          sequence={[
            "Get",
            2000,
            "Get To Know",
            2000,
            "Get To Know More",
            2000,
          ]}
          wrapper="h5"
          cursor={false}
          repeat={Infinity}
        />

        <TypeAnimation
          sequence={[
            "About",
            2000,
            "About Me",
            2000,
          ]}
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
            I'm a fullstack developer currently working at Astra International
            Company, a large scale Product Information Management system using
            React, NodeJS, TypeScript, HTML, LESS, Git, Jira & Material UI. My
            daily responsibilities center around creating and maintaining user
            interfaces that comunicating and exchanging data with API's as well
            as creating and designing an effective user experience.
          </p>
          <p>
            Passionate full-stack developer with 3 years of experience building
            web applications. Success in managing development projects using
            scrum, agile, and lean processes. Skilled at conceptualizing,
            designing, developing, and deploying software containing logical and
            mathematical solutions to business problems. Dedicated to driving
            innovation with the ability to follow industry and technological
            trends and facilitate early adoption of innovations.
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
