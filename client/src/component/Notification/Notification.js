import React from 'react'
import "./notification.css"

const Notification = () => {
    return (
        <>
            <div className='notification'>
                <div className="container">
                    <div className='column'>
                        {/* <img src={PIC} alt="..." className="img" /> */}
                        <div class="row">
                            <span>Let's see the Latest Notifications Pdf's</span>
                        </div>
                    </div>

                    <div className='Othernote' data-aos="fade-up" >
                        <div className='aiimsnote'>
                            <h4 className='text-center' >AIIMS</h4>
                            <div className='notenames'>
                                <a href='/' >Download please again!</a>
                                <a href='/' >Download please again!</a>
                                <a href='/' >Download please again!</a></div>
                        </div>
                        <div className='Others'>
                            <h4 className='text-center' >Others</h4>
                            <div className='notenames'>
                                <a href='/' >Download please again!</a>
                                <a href='/' >Download please again!</a>
                                <a href='/' >Download please again!</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notification
