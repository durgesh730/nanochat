import React from 'react'
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../style/aiimsdelhi.css";
import SocialMedia from "../SocialMedia";
import pic1 from "../../images/delhi.png";
export default function AIIMSgorakpur() {
  return (
    <>
    <Navbar />
    <SocialMedia/>
    <div className="conatinerdelhi">
      <div className="subconatinerdelhi">
        <div className="subconatinerdelhiimg">
          <h1>AIIMS DELHI</h1>
          <img src={pic1} alt="fghj" />
        </div>
      </div>
      <div className="detaillist">
        {/* <h1>AIIMS DELHI</h1> */}
        <h2>Table of Contents</h2>
        <ul>
          <li>1. Quick Summary</li>
          <li>2. MBBS Course</li>
          <ul>
            <li>2.1 Seats</li>
            <li>2.2 Fees</li>
            <li>2.3 Cut off 2022</li>
            <li>2.4 Ranking</li>
            <li>2.5 Bond Detaila and Stipend</li>
            <li>2.6 Admission Addtional Details</li>
            <li>2.7 FeesmSturucture</li>
          </ul>
          <li>3. Infrastructure</li>
          <li>4. Hostel</li>
          <li>5. Affilliated Hospitals</li>
          <li>6. How to Reach </li>
        </ul>
      </div>
    </div>
    <div className="d1">
      <div className="OuickSummary">
        <div className="ouicktitle">
          <h1>QUICK SUMMARY</h1>
        </div>
        <div>
          <table className="tabletext">
            <tr>
              <td>Estabilshed</td>
              <td>1956</td>
            </tr>
            <tr>
              <td>Institution type</td>
              <td>Goverment </td>
            </tr>
            <tr>
              <td> Affilliated University</td>
              <td>Statutory Autonomuns,Aiims </td>
            </tr>

            <tr>
              <td> Post Graduate Courses</td>
              <td>30 </td>
            </tr>
            <tr>
              <td>Super Speciality Courses</td>
              <td>33 </td>
            </tr>
            <tr>
              <td>Address</td>
              <td>AIIMS,Ansari Nagar, New delhi-110029 </td>
            </tr>
            <tr>
              <td>Officaila Website </td>
              <td> </td>
            </tr>
            <tr>
              <td>Contact</td>
              <td>91-11-23456423/3456789 </td>
            </tr>
          </table>
        </div>
      </div>
      {/* <div className="delhiimg">
      <img src={pic2}></img>
    </div> */}
      <div className=" d1text">
        <p>
          &#x2022; The health survey and development committee, chaired by Sir
          Joseph Bhore, <br></br>an Indian government official, recommended as
          early as 1946 the establishment <br></br>of a national medical
          center that would concentrate on meeting the need for a<br></br>{" "}
          highly-skilled workforce to support healthcare activities country.
          <br></br>
          &#x2022; AIIMS was finally created in 1956 as an autonomous
          institutio under a <br></br> parliamentary act,serving as a center
          to support excellence in all aspects <br></br>of care health.
        </p>
      </div>
    </div>
    <div className="mbbs seat">
      <div className="ouicktitle">
        <h1>MBBS COURSE</h1>
      </div>
      <div>
      <p>
        Admission to AIIMS New Delhi is based on medical entrance exam NEET.
        Duration of MBBS course is 4.5 years + one year compulsory rotating
        medical internship.
      </p>
      </div>
      <div>
      <h2>SEATS</h2>
      <h4>
        All India Institute of Medical Sciences Delhi is permitted with below
        MBBS seats
      </h4>
      </div>
      <table className="tabletext1">
        <tr>
          <td>Seats</td>
          <td>132</td>
        </tr>
      </table>
      <div/>
      
      <div className="tution fees">
      <p>
        AIIMS New Delhi MBBS fees for various quota is given below.<br></br>{" "}
        Apart from tuition fees, you need to pay various other fees during
        admission.
      </p>
        <div/>
      </div>
      <div>
     
      </div>
      </div>
    {/* </div> */}
    <div className="AIIMS New Delhi Cut off">
      <div className="ouicktitle">
        <h1>AIIMS New Delhi Cut off</h1>
      </div>
      <p>
        Knowing Previous Year AIIMS New Delhi cut off for All India Quota
        Counselling will help you know whether you have possibility to get
        here.
      </p>
      <h3>
        Institute of National Importance Quota Seats (OPQ) NEET 2022 Score
        Cutoff
      </h3>
      <table className="tabletext">
        <tr>
          <td>Category</td>
          <td>Cut off Score 2021</td>
          <td>Cut off Score 2022</td>
          <td>Cut off Rank</td>
        </tr>
      </table>
    </div>
    <div className="ranking">
      <div className="ouicktitle">
        <h1>Ranking</h1>
      </div>
      <p>
        College Ranking is based on How Parents Preferred AIIMS New Delhi
        during last year AIQ and SQ counselling.
      </p>
      <table className="tabletext">
        <tr>
          <td>Quota Type</td>
          <td>Ranking</td>
        </tr>
        <tr>
          <td>All India Ranking</td>
          <td>1</td>
        </tr>
      </table>
    </div>
    
    <Footer />
  </>
  )
}
