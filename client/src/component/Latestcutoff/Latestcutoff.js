import React from 'react'
import "./Latestcutoff.css"

const Latestcutoff = () => {
    return (
        <>
            <div className='notification'>
                <div className="container">
                    <div className='column'>
                        {/* <img src={PIC} alt="..." className="img" /> */}
                        <div class="row">
                            <span>LATEST NEET CUT-OFF 2023</span>
                        </div>
                    </div>

                    <div className='Othernote' data-aos="fade-up" >
                        <div className='aiimsnote'>
                            {/* <h4 className='text-center' >AIIMS COLLEGES</h4> */}
                            <div className='notenames'>
                                <a href='https://vanukuru.files.wordpress.com/2022/11/ug-medical-top-35-colleges-orcr-2022-01.jpg' >AIIMS Delhi</a>
                                <a href='/' >AIIMS Rishikesh</a>
                                <a href='/' >AIIMS Raebareli</a>
                                <a href='/' >AIIMS Bhubaneswar</a>
                                <a href='/' >AIIMS Kalyani</a></div>
                        </div>
                        <div className='Others'>
                            {/* <h4 className='text-center' >AIIMS COLLEGES</h4> */}
                            <div className='notenames'>
                                <a href='/' >AIIMS Madurai</a>
                                <a href='/' >AIIMS Raipur</a>
                                <a href='/' > AIIMS Bilaspur</a>
                                <a href='/' >AIIMS Rajkot</a>
                                <a href='/' >AIIMS Bhopal</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Latestcutoff
