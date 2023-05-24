import React, { useEffect } from 'react'
// import PIC from "../images/home_illustration.png"
import "../style/notification.css"
import Aos from "aos";
import 'aos/dist/aos.css';

const Notification = () => {

    useEffect(() => {
        Aos.init({
            duration: 1600
        });
    }, []);

    return (
        <>
            <div className='notification'>
                <div className="container">
                    <div className='column'>
                        {/* <img src={PIC} alt="..." className="img" /> */}
                        <div class="row">
                            <span>Let's see the Letest Notifications Pdf's</span>
                        </div>
                    </div>

                    <div className='Othernote' data-aos="fade-up" >
                        <div className='aiimsnote'>
                            <h4 className='text-center' >AIIMS</h4>
                            <div className='notenames'>
                                <a href='/' >Download plz again!</a>
                                <a href='/' >Download plz again!</a>
                                <a href='/' >Download plz again!</a></div>
                        </div>
                        <div className='Others'>
                            <h4 className='text-center' >Others</h4>
                            <div className='notenames'>
                                <a href='/' >Download plz again!</a>
                                <a href='/' >Download plz again!</a>
                                <a href='/' >Download plz again!</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notification
