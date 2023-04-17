import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Defense Guard for Women using IOT",
      role: "Full-Stack Web Developer. JavaScript | Rails | React | Redux. Improving open-source projects, one commit at a time.",
      test: "Defense Guard for Women using IoT (Internet of Things) refers to the use of smart devices connected to the internet to enhance the safety and security of women. The system is designed to detect, analyze, and respond to threats or attacks on women by alerting authorities and triggering emergency responses"
    }, 
    {
      id: 2,
      name: "Business Convenience Segmentation using Clustering and Data",
      role: "Full-stack developer | Technical Support Engineer at Microverse",
      test: "Business convenience segmentation is a marketing strategy that involves dividing customers or potential customers into groups based on their needs and behaviors related to convenience. This approach allows businesses to better understand the preferences of their customers and tailor their marketing efforts and product offerings accordingly.",
    },
    {
      id: 3,
      name: "Bank Management Using Python",
      role: "Full Stack Developer| Ruby on Rails | PostgreSQL | JavaScript | React | Redux | Html&Css | Python.",
      test: "Bank management involves the day-to-day operations of a bank, including managing customer accounts, processing transactions, and handling financial operations. Python, being a popular programming language, has ben used to develop a bank management system.",
    },
    {
      id: 4,
      name: "Cultural Site",
      role: "Full-Stack Web Developer. JavaScript | Rails | React | Redux.",
      test: "Mobile Application developed using Java and Android Studio",
    },
    {
      id: 5,
      name: "Dance Club",
      role: "Software Developer",
      test: "Android Mobile Application built using Huawei's API's",
    },
  ];
  return (
    <section id="projects">
      <h2>Some Of My Projects</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {projects.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
            <div className="client__avatar">
              <a href={test.link}>
                <BsLinkedin />
              </a>
            </div>
            <h5 className="client__name">{test.name}</h5>
            <small className="client__review">{test.test}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
