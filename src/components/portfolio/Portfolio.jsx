import React from 'react';
import IMG1 from '../../assets/huawei-hms.jpg';
import IMG2 from '../../assets/adobe.png';
import adobeCert from '../../assets/adobe.pdf'
import IMG3 from '../../assets/ict.png';
import IMG4 from '../../assets/guvi.jpg';
import IMG5 from '../../assets/nptel.jpg';
import IMG6 from '../../assets/hyundai.png';
import hyundaiCert from '../../assets/hyundai.pdf'


import './portfolio.css';

const Portfolio = () => {
  const certifications = [
    {
      id: 1,
      title: 'HMS Foundation Course exam',
      img: IMG1,
      company:
        'HUAWEI',
      link: IMG1,
    },
    {
      id: 2,
      title: 'UX foundation Learning',
      img: IMG2,
      company:
        'ADOBE',
      link: adobeCert,
    },
    {
      id: 3,
      title: 'Getting Started with Robotic Process Automation',
      img: IMG3,
      company: 'AUTOMATION ANYWHERE',
      link: IMG3,
    },
    {
      id: 4,
      title: 'Build a Face Recognition using Python',
      img: IMG4,
      company:
        'GUVI',
      link: IMG4,
    },
    {
      id: 5,
      title: 'Introduction To Internet Of Things',
      img: IMG5,
      company:
        'NPTEL',
      link: IMG5,
    },
    {
      id: 6,
      title: 'Intern in the department of Assesmbly Shop #2.',
      img: IMG6,
      company:
        'HYUNDAI MOTORS INDIA LTD - Sriperumbadur',
      link: hyundaiCert,
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {certifications.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} style={{"height" : "300px"}} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>by {pro.company}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-secondary"
                rel="noreferrer"
                download
              >
                Download
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
