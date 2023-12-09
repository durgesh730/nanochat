import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer'
import Videos from '../CounellingVideos/Videos';
import './Experience.css'
const Experience = () => {
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
            <div className='exp'>
                <div className='exphead'><h1>INFORMATION RELATED TO COUNSELLING </h1></div>
                <div className='exphead2'><p>Our objective is to provide quality education and guidance</p></div>

            </div>

            
            <div className='exppara'>
               
                <div className='expparadata'><p> We provide free and paid counselling. Please fill this councelling form for counselling guidance. Once you fill this form and choose required option, further details will be sent to your email. Feel free to reach out to us through the 'Contact Us' page for any inquiries or assistance.</p></div>
                <div className='councelling'>
                <Link className='btn' to="/student-counselling/form">Counselling Form</Link>
            </div>
            </div>

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

export default Experience
