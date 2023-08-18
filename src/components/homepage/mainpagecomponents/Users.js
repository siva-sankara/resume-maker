import React , { useState, useEffect } from "react";
import './Users.css'
import { Link } from "react-router-dom";
const Users = () => {
    const [userNumber, setUserNumber] = useState(64000);
    useEffect(()=>{
        const interval = setInterval(() => {
            setUserNumber((prev)=>(prev <64654 ? prev+1 :64000))
        }, 1);
        setTimeout(()=>{
            clearInterval(interval);
        },5000)
        return ()=>{
            clearInterval(interval);
        }
    },[])
  return (
    <div className=" user-container">

        <div className="user-main">
          <h1>
            Trusted by<b>+{userNumber}</b>users.
          </h1>
          <h1 className="nabar-left">
            resumA<span className="dot-red">.</span>I<span>.</span>
          </h1>
          <button className="user-btn btn"><Link className="rout-link">Create Your Resume</Link></button>

        </div>

    </div>
  );
};

export default Users;
