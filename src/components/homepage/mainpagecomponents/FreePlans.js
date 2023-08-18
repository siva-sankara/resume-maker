import React from "react";
import "./FreePlan.css";
import { Link } from "react-router-dom";

const freeplan = [
  {
    p: "1 Resume Limited",
  },
  {
    p: "Standard Format",
  },
  {
    p: "PDF Download",
  },
];

const proplan = [
  {
    p: "Resume Builder",
  },
  {
    p: "Cover Letter Builder",
  },
  {
    p: "Resignation Letter Builder",
  },
  {
    p: "AI Bullet Point Writer",
  },
  {
    p: "AI Bullet Point Editor",
  },
  {
    p: "AI Summary Writer",
  },
  {
    p: "AI Cover Letter Builder",
  },
  {
    p: "Resume Build Score",
  },
  {
    p: "AI Keyword Targeting",
  },
  {
    p: "Real Time Content Analysis",
  },
  {
    p: "Unlimited PDF Downloads",
  },
  {
    p: "Blockchain Verified Resume",
  },
  {
    p: "Unlimited DOCX Downloads",
  },
  {
    p: "AI Bullet Point Editor",
  },
  {
    p: "AI Summary Writer",
  },
  {
    p: "AI Cover Letter Builder",
  },
  {
    p: "Resume Build Score",
  },
  {
    p: "AI Keyword Targeting",
  },
];
const FreePlans = () => {
  return (
    <>    
     <div className="freeplans-container" id="price">
      <div className="sub-free-container">
        <h1>The best investment you'll make for a long, long time.</h1>
        <div className="overallplan">
          <div className="free-plan">
            <h2>Free plan</h2>
            <p>No Card Required</p>
            <hr className="hr-line"></hr>
            <h1 >Free</h1>
            <p>
              <button className="crete-resume-btn btn fee-btn">
                <Link className="rout-link">Create Your Resume</Link>
              </button>
            </p>
            <hr className="hr-line"></hr>
            {freeplan.map((eachobj) => {
              return (
                <p>
                  <span className="tick">✔️</span>
                  {eachobj.p}
                </p>
              );
            })}
          </div>
          <div className=" free-plan pro-plan">
            <h2>Pro plan</h2>
            <p>No Card Required</p>
            <hr className="hr-line"></hr>
            <h1>$29<span>/mo</span></h1>
            <button className="crete-resume-btn btn">
              <Link className="rout-link">Create Your Resume</Link>
            </button>
            <hr className="hr-line"></hr>
            {proplan.map((eachobj) => {
              return (
                <p>
                  <span className="tick">✔️</span>
                  {eachobj.p}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    </>

  );
};

export default FreePlans;
