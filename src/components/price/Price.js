import React,{useState,useEffect} from "react";
import FreePlans from '../homepage/mainpagecomponents/FreePlans'
import Navbar from '../navbar/Navbar'
import Users from '../homepage/mainpagecomponents/Users'
import Footer from '../homepage/mainpagecomponents/Footer'
import Navbar2 from "../navbar/Navbar2";


const Price = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
        return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div>
        {
        windowWidth <= 768 ? <Navbar2 /> : <Navbar />
      }
     
      <FreePlans />
      <Users />
    <Footer />
    </div>
  )
}

export default Price
