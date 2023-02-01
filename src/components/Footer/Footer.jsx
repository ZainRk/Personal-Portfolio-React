import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import { greetings, socialLinks } from "../../data";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Zainkeepscode@gmail.com</span>
        <div className="f-icons">
          <a href={socialLinks.linkedin} target='_blank'><Linkedin color="white" size={"3rem"} /> </a>
          <a href={socialLinks.github} target='_blank'><Gitub color="white" size={"3rem"} /> </a>
          <a href={socialLinks.instagram} target='_blank'><Insta color="white" size={"3rem"} /> </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
