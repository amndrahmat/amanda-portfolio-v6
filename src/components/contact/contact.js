import React, { useState } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from "emailjs-com";
import { TypeAnimation } from "react-type-animation";

const Contact = () => {
  const [emailIsSent, setEmailIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_jxtv4xm",
        "template_gnxwcoq",
        e.target,
        "8y4tCAA_-K1JlPEk8"
      )
      .then(() => {
        setEmailIsSent(true);
      });
  };

  return (
    <section id="contact">
      <TypeAnimation
          sequence={[
            "Get",
            2000,
            "Get In",
            2000,
            "Get In Touch",
            2000,
          ]}
          wrapper="h5"
          cursor={false}
          repeat={Infinity}
        />

        <TypeAnimation
          sequence={[
            "Contact",
            2000,
            "Contact Me",
            2000,
          ]}
          wrapper="h2"
          cursor={false}
          repeat={Infinity}
        />
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>amandarht@gmail.com</h5>
            <a href="mailto:amandarht@gmail.com">Send a message</a>
          </article>
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>LinkedIn</h4>
            <h5>Amanda Rahmat Hidayat</h5>
            <a href="https://www.linkedin.com/in/amandarahmath/">
              Send a message
            </a>
          </article>
        </div>
        {emailIsSent ? (
          <h2 id="contact_sent-message">
            Your Message was successfully sent!
          </h2>
        ) : (
          <form onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
