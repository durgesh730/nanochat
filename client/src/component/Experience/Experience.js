import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer'
import Videos from '../CounellingVideos/Videos';
import './Experience.css'

const Experience = () => {
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
            videoUrl:"https://www.youtube.com/embed/fEUVjBeeCl8?si=DZ72YZPEodABtKua"
        },
    ]

    return (

        <>
            <Navbar />
            <div className='exp'>
               <div className='exphead1'>
               <div className='exphead'><span>INFORMATION RELATED TO COUNSELLING </span></div>
                <div className='exphead2'><p>Our objective is to provide quality education and guidance</p></div>
            </div>

            
            <div className='exppara'>
               
                <div className='expparadata'><p> We provide free and paid counselling. Please fill this counselling form for counselling guidance. Once you fill this form and choose required option, further details will be sent to your email. Feel free to reach out to us through the 'Contact Us' page for any inquiries or assistance.</p></div>

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
