import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../style/aiimsdelhi.css";
import SocialMedia from "../SocialMedia";
import pic1 from "../../images/delhi.png";
import pic2 from "../../images/delhiaiims1.jpg";


export const AIIMSDelhi = () => {
  return (
    <>
      <Navbar />
      <SocialMedia />
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
            <li>1. Ouick Summary</li>
            <li> 2. MBBS Course</li>
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
      &#x2022; The health survey and development committee, chaired by Sir Joseph Bhore, <br></br>an Indian government official, recommended as early as 1946 the establishment  <br></br>of a national medical center that would concentrate on meeting the need for a<br></br> highly-skilled workforce to support healthcare activities country.<br></br>

      &#x2022; AIIMS was finally created in 1956 as an autonomous institutio under  a <br></br> parliamentary act,serving as a center to support excellence in all aspects <br></br>of care health.
      </p>
    </div>

</div>
      <Footer />
    </>
  );
};
