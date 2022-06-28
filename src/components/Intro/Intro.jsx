import React, { useContext } from "react";
import "./Intro.css";
// import Vector1 from "../../img/Vector1.png";
// import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
// import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
// import code from "../../img/code.png";
import Resume from '../Skills/resume.pdf'
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Email from "../../img/email.png";
// import EmailLogo from "../../img/emailLogo.png";


import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Raman Goyal</span>
          <span>
          I am a Full Stack Developer, passionate about building digital products
           that improve everyday experience for people.
          </span>
        </div>
        <div className="intro-button">
          <div>        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link></div>
        <div>        </div>



        </div>

        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/raman186"><img src={Github} alt=""  target="blank"/></a>
          <a href="https://www.linkedin.com/in/raman-goyal-97b959150/" target="blank"><img src={LinkedIn} alt="" /></a>
          <a href="https://www.linkedin.com/in/raman-goyal-97b959150/" target="blank"></a><img src={Instagram} alt="" />
          <a href="mailto:goyalraman755@gmail.com" title="goyalraman755@gmail.com" target="blank"></a><img src={Email} alt="" />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src=""alt="" />
        <img src="" alt="" />
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src=""
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Web" text2="Designer" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
