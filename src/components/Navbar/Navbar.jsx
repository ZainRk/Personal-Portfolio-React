import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
const navbar = () => {
  return (
    <div className="n-wrapper">

        {/* left */}
      <div className="n-left">
        <div className="n-name">Andrew</div>
        <Toggle/>
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>Home</li>
            <li>Serivces</li>
            <li>About us</li>
          </ul>
        </div>
        <button className="button n-button">
            Contact us
        </button>
      </div>
    </div>
  );
};

export default navbar;
