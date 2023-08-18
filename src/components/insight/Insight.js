import React,{useState,useEffect} from 'react'

import Navbar2 from '../navbar/Navbar2';
import Navbar from '../navbar/Navbar';
import './insight.css'

const Insight = () => {
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

      {/* <h1>hello</h1> */}
      <div className='inside-error'>
        <div>
          <h1>
            404 not found
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Insight
