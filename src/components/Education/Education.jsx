import React, { useContext } from "react";
import "./Education.css";
import Card from "../Card/Card";
import MasaiSchool from "../../img/MasaiSchool.png";
import DN from "../../img/DN.jpg";
import NBS from "../../img/NBS.jpg";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Education = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="education">
      {/* left side */}
      <div className="awesom">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Education Details</span>


        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={MasaiSchool}
            course={"Full Stack Web Development"}
            college={"Masai School, Bengaluru"}
            url={"https://www.masaischool.com/"}
            duration={"2021-22"}


          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={DN}
            course={"B.Sc. Computer Science"}
            college={"D.N. College, Hisar (Haryana)"}
            url={"https://www.dnc.ac.in/"}
            duration={"2016-19"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={NBS}
            course={"12th Non-Medical"}
            college={"Nav Bharat School, Siwani (Haryana)"}
            url={"https://goo.gl/maps/c6NwVYKqDY52RAbWA"}
            duration={"2015-16"}
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Education;