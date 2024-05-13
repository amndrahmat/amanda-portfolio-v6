import React from "react";
import "./portfolio.css";
import Image1 from "../../assets/ORION.png";
import Image2 from "../../assets/BELIBARENG.png";
import Image3 from "../../assets/SEVA.png";
import Image4 from "../../assets/iseriex.png";
import Image5 from "../../assets/aman-restaurant.png";
import Image6 from "../../assets/bali-web.png";
import { TypeAnimation } from "react-type-animation";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Orion",
    website: "https://orion.astra.co.id/",
    description:"A service platform that provides an Application Programming Interface (API) such as the WhatsApp API with various capabilities to help companies connect with customers. The features used are broadcast messages, send messages and many more."
  },
  {
    id: 2,
    image: Image2,
    title: "Belibareng",
    website: "https://belibareng.co.id/",
    description: " Procurement Platform presented by Astra to facilitate procurement in the Astra Group so that all Astra Group without exception can enjoy competitive prices from existing volume relationships throughout the Astra Group (Meaning BeliBareng).",
  },
  {
    id: 3,
    image: Image3,
    title: "Seva",
    website: "https://www.seva.id/",
    description: "Provides new car financing services supported by financing companies and official dealers from the Astra Group",
  },
  {
    id: 4,
    image: Image4,
    title: "ISerieX",
    website: "https://www.seva.id/",
    description: "Providing movie and series streaming services, you can use movies and series that are viral, newest and recommended to watch.",
  },
  {
    id: 5,
    image: Image5,
    title: "Aman Restaurant",
    website: "https://aman-restaurant.netlify.app/",
    description: "Personal Projects for customers to use our platform to search for and discover restaurants, read customer-generated reviews and view and upload photos, order food delivery, reserve a table, and make payments when dining at a restaurant.",
  },
  {
    id: 6,
    image: Image6,
    title: "Bali",
    website: "https://bali-by-amanda.netlify.app/",
    description: "A personal project fully dedicated to making your BALI travel planning easier. Reliable and useful exploring tips about Bali so you can enjoy the best experience.",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <TypeAnimation
          sequence={[
            "Projects",
            2000,
            "Projects that",
            2000,
            "Projects that have",
            2000,
            "Projects that have been",
            2000,
            "Projects that have been carried out",
            2000,
          ]}
          wrapper="h5"
          cursor={false}
          repeat={Infinity}
        />

        <TypeAnimation
          sequence={[
            "My",
            2000,
            "My Portfolio",
            2000,
          ]}
          wrapper="h2"
          cursor={false}
          repeat={Infinity}
        />
      <div className="container portfolio_container">
        {data.map(({ id, image, title, website, description }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-desc">
                <small>{description}</small>
              </div>
              <div className="portfolio_item-cta">
                <a href={website} className="btn">
                  Visit Website
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
