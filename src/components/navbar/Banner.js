import React, { useState } from "react";
import "./Navbar.css";
import { RxCross2 } from "react-icons/rx";
const Banner = () => {
  const [close, setclose] = useState(true);
  const handleclose = () => {
    setclose(!close);
  };
  return (
    <div>
      {close && (
        <div className="banner">
          <h4 className="banner-h1">
            Save 20% off all plans with <span>welcome20</span>{" "}
          </h4>
          <button className="cross" onClick={() => handleclose(1)}>
            <RxCross2 className="icon-close"/>
          </button>
        </div>
      )}
    </div>
  );
};

export default Banner;
