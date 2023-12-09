import React from 'react'
import './About.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Myself from '../MyIntro/Myself'
import Videos from '../CounellingVideos/Videos';

 const About = () => {
  const Videosdata = [
    {
      title: "AIIMS Rishikesh NEET Cut Off Marks & Rank 2021",
      videoUrl: "https://www.youtube.com/embed/7CLzzaN0fis"
    },
    {
      title: "AIIMS Rishikesh NEET Cut Off Marks & Rank 2021",
      videoUrl: "https://www.youtube.com/embed/7CLzzaN0fis"
    },
    {
      title: "AIIMS Rishikesh NEET Cut Off Marks & Rank 2021",
      videoUrl: "https://www.youtube.com/embed/7CLzzaN0fis"
    },
  ]
  return (
    <>
    <Navbar/>
    <div className='about'>
       <div className='abouthead'><h1>ABOUT THE COMPANY</h1></div> 
       <div className='abouthead2'><p>Our Objective is to provide Quality Education</p></div>
       <div className='para'><p> We effort to improve the ability to think and equip them with specialized skill useful in different areas of medical, engineering and others.Help medical aspirants by providing practice questions and counselling guidance to become a doctor.</p></div> 
    </div>
   <Myself/>
   <div className='homeTabVideos' >
        <div className='text-center counsellingInfo'>
          <span className='font-weight-bold'>Counselling Information</span>
        </div>
        <div className='yotubeVideo' >
          {Videosdata.map((item, index) => {
            return (
              <Videos item={item} key={index} />
            )
          })}
        </div>
      </div>
     <Footer/>
    </>
  )
}


export default About
