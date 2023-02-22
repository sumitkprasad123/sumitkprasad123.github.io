import React from "react";
import "./Footer.css";
import {ImGithub,ImLinkedin,ImMail3 } from 'react-icons/im';
// import wavePng from "../Images/Personal/wavePng.png";
const Footer = () => {
  return (
    <div className="FooterSection">
      <div className="footerCredit">
        <p >
          Handcrafted with <span className="high">❤ </span>& imagination
          by <span className="high">Sumit Kumar</span>
        </p>
      </div>
      <div className="IconContainer">
        <a rel="noreferrer" target="_blank" href="https://github.com/sumitkprasad123">
          <ImGithub className="FooterIcons" />
        </a>
        <a rel="noreferrer" target="_blank" href="linkedin.com/in/sumit-kumar123">
          <ImLinkedin className="FooterIcons" />
        </a>
        <a rel="noreferrer" target="_blank" href="mailto:sumitkprasad123@outlook.com">
          <ImMail3 className="FooterIcons" />
        </a>
      </div>
      <p className="LinePTag"></p>
    </div>
  );
};

export default Footer;