import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  Nav,
  NavItem,
} from 'reactstrap';
import {GiHamburgerMenu} from 'react-icons/gi'
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

function Navbar2(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='navbar2'>
      <Navbar className='navbar2-sub' {...args} onClick={toggle}>
      <Link className="rout-link" to="/">
        <h1 className="nabar-left">
          resumA<span className="dot-red">.</span>I<span>.</span>
        </h1>
        </Link>
        <GiHamburgerMenu />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            {
            navlist.map((eachobj)=>{
               return(
                <NavItem>
                <Link  className="rout-link" to={eachobj.path}>{eachobj.name}</Link>
            </NavItem>
               )
            })}
            
          </Nav>
        
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navbar2;