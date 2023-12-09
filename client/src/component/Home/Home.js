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
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import kgmu from '../../images/Lucknow, KGMU.jfif'
import Latestcutoff from '../Latestcutoff/Latestcutoff';

const Home = () => {

  const Videosdata = [
    {
      title: "AIIMS Nagpur NEET Cut Off 2023 | AIIMS Nagpur NEET Cut Off Marks & Rank 2023 ",
      videoUrl: "https://www.youtube.com/embed/NfhnsH_JDEk?si=79liYbxRvKgYa33Y"
  },
  {
      title: "VMMC Delhi NEET Cut Off 2023 | VMMC Delhi NEET Cut Off Rank & Marks 2023 ",
      videoUrl: "https://www.youtube.com/embed/qA_xdnHtKQE?si=OhyBUvXHwWZy1DMK"
  },
  {
      title: "MAMC New Delhi NEET Cut Off 2023 | NEET Cut Off Marks & Rank 2023",
      videoUrl: "https://www.youtube.com/embed/XWqx4lXDBcg?si=-2sPAYGqEb9Irxd8"
  },
  ]

  return (
    <>
      <Navbar />
      <div className='imgpara'>
        <div className='Text' data-aos="fade-down-right">
          <div className='textone' ><span>Our Objective is to provide</span></div>
          <div className='textsecond' ><span>Quality Education</span></div>
          <div className='textthird' ><small>we effort to improve the ability to think and equip them with specialized </small></div>
          <div className='textfourth' ><small>skill useful in different areas of medical, engineering and others</small></div>
          <div className='textButton'>
            <Link className='btn' to="/student-counselling/form" >Counselling Form</Link>
          </div>
        </div>
        <div className='img' data-aos="fade-down-left">
          <img src={imgaes} alt="images" ></img></div>
      </div>

      <div className='chennels '>
        <div className='container'>
          <div>
          <h1>5.2k</h1>
            <small>Subscribers</small><br />
            <a href='https://www.youtube.com/@nanochat'target='black'> on Youtube</a>
          </div>

          <div class="vl"></div>
          <div>
          <h1>k</h1>
            <small>Followers</small><br />
            <a href='https://www.instagram.com/_durgesh.chaudhary/'target='black'> on Instagram </a>
          </div>

          <div class="vl"></div>
          <div>
          <h1>k</h1>
            <span> Followers </span><br />
            <a href='https://www.linkedin.com/in/durgesh-chaudhary-535a76211/' target='black'> on Linkdin</a>
          </div>
        </div>
      </div>

      <SocialMedia />
      <Cards />
      <Notification />
      <Tables />
      <Latestcutoff/>
      {/* <Myself /> */}
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
