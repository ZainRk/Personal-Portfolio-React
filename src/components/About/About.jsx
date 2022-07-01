import React, { useContext } from "react";
import "./About.css";
// import Card from "../Card/Card";
import Raman from '../../img/raman.jpeg'
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
// import Resume from './resume.pdf';

const About = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="about" id="about">
      {/* left side */}
      <div className="wesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>About</span>
        <span></span>
        <span>A passionate Full Stack Software Developer 🚀 having an knowledge of building Web and Mobile applications
             with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks. 
             Observant and detail-oriented aspiring full-stack developer with a specialization in MERN stack. 
             Self-motivated and curious, with a keen interest in building usercentric products.</span>
        <br />
        <span>What I Do</span>
        <span>CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</span>
        <span>
            ⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications
            <br />
            ⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks
            <br />
            ⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean
        </span>


        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* photo */}
        <motion.div
          initial={{ left: "4rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <img src={Raman} alt="" className="photo"
          style={{width:"20rem",borderRadius:"50%", top:"20px"}}/>
        </motion.div>

        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default About;