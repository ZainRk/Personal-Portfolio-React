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
    <div className="portfolio" id="projects">
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
          <a href='https://unique-sprite-5a80fe.netlify.app/'><button className="c-button" >Check it</button></a>
        </SwiperSlide>
        <SwiperSlide className="project">
          <img src={spotify} alt="" />
          <br />
          <br />
          
          <span style={{color:"orange"}}>Spotify</span>
          <br />
          <br />

          <a href='https://www.spotify.com/in-en/'><button className="c-button" >Check it</button></a>
        </SwiperSlide>
         <SwiperSlide className="project">
          <img src={airbnb} alt="" />
          <br />
          <br />
          
          <span style={{color:"orange"}}>Airbnb </span>
          <br />
          <br />
          <a href='https://www.airbnb.co.in/'><button className="c-button" >Check it</button></a>
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
