import React,{ useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const navlist = [
  {
    name: "PriceAI ",
    path:'/price'
  },
  {
    name: "Cover Letter ",
    path:'/coverletter'
  },
  {
    name: "Insights",
    path:'/insight'
  },
];
const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const handleScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    setIsFixed(scrollY > 0);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className={`navbar ${isFixed ? 'fixed' : ''}`}>
        <Link className="rout-link" to="/">
        <h1 className="nabar-left">
          resumA<span className="dot-red">.</span>I<span>.</span>
        </h1>
        </Link>
      <div className="nav-right">
        <div className="nav--items">
          {navlist.map((eachobj) => {
            return (
              <ul>
                <li><Link className="rout-link" to={eachobj.path}>{eachobj.name}</Link></li>
              </ul>
            );
          })}
        </div>
        <div className="crete-resume">
          <button className="crete-resume-btn btn"><Link className="rout-link" >Create Your Resume</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
