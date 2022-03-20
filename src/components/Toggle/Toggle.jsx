import React from 'react'
import './Toggle.css'
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";

const Toggle = () => {
  return (
    <div className="toggle">
        <Moon />
        <Sun/>
        <div className="t-button"></div>
    </div>
    )
}

export default Toggle