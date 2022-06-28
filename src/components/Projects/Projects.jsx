import React, { useContext } from "react";
import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import { Link } from "react-scroll";
import headphoneZone from "../../img/headphoneZone.png";
import spotify from "../../img/spotify.png";
import airbnb from "../../img/airbnb.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide className="project">
          <img src={headphoneZone} alt="" />
          <br />
          <br />
          
          <span style={{color:"orange"}}>Headphone Zone</span>
          <br />
          <br />
          <button className="c-button" ><Link style={{fontSize:'15px'}} spy={true} smooth={true} to="/home">Check It</Link></button>
        </SwiperSlide>
        <SwiperSlide className="project">
          <img src={spotify} alt="" />
          <br />
          <br />
          
          <span style={{color:"orange"}}>Spotify</span>
          <br />
          <br />

          <button className="c-button" ><Link style={{fontSize:'15px'}} spy={true} smooth={true} to="skills">Check It</Link></button>
        </SwiperSlide>
         <SwiperSlide className="project">
          <img src={airbnb} alt="" />
          <br />
          <br />
          
          <span style={{color:"orange"}}>Airbnb </span>
          <br />
          <br />
          <button className="c-button" ><Link style={{fontSize:'15px'}} spy={true} smooth={true} to="skills">Check It</Link></button>
        </SwiperSlide>
        {/*
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Portfolio;
