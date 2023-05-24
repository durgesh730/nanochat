import React from 'react'
import '../style/question.css'
import NeetNav from './NeetNav'
import Quiz from './Quiz'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'

export default function Chemistry() {

    return (
        <>
            {/* <NeetNav />
             */}
             <Navbar/>
            <Quiz />
            <Footer />
        </>
    )
}
