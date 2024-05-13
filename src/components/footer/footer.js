/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaInstagram } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        <img src={logo} alt="logo" />
        Amanda Rahmat Hidayat
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#Certifications">Certifications</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
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
      <div className="footer_copyright">
        <small>&copy; Amanda Rahmat Hidayat. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
