import React from "react";
import "./DescMainOne.css";
import vedio1 from '../images/mainpage1-vedio.mp4'
import { Link } from "react-router-dom";
const DescMainOne = ({head,headSub,para1,para2}) => {
  return (
    <div className="main-container">
      <div className="main-row1">
        <div className="write">
          <h1 className="desc-h1">
            {head}
            <span> {headSub}</span>
          </h1>
          <p className="desc-p">
            {para1}
            </p><p> {para2}
          </p>
        </div>
        <div className="write-btn">
            <button className="btn "><Link  className="rout-link">Create Resume</Link></button>
            <button className="btn"><Link  className="rout-link">View all Templates</Link></button>
        </div>
        <div className="video-container">
            <video className="video" autoPlay loop controls>
                <source src={vedio1} type="video/mp4"/>
            </video>
        </div>
      </div>
    </div>
  );
};

export default DescMainOne;
