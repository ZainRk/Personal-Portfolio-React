import React from "react";
import './FloatingDiv.css'

const FloatinDiv = ({img, text1, text2}) => {
    console.log(img)
  return (
    <div className="floatingDiv">
      <img src={img} alt="" />
      <span>
        {text1}
        <br/>
        {text2}
      </span>
    </div>
  );
};

export default FloatinDiv;
