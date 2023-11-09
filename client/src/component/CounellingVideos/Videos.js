import React from 'react'
import '../../style/video.css'

const Videos = ({ item }) => {
    return (
        <>
            <div className='container'>
                <div className="Details">
                    <div className='Youtube' >
                        <div class="embed-responsive embed-responsive-4by3"><iframe class="embed-responsive-item " src={item?.videoUrl}></iframe>
                            <div> <a href="">{item?.title}</a></div>
                            <div className="Button"><a href='#' className='  btn '>More Videos</a></div></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Videos
