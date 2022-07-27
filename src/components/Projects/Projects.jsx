import React, { useContext } from "react";
import "./Projects.css";
// import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import headphoneZone from "../../img/headphoneZone.png";
import spotify from "../../img/spotify.png";
// import airbnb from "../../img/airbnb.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="project" id="projects">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>project</span>

      {/* slider */}
      

         {/* <SwiperSlide className="project">
          <img src={airbnb} alt="" />
          <br />
          <br />
          
          <span style={{color:"orange"}}>Airbnb </span>
          <br />
          <br />
          <a href='https://www.airbnb.co.in/'><button className="c-button" >Check it</button></a>
        </SwiperSlide> */}

      <div className="project-slider">
        <div className="project-items">
        <img src={headphoneZone} alt="" />
          <br />
          <br />
          
          <span style={{color:"orange"}}>Headphone Zone</span>
          <br />
          <br />
          <div className="features">
            <span style={{color: darkMode?'white': ''}}> Summary-</span><br />
            <span style={{color:"gray", fontSize:".8rem"}}>  
              A young company of music lovers, for music lovers. Let’s help you find your dream gear. 
              Curated products. 250,000+ happy customers. 70+ brands. Express shipping. Easy returns. 
              We're Customer Obsessed. We've Completed 10 Years. Begin Audiophile Journey.
            </span>
            <br />
          </div>
          <div className="features">
            <span style={{color: darkMode?'white': ''}}> Features -</span><br />
            <span style={{color:"gray", fontSize:".8rem"}}> ●	Social Sign-in/Sign-up</span>
            <span style={{color:"gray", fontSize:".8rem"}}> ●	Add to Cart Functionality</span>
            <span style={{color:"gray", fontSize:".8rem"}}> ●	Increase and Decrease Functionality for products</span><br /><br />
          </div>
          <div className="tech-stack">
            <span style={{color: darkMode?'white': ''}}> Tech Stack Used -</span><br />
            <span style={{color:"gray", fontSize:".8rem"}}> 	HTML</span> |
            <span style={{color:"gray", fontSize:".8rem"}}> 	CSS</span> |
            <span style={{color:"gray", fontSize:".8rem"}}> 	JavaScript</span><br /><br />
          </div>

          <div className="buttons">
            <a href='https://unique-sprite-5a80fe.netlify.app/' target="blank"><button className="c-button" >Check Website</button></a>
            <a href='https://github.com/rgoyal0001/Headphone-Zone-Clone' target="blank"><button className="c-button" >Check Code</button></a>
          </div>
          
        </div>
        <br />
        <div className="project-items">
        <img src={spotify} alt="" />
          <br />
          <br />
          
          <span style={{color:"orange"}}>Spotify</span>
          <br />
          <br />
          <div className="features">
            <span style={{color: darkMode?'white': ''}}> Summary-</span><br />
            <span style={{color:"gray", fontSize:".8rem"}}>  
              Spotify is a proprietary Swedish audio streaming and media services provider . 
              It is one of the largest music streaming service providers, with over 422 million monthly active users. 
              This is team project with 5 member team. Here we have added home page with web player and searching page with all functionalities.
            </span>
            <br />
          </div>
          <div className="features">
            <span style={{color: darkMode?'white': ''}}> Features -</span><br />
            <span style={{color:"gray", fontSize:".8rem"}}> ●	Social Sign-in/Sign-up</span>
            <span style={{color:"gray", fontSize:".8rem"}}> ●	Add and Delete Playlist Functionality</span>
            <span style={{color:"gray", fontSize:".8rem"}}> ●	Search Functionality</span>       
            <span style={{color:"gray", fontSize:".8rem"}}> ●	Listening Music </span><br />
          </div>
          <div className="tech-stack">
            <span style={{color: darkMode?'white': ''}}> Tech Stack Used -</span><br />
            <span style={{color:"gray", fontSize:".8rem"}}> 	HTML</span> |
            <span style={{color:"gray", fontSize:".8rem"}}> 	CSS</span> |
            <span style={{color:"gray", fontSize:".8rem"}}> 	JavaScript</span> |
            <span style={{color:"gray", fontSize:".8rem"}}> 	JSON</span><br /><br />
          </div>
          <div className="buttons">
            <a href='https://rgoyal0001.github.io/Spotify_Clone/' target="blank"><button className="c-button" >Check Website</button></a>
            <a href='https://github.com/rgoyal0001/Spotify_Clone' target="blank"><button className="c-button" >Check Code</button></a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
