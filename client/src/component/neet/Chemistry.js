import React from 'react'
import '../style/question.css'
import Quiz from './Quiz'
import Footer from '../component/Footer/Footer'
import Navbar from '../component/Navbar/Navbar'

export default function Chemistry() {

    return (
        <>
             <Navbar/>
            <Quiz />
            <Footer />
        </>
    )
}
