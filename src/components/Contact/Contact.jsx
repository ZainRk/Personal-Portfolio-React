import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Email from "../../img/email.png";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2mu5xtl",
        "template_m5udu2c",
        form.current,
        "VLwg1ltOWvnCYAiK_"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact me</span>
          <div style={{marginTop:"2rem"}}>
            <div style={{display:"flex"}}>
              <span style={{color:"grey",marginLeft:"2.5rem", fontSize:"1.5rem"}}> 7357171681 </span>
            </div>
            <div className="icons">
              <a href="https://github.com/rgoyal0001" target="blank"><img src={Github} alt=""  target="blank"/></a>
              <a href="https://www.linkedin.com/in/raman-goyal-97b959150/" target="blank"><img src={LinkedIn} alt="" /></a>
              <a href="mailto:goyalraman755@gmail.com" title="goyalraman755@gmail.com" target="blank"><img src={Email} alt="" /></a>
          </div>
          </div>
          
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Submit" className="button"/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
