import React from "react";
import './Custmer.css'
const Custmer = ({customerList}) => {
   
  return (
    <div className=" customer-container">
      <div className="main-row1">
        <div>
          <h1 className="point-h1">Customer testimonials</h1>
          <p  className="customer-mes">105 real life stories from trusted users</p>
        </div>
        <div className="custmoers-list">
          {customerList.map((eachobj) => {
            return (
              <div className="each-customer">
                <p>{eachobj.stars}</p>
                <p className="customer-mes">{eachobj.para}</p>
                <span className="customer-name">{eachobj.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Custmer ;
