import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BiCodeBlock } from 'react-icons/bi'
import './footer.css';

const Footer = () => {
  
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };
  
  return (
    <footer>
      <a href="#home" className="footer__logo">Yuvashree R</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/yuvashree-ramalingam
-5a4554200/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="http://www.skillrack.com/profile/308903/f132e9b9e9
08b24799356e56b7bc0764bef00b78" target="_blank" rel="noreferrer" ><BiCodeBlock /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; ET {getYear()}. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
