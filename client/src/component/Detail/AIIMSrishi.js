import React from 'react'
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../style/aiimsdelhi.css";
import SocialMedia from "../SocialMedia";
import pic1 from "../../images/delhi.png";

export default function AIIMSrishi() {
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
      <div className="bond and stipend">
        <div className="ouicktitle">
          <h1>bond and stipend</h1>
        </div>
        <p>
          After MBBS course completion in All India Institute of Medical
          Sciences Delhi, candidates should undergo rural service . If they
          skip, they need to pay bond penalty.
        </p>
        <table className="tabletext">
          <tr>
            <td>Total Years</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Penalty</td>
            <td>₹ 0</td>
          </tr>
          <tr>
            <td>Stipend</td>
            <td>₹ 26300 /month</td>
          </tr>
        </table>
      </div>
      <div className="Admission Addtional Details">
        <div className="ouicktitle">
          <h1>Admission Addtional Details</h1>
        </div>
        <p>
          Find AIIMS New Delhi additional details given by this medical college
          to Medical Counselling committee.
        </p>
        <table className="tabletext">
          <tr>
            <td>Male Hostel</td>
            <td>yes</td>
          </tr>
          <tr>
            <td>female Hostel</td>
            <td>yes</td>
          </tr>
          <tr>
            <td>Other Info</td>
            <td>
              Academic Fee and Hostel fee is one time fee for the entire course
            </td>
          </tr>
          <tr>
            <td>Name of the Dean</td>
            <td>DR NEENA KHANNA</td>
          </tr>
          <tr>
            <td>Name of the Nodal Officer</td>
            <td>DR ASHOK KUMAR JARYAL</td>
          </tr>
          <tr>
            <td>Designation</td>
            <td>Dean</td>
          </tr>
          <tr>
            <td>Office Address</td>
            <td>ACADEMIC SECTION AIIMS NEW DELHI 110029</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>011-26594365</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>durgeshchoudary@gmail.com</td>
          </tr>
        </table>
      </div>
      <div className="fees structure">
        <div className="ouicktitle">
          <h1>AIIMS New Delhi Fees Structure</h1>
        </div>
        <table className="tabletext">
          <tr>
            <td>Course Type</td>
            <td>Fees Type</td>
            <td>Description</td>
            <td>Fees</td>
          </tr>
          <tr>
            <td>UG</td>
            <td>OneTime</td>
            <td>Tuition Fees</td>
            <td>1350</td>
          </tr>
          <tr>
            <td>UG</td>
            <td>OneTime</td>
            <td>Pot Fund Hostel</td>
            <td>1320</td>
          </tr>

          <tr>
            <td>UG</td>
            <td>OneTime</td>
            <td>Hostel Rent For 5 Years</td>
            <td>990</td>
          </tr>
          <tr>
            <td>UG</td>
            <td>Monthly</td>
            <td>Mess Fees NonVeg</td>
            <td>3500</td>
          </tr>
          <tr>
            <td>UG</td>
            <td>OneTime</td>
            <td>Gymkhana Fee Hostel</td>
            <td>220</td>
          </tr>
          <tr>
            <td>UG</td>
            <td>OneTime</td>
            <td>Hostel Deposit Refundable</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>UG</td>
            <td>OneTime</td>
            <td>Electricity Charges</td>
            <td>198</td>
          </tr>
          <tr>
            <td>UG</td>
            <td>OneTime</td>
            <td>Mess Deposit Refundable</td>
            <td>500</td>
          </tr>
          <tr>
            <td>UG</td>
            <td>OneTime</td>
            <td>Caution Deposit</td>
            <td>100</td>
          </tr>
          <tr>
            <td>UG</td>
            <td>OneTime</td>
            <td>Laboratory Fees</td>
            <td>90</td>
          </tr>
          <tr>
            <td>UG</td>
            <td>OneTime</td>
            <td>Registration Fee</td>
            <td>20</td>
          </tr>
          <tr>
            <td>UG</td>
            <td>OneTime</td>
            <td>Student Union Fee</td>
            <td>53</td>
          </tr>
          <tr>
            <td>UG</td>
            <td>Monthly</td>
            <td>Mess Fees Veg</td>
            <td>3200</td>
          </tr>
        </table>
      </div>
      <div className="Infrastructure">
        <div className="ouicktitle">
          <h1>Infrastructure</h1>
        </div>
        <p>
          &#x2022; AIIMS campus is divided into 5 locations, the East Campus
          Includes OPD ward, main hospital ward, infirmary, medical school,
          research department, convergence ward, BB Dixit library,
          administration wing, student dormitories, central lawn, Jawaharlal
          auditorium, and staff room. This eastern city also has 4 centers
          specializing in cardiac carcinoma and neurology, an Oncology Center,
          an Ophthalmic Science Center, and a Dental Education and Research
          Center. &#x2022;<br></br>The library is open 24 hours a day, 7 days a
          week (356 days) and has more than 1,50,257 books and other documents
          such as bound newspapers, pamphlets, etc.and employees, technicians
          and non-technicians. An average of 320 readers visit the library every
          day.<br></br> &#x2022;The library is well equipped with modern
          facilities to support biomedical teaching and research.;A library has
          predominantly electronic resources (80%) that are provided with
          anytime, anywhere access to physicians and faculty members for their
          academic activities. Access Medicine Books, Oxford Medicine Online (53
          textbooks), OVID
        </p>
      </div>
      <div className="hostel">
        <div className="ouicktitle">
          <h1>HOSTEL</h1>
        </div>
        <p>
          {" "}
          AIIMS has more than one accommodation section with all sorts of
          facilities. Twelve male and 26 female office attendants are posted in
          different hostels. AIIMS has several halls of residence with a
          capacity of over 1990 accommodation facilities with single/double
          rooms, 418 accommodations for nursing students and staff nurses and 24
          guest rooms furnished with all facilities. These are spread over
          different hostels and residences in the AIIMS Main Campus, Masjid
          Moth, Ayurvigyan Nagar, and JPNA Trauma Centre Hostel available in Raj
          Nagar. Male hostels have a total of more than 1350 student
          accommodation facilities. Female hostel has 650 accommodation
          facilities, Staff Hostel 400 accommodation, and also Guest rooms are
          available here. All residences have common rooms, sports clubs,
          Gymnasium, reading rooms, and recreational facilities.
        </p>
      </div>
      <div className="Affilliated Hospitals">
        <div className="ouicktitle">
          <h1> Affilliated Hospitals</h1>
        </div>
        <p>
          AIIMS is currently not a single hospital, but a conglomerate of
          facilities. It has over 1,500 units located in the main hospital, the
          Ophthalmological Center of dr.Rajendra Prasad, Cardiac Surgery Center,
          Neuroscience Center, Hospital Center, Rotary Institute, and Detox
          Center. This facility complex serves approximately 1.5 million
          outpatients and 80,000 inpatients annually. The number of surgical
          operations performed at AIIMS last year amounted to over 100,000. The
          total number of beds available at Major Hospital and Dr.B.R. Ambedkar
          Institute Rotary Cancer Hospital, Dr.RP Center, NDDTC, CCM, NCI
          Jhajjar has 2,792 beds, including 288 private sector beds. Rural/Urban
          Health Training Centres Ballabgarh 35 km distance from the college
        </p>
      </div>
      <div className="How to Reach">
        <div className="ouicktitle">
          <h1>How to Reach</h1>
        </div>
        <p>
          New Delhi Bus Stand and Inter State Bus Terminal to AIIMS Medical
          college is 20 km distance. We can reach within 40 min from NH 44 and
          Baba Banda Singh Bahadur Setu road. Ajmeri Gate Railway station in
          Delhi is located 10.5 km away from this college, we can reach here
          within 30 min through Prithviraj Road and Sri Aurobindo Marg. Indira
          Gandhi International Airport, Delhi is the nearest airport of this
          medical college, which is located 9.8 km away from Medical College.
          Through Mahatma Gandhi Road and NH 48, we can reach the Airport within
          20 min to this Medical College.
        </p>
      </div>
      <Footer />
    </>
  )
}
