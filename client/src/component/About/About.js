import React from 'react'
import './About.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Myself from '../MyIntro/Myself'
import Videos from '../CounellingVideos/Videos';

const About = () => {
  const Videosdata = [
    {
      title: "AIIMS Raebareli NEET Cut Off 2023 | AIIMS Raebareli NEET Cut Off Marks & Rank 2023",
      videoUrl: "https://www.youtube.com/embed/aNF_cUxMSxs?si=vRXHmZuiA2M_IGfr"
    },
    {
      title: "PMCH Patna MBBS Cut off 2023 | PMCH Patna NEET Cut off Rank & Marks 2023",
      videoUrl: "https://www.youtube.com/embed/CPECNx-dvz8?si=eCxVj4xdppAFwRht"
    },
    {
      title: "AIIMS Gorakhpur NEET Cut Off 2023 | MBBS Cut Off Ranks & Marks 2023",
      videoUrl: "https://www.youtube.com/embed/fEUVjBeeCl8?si=DZ72YZPEodABtKua"
    },
  ]
  return (
    <>
      <Navbar />
      <div className='about1'>
        <div className='aboutfirst'>
          <div className='aboutspan'><span>NANO CHAT</span></div>
          <div className='aboutpara'><p>Our objective is to provide quality education and guidance</p></div>
        </div>
      </div>
      <div className='about'>
        <div className='abouthead'><h1>ABOUT THE COMPANY</h1></div>
        <div className='abouthead2'><p>Our Objective is to provide Quality Education</p></div>
        <div className='para'><p> We effort to improve the ability to think and equip them with specialized skill useful in different areas of medical, engineering and others.Help medical aspirants by providing practice questions and counselling guidance to become a doctor.</p></div>
      </div>
      <Myself />
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
      <Footer />
    </>
  )
}


export default About
