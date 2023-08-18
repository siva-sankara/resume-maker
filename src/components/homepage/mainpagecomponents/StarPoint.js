import React from "react";
import "./StarPoint.css";
import img1 from "../images/multipage--bg.jpg";
import { Link } from "react-router-dom";
const StarPoint = ({ pointsList }) => {
  return (
    <div className="starpoints-container ">
      <div className="main-row1 pointer-cont">
        {pointsList.map((eachobj) => {
          return (
            <div className="point">
              <img className="point-img" alt="points" src={eachobj.url} />
              <h1 className="point-h1">{eachobj.head}</h1>
              <p className="point-desc">{eachobj.para1}</p>
            </div>
          );
        })}
      </div>
      <div className="multi-pages">
        <div className=" sub--multipages">
          <div className="mutlipage-left">
            <div>
              <h1>Over 340</h1>
              <h1> Real-Life Resume </h1>
              <h1>Templates</h1>
              <p className="point-desc">
                Choose from free and premium templates and easily customize them
                without any issues.
              </p>
              <button className="btn">
                <Link className="rout-link">Create Your Resume</Link>
              </button>
            </div>
          </div>
          <div className="mutlipage-right">
            <img className="multi-img" alt="" src={img1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarPoint;
