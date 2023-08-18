import React,{useState,useEffect} from "react";
import Banner from "../navbar/Banner";
import Navbar from "../navbar/Navbar";
import DescMainOne from "./mainpagecomponents/DescMainOne";
import StarPoint from "./mainpagecomponents/StarPoint";
import Custmer from "./mainpagecomponents/Custmer";
import Users from "./mainpagecomponents/Users";
import Footer from "./mainpagecomponents/Footer";
import FreePlans from "./mainpagecomponents/FreePlans";
import point1 from "./images/point1.svg"
import point2 from "./images/point2.svg";
import point3 from "./images/point2.svg";
import point4 from "./images/point4.svg";
import Waste from "../navbar/Navbar2";
const HomePage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const pointsList = [
    {
      url: point1,
      head: "Start with a sample, or copy and paste",
      para1:
        "Getting started with your resume is designed to be fast, simple, andeffective. You'll have the option to select from over 300 exampleresumes from various fields, or you can start by simply copy andpasting your existing resume.",
      para2: "",
    },
    {
      url: point2,
      head: "Instantly write and edit content with AI",
      para1:
        "Our AI Writer is the first of it's kind - now you're able to instantly generate and edit content with a click of a button. The AIWriter understands best practices to help you create more effectivebullet points, summaries, and even entire cover letters.",
      para2: "",
    },
    {
      url: point3,
      head: "Optimize content with keywords",
      para1:
        " Now that your resume is created - you can tailor the content with specific words from a targeted job description. Additionally, if there are any formatting adjustments to make,you'll have full control over your document.",
      para2: "",
    },
    {
      url: point4,
      head: "Finish by generating a tailored cover letter",
      para1:
        "Now that your resume is well created and tailored to a jobdescription, you can instantly generate a matching cover letter injust 1 click.Creating a perfect cover letter has never been easier.",
      para2: "",
    },
  ];
  const customerList = [
    {
      stars: "⭐⭐⭐⭐⭐",
      para: "Great tool. I've made the mistake of sending the wrong coverletter to the wrong company before. This will eliminate that from happening. It also gave me a better way to format my resume!",
      name: "Deji A.",
    },
    {
      stars: "⭐⭐⭐⭐⭐",
      para:"Brilliant concepts for the folks who are lazy to put efforts for creating CV. Basically, no duplication of efforts",
      name: "Abhishek J.",
    },
    {
      stars: "⭐⭐⭐⭐⭐",
      para: "Been using Resumai for a while now and it helped to save time writing my cv and not just give it a professional look, but also ATS optimize it.",
      name: "José S.",
    },
    {
      stars: "⭐⭐⭐⭐⭐",
      para: "Resumai is already such a great experience and with this new extension adds a lot more functionality. I hope it get to different platforms kind of resume maker tho, that would be awesome",
      name: "Calvin C.",
    },
    {
      stars: "⭐⭐⭐⭐⭐",
      para:"Resumai is such a great tool! I grabbed access because I sometimes help people optimize their LinkedIn profiles and resumes and this can help me to do the job more efficiently. :)",
      name: "Niloufer T.",
    },
    {
      stars: "⭐⭐⭐⭐⭐",
      para: "I used Resumai just last week to create a new resume. It was simple and it created a professional looking resume. Two thumbs up.",
      name: "Jennifer F.",
    },
    {
      stars: "⭐⭐⭐⭐⭐",
      para: "Really innovative feature! This combined with Resumai's already established features will surely help job-seekers. I've got a lot more interviews since I started using Resumai!",
      name: "Rodrigo M.",
    },
    {
      stars: "⭐⭐⭐⭐⭐",
      para: "Really streamlined the resume making process and made it really easy to build mine. I highly recommend!",
      name: "Connor M.",
    },
    {
      stars: "⭐⭐⭐⭐⭐",
      para: "Niceee! Application looks very slick and has a very nice user experience. I love it 🖤 Congratulations!",
      name: "Yevhenii P ",
    }
  ];
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
        return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
console.log(windowWidth);
  return (
    <div>
      <Banner />
      {
        windowWidth < 800 ? <Waste /> : <Navbar />
      }
     
      
      <DescMainOne
        head={
          "Write and edit lightning fast resume bullet points with cutting-edge"
        }
        headSub={"ChatGPT"}
        para1={
          "resumA.I. is a next generation intelligent resume builder forenabling more effective applications. "
        }
        para2={
          "Instantly write hirable content that feels more natural than you could imagine."
        }
        buttontext1={"Create Resume"}
        buttontext2={"View all Templates"}
      />
      <StarPoint pointsList={pointsList} />
      <FreePlans />
      <Custmer customerList={customerList} />
      <Users />
      <Footer />
    </div>
  );
};

export default HomePage;
