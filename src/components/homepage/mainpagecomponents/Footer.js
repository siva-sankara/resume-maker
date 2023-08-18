import React, { useState } from "react";
import "./Fotter.css";
import {AiOutlineSearch} from 'react-icons/ai'
import footerlogo from "../images/footerlogo.webp";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
const Footer = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="footer-container">
      <div className="footer--main">
        <div className="footer-left">
          <h1 className="nabar-left">
            resumA<span className="dot-red">.</span>I<span>.</span>
          </h1>
          <p className="f-p">The Best AI Resume Writing Assistant</p>
        </div>
        <div className="footer-right">
          <ul>
            <li>
              <button>
                <a href="#price">Pricing</a>
              </button>
            </li>
            <li>
              <button>Templates</button>
            </li>
            <li>
              {/* <button>Feedback</button> */}
              <div>
                <li  onClick={toggle}>
                  Feedback
                </li>
                <Modal isOpen={modal} toggle={toggle}>
                  <ModalHeader toggle={toggle}><AiOutlineSearch /></ModalHeader>
                  <ModalBody>
                    
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                      Do Something
                    </Button>{" "}
                    <Button color="secondary" onClick={toggle}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </Modal>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <hr className="hr-line"></hr>
      <div className="footer--main last-logo">
        <img className="footer-img" alt="" src={footerlogo} />
        <span>hello@rezi.io</span>
      </div>
    </div>
  );
};

export default Footer;
