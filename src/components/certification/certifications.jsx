import React from "react";
import "./certifications.css";
import dicoding from "../../assets/dicoding-logo.jpeg";
import skillAcademy from "../../assets/skill-academy-logo.png";
import codepolitan from "../../assets/codepolitan.jpg";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { TypeAnimation } from "react-type-animation";

const data = [
  {
    logo: dicoding,
    source: "by Dicoding Academy",
    title: "Menjadi Front-End Web Developer Expert",
    description:
      "This class is aimed at a Front-End Web Developer who wants to develop a website that is optimal, easy to use, and sophisticated when accessed by all devices, especially smartphones. At the end of the class, students can create front-end web applications that are responsive, have good accessibility, are easy to maintain, are native, can be tested, and have good performance.",
  },
  {
    logo: dicoding,
    source: "by Dicoding Academy",
    title: "Membangun Progressive Web Apps",
    description:
      "This class thoroughly discusses the components needed to implement Progressive Web Apps such as App Shell, Service Worker, Web Push, and Web Apps Manifest. Compiled and carried out by Codepolitan as our partner in developing the academy, the material presented is comprehensive and comprehensive.",
  },
  {
    logo: dicoding,
    source: "by Dicoding Academy",
    title: "Architecting on AWS (Membangun Arsitektur Cloud di AWS)",
    description:
      "This class is intended for individuals who want to move to a higher level in cloud computing, such as becoming an AWS Solutions Architect by referring to AWS's international competency standards. By the end of the class, students will be able to build cloud architectures on AWS by applying AWS best practices.",
  },
  {
    logo: dicoding,
    source: "by Dicoding Academy",
    title: "Belajar Fundamental Front-End Web Development",
    description:
      "The class is aimed at a front-end web developer who wants to develop a website with simple, reusable and optimal techniques. At the end of the class, students can create front-end web applications with ES6 standard JavaScript code, implement Web Components, module bundlers, and display dynamic data from Web APIs using asynchronous request techniques.",
  },
  {
    logo: dicoding,
    source: "by Dicoding Academy",
    title: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
    description:
      "The class is aimed at beginners who want to start their careers in the field of cloud computing by referring to AWS's international competency standards. At the end of the class, students can understand the AWS Cloud with all its types of services, global infrastructure, and prices.",
  },
  {
    logo: codepolitan,
    source: "by Codepolitan",
    title: "Belajar MongoDB untuk Pemula",
    description: "Understand the basics of learning MongoDB",
  },
  {
    logo: skillAcademy,
    source: "by Skill Academy by RuangGuru",
    title: "Penggunaan Agile dan Scrum untuk Development Project",
    description:
      "This class explains in detail how to work collaboratively in project management by prioritizing the 4 Values and 12 Principles of Agile, and an explanation of the stages with Scrum Events, to produce a capable project.",
  },
  {
    logo: dicoding,
    source: "by Dicoding Academy",
    title: "Belajar Dasar Visualisasi Data",
    description:
      "The class is aimed at beginners who want to start their careers in the field of data processing by referring to industry competency standards. At the end of the class, students can create an effective data visualization using Google Sheets according to industry best practice techniques, thereby increasing their value in a career as a Software Developer.",
  },
  {
    logo: dicoding,
    source: "by Dicoding Academy",
    title: "Belajar Membuat Aplikasi Back-End untuk Pemula",
    description:
      "This class is intended for individuals who want to step up to become a Back-End Developer with AWS's international competency standards. At the end of the class, students can independently create simple RESTful APIs to support the functionality of an application.",
  },
];

const Certifications = () => {
  return (
    <section id="certification">
      <TypeAnimation
          sequence={[
            "Certification",
            2000,
            "Certification that",
            2000,
            "Certification that I have",
            2000,
            "Certification that I have taken",
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
            "My Certifications",
            2000,
          ]}
          wrapper="h2"
          cursor={false}
          repeat={Infinity}
        />
      <Swiper
        className="container certification_containerr"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ logo, source, title, description }, index) => {
          return (
            <SwiperSlide key={index} className="certification">
              <div className="cert_logo">
                <img src={logo} alt="logo" />
              </div>
              <h3 className="cert_title">{title}</h3>
              <small className="cert_description">{description}</small>
              <small className="cert_source">{source}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Certifications;
