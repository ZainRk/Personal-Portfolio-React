import React from "react";
import "./Card.css";
import { Link } from 'react-scroll'

const Card = ({emoji, course, college, duration, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" style={{width:"55px", height:"20%", margin:"20px", borderRadius:"50%"}}/>
      <span>{course}</span>
      <span>{college}</span>
      <span>{duration}</span>
    </div>
  );
};

export default Card;
