import React from 'react'
import './home.css';
import imgaes from '../../images/landing page.png'

import Cards from '../Card/Cards';
import Tables from '../Table/Tables';

import Footer from '../Footer/Footer';
import Videos from '../CounellingVideos/Videos';
import Notification from '../Notification/Notification';
import Myself from '../MyIntro/Myself';
import { Link } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import SocialMedia from '../SocialMedia/SocialMedia';
import '../../style/video.css'

const Home = () => {

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
      <Navbar />
      <div className='container'>
        <div className='imgpara' >
          <div className='Text' data-aos="fade-down-right">
            <div className='textone' ><span>Our Objective is to provide</span></div>
            <div className='textsecond' ><span>Quality Education</span></div>
            <div className='textthird' ><small>we effort to improve the ability to think and euip them with specialized </small></div>
            <div className='textfourth' ><small>skill usefil in differentareas of medical, engineering and others</small></div>
            <div className='textButton'>
              <Link className='btn' to="/student-counselling/form" >Counselling Form</Link>
            </div>
          </div>
          <div className='img' data-aos="fade-down-left">
            <img src={imgaes} alt="images" ></img></div>
        </div>
      </div>

      <div className='chennels '>
        <div className='container'>
          <div>
            <h1>5000K</h1>
            <small>Subscribers</small><br />
            <a href=''> on Youtube</a>
          </div>

          <div class="vl"></div>
          <div>
            <h1>2090K</h1>
            <small>Followers</small><br />
            <a href=''> on Instagram </a>
          </div>

          <div class="vl"></div>
          <div>
            <h1>3876K</h1>
            <span> Followers </span><br />
            <a href=''> on Twiter </a>
          </div>
        </div>
      </div>

      <SocialMedia />
      <Cards />
      <Notification />
      <Tables />
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

export default Home
