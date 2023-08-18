import React from 'react'
import Navbar from '../navbar/Navbar'
import DescMainOne from '../homepage/mainpagecomponents/DescMainOne'
import StarPoint from '../homepage/mainpagecomponents/StarPoint'
import point1 from "../homepage/images/point1.svg"
import point2 from "../homepage/images/point2.svg"
import point3 from "../homepage/images/point3.svg"
import point4 from "../homepage/images/point4.svg"
import Custmer from '../homepage/mainpagecomponents/Custmer'
import FreePlans from '../homepage/mainpagecomponents/FreePlans'
import Users from '../homepage/mainpagecomponents/Users'
import Footer from '../homepage/mainpagecomponents/Footer'
const CoverLetter = () => {
  const pointsList = [
    {
      url: point1,
      head: "Start with your resume",
      para1:
        "Using your existing resume as a starting point, the cover letter builder prompts you to enter your personal and job-specific information, and then generates a customized cover letter that highlights your qualifications and experiences relevant to the job you are applying for",
      para2: "",
    },
    {
      url: point2,
      head: "Highlight specific information",
      para1:
        "Our cover letter builder uses specific information from your resume to create a personalized and professional cover letter. Simply input your work experience, education, and skills, and our tool will generate a customized cover letter that highlights your qualifications and highlights your fit for the desired position.",
      para2: "",
    },
    {
      url: point3,
      head: "Edit your new cover letter",
      para1:
        " Now that your resume is well created and tailored to a job description, you can instantly generate a matching cover letter in just 1 click.",
      para2: "Creating a perfect cover letter has never been easier.",
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
  return (
    <div>
      <Navbar />
      <DescMainOne
        head={
          "Effortlessly craft the perfect cover letter with our "
        }
        headSub={"AI cover letter builder"}
        para1={
          "Instantly create a tailored cover letter based on your resume."
        }
        para2={
          ""
        }
        buttontext={
          ""
        }
      />
      <StarPoint pointsList={pointsList}/>
      <Custmer customerList={customerList}/>
      <FreePlans/>
      <Users />
      <Footer />
    </div>
  )
}

export default CoverLetter
