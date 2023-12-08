import React from 'react';
import './footer.css';

import { BsLinkedin } from 'react-icons/bs'
import { FiInstagram } from 'react-icons/fi'
import { GrYoutube } from 'react-icons/gr'
import { FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BottomNav = () => {
  return (
    <>
         <div className="Main_page-bottomNav">
            <h2>Nano chat</h2>
            <ul className='nav_item-list'>
               <li><Link to='/'>Home</Link></li>
               <li><Link to ='/About'>About</Link></li>
               <li><Link to ='/Experience'>Councelling</Link></li>
               <li><Link to ='/Help'>Contact</Link></li>
            </ul>

            <div className='footer_socials_MainPage'>
               <a href="https://www.linkedin.com/in/durgesh-chaudhary-535a76211/" target="_blank"><BsLinkedin /></a>
               <a href="https://www.instagram.com/_durgesh.chaudhary/" target="_blank"><FiInstagram /></a>
               <a href="https://www.youtube.com/@nanochat" target="_blank"><GrYoutube /></a>
               <a href="https://www.youtube.com/@nanochat" target="_blank"><FaTwitter/></a>
            </div>
            <div className="line"></div>

            <div className='footer_copyright_MainPage'>
               <small>&copy; Durgesh Chaudhary. ALL rights reserved</small>
            </div>
         </div>
    </>
  )
}

export default BottomNav
