import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../style/aiimsdelhi.css";
import SocialMedia from "../SocialMedia";
import pic from '../../images/aiimsdelhi.jpg'
import Infrastructure from '../../images/infrastructure.png'
import hostel from '../../images/hostel.png'
import located from '../../images/location.png'
import Videos from "../Videos"
import '../../style/video.css'

export const AIIMSDelhi = () => {

  const Videosdata = [
    {
      title: "AIIMS Rishikesh NEET Cut Off Marks & Rank 2021",
      videoUrl: "https://www.youtube.com/embed/7CLzzaN0fis"
    },
    {
      title: "AIIMS Rishikesh NEET Cut Off Marks & Rank 2021",
      videoUrl: "https://www.youtube.com/embed/7CLzzaN0fis"
    },
    {
      title: "AIIMS Rishikesh NEET Cut Off Marks & Rank 2021",
      videoUrl: "https://www.youtube.com/embed/7CLzzaN0fis"
    },
  ]

  return (
    <>
      <Navbar />
      <SocialMedia />
      <div className="ContainerCollege" >
        <div className="collgeAbout" >

          <div className="collegeHeading" >
            <span>AIIMS Delhi</span>
          </div>

          <div className="CollegeContainer" >
            <div className="CollegeImage" >
              <img src={pic} alt="college image" />
            </div>

            <div className="CollegeText" >
              <div className="collegeAboutText" >
                <span>About Us</span>
              </div>
              <div className="collegeAboutDetails" >
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse ultrices gravida dictum fusce. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Vitae ultricies leo integer malesuada nunc.
                </span> <br /><br />

                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse ultrices gravida dictum fusce. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Vitae ultricies leo integer malesuada nunc. Pellentesque sit amet porttitor eget dolor morbi non.                 </span>
              </div>
              <div className="learn-btn" >
                <button>Learn More</button>
              </div>
            </div>
          </div>
        </div>

        <div className="listContainer ">
          <div className="CollegePoints" >
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

          <div className="quotes" >
            <span>
              "We are Trying to find your Best Choices Colleges here"
            </span>
          </div>
        </div>

        <div className="QuickSummaryContainer" >
          <div className="QuickSummaryHeading" >
            <span>Quick Summary</span>
          </div>

          <div className="quickPara" >
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse ultrices gravida dictum fusce. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Vitae ultricies leo integer malesuada nunc.
            </span>
          </div>

          <div className="rows" >
            <div>
              <div> Established</div>
              <div> Institution Type</div>
              <div> Courses</div>
              <div> Address </div>
              <div> Official Website</div>
              <div> Contact  </div>
              <div> Affiliated University  </div>
            </div>
            <div >
              <div> 1920 </div>
              <div> Govt. </div>
              <div> 33</div>
              <div> AIIMS, Ansari Nagar, New Delhi-110029, India </div>
              <div> Click here </div>
              <div> 91-11-26588663 / 26588641 </div>
              <div> Self Funded</div>
            </div>
          </div>
        </div>

        <div className="mbbsCourse" >
          <div className="mbbsCourseHeading" >
            <span>MBBS Courses</span>
          </div>

          <div className="CollegeContainer" >
            <div className="CollegeImage" >
              <img src={pic} alt="college image" />
            </div>

            <div className="CollegeText" >
              <div>
                <div className="subtopics">
                  <span>Seats</span>
                </div>
                <div>
                  <span>There is just enough space here for several lines of text. Make sure you get your message across clearly yet concisely.</span>
                </div>
              </div>
              <div>
                <div className="subtopics">
                  <span>Tution Fee</span>
                </div>
                <div>
                  <span>There is just enough space here for several lines of text. Make sure you get your message across clearly yet concisely.</span>
                </div>
              </div>
              <div>
                <div className="subtopics">
                  <span>Ranking</span>
                </div>
                <div>
                  <span>There is just enough space here for several lines of text. Make sure you get your message across clearly yet concisely.</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="admissionContainer" >
          <div className="admissionHeading" >
            <span>Admission Additional Details</span>
          </div>

          <div className="admissionDetails">
            <div className="titleDetails" >
              <p>
                Find AIIMS New Delhi additional details given by this medical college
                to Medical Counselling committee.
              </p>
            </div>
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
        </div>

        <div className="bondContainer">
          <div className="bondtitle">
            <span>Bond and Stipend</span>
          </div>

          <div className="bondtext" ><p>
            After MBBS course completion in All India Institute of Medical
            Sciences Delhi, candidates should undergo rural service . If they
            skip, they need to pay bond penalty.</p>
          </div>

          <table className="bondtable">
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

        <div className="svgImage" >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#232354" fill-opacity="1" d="M0,64L48,69.3C96,75,192,85,288,101.3C384,117,480,139,576,133.3C672,128,768,96,864,85.3C960,75,1056,85,1152,96C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>

        <div className="feeStructure">
          <div className="feeStructuretitle">
            <span>AIIMS New Delhi Fees Structure</span>
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
          <div className="infrastructureTitle">
            <span>Infrastructure</span>
            <img src={Infrastructure} alt="Infrastructure img" />
          </div>
          <p>
            &#x2022; AIIMS campus is divided into 5 locations, the East Campus
            Includes OPD ward, main hospital ward, infirmary, medical school,
            research department, convergence ward, BB Dixit library,
            administration wing, student dormitories, central lawn, Jawaharlal
            auditorium, and staff room. This eastern city also has 4 centers
            specializing in cardiac carcinoma and neurology, an Oncology Center,
            an Ophthalmic Science Center, and a Dental Education and Research
            Center. <br></br>The library is open 24 hours a day, 7 days a
            week (356 days) and has more than 1,50,257 books and other documents
            such as bound newspapers, pamphlets, etc.and employees, technicians
            and non-technicians. An average of 320 readers visit the library every
            day.<br></br> &#x2022; The library is well equipped with modern
            facilities to support biomedical teaching and research.;A library has
            predominantly electronic resources (80%) that are provided with
            anytime, anywhere access to physicians and faculty members for their
            academic activities. Access Medicine Books, Oxford Medicine Online (53
            textbooks), OVID
          </p>
        </div>

        <div className="hotelContainer" >
          <span>HOSTEL</span>
        </div>
        <div className="hostel">
          <p>
            {" "}
            &#x2022; AIIMS has more than one accommodation section with all sorts of
            facilities. Twelve male and 26 female office attendants are posted in
            different hostels. AIIMS has several halls of residence with a
            capacity of over 1990 accommodation facilities with single/double
            rooms, 418 accommodations for nursing students and staff nurses and 24
            guest rooms furnished with all facilities. <br /><br />
            &#x2022; These are spread over different hostels and residences in the AIIMS Main Campus, Masjid
            Moth, Ayurvigyan Nagar, and JPNA Trauma Centre Hostel available in Raj
            Nagar. Male hostels have a total of more than 1350 student
            accommodation facilities. Female hostel has 650 accommodation
            facilities, Staff Hostel 400 accommodation, and also Guest rooms are
            available here. All residences have common rooms, sports clubs,
            Gymnasium, reading rooms, and recreational facilities.
          </p>
          <div className="hosteltitle">
            <img src={hostel} alt="hostel img" />
          </div>
        </div>

        <div className="Infrastructure">
          <div className="infrastructureTitle">
            <span> Affilliated Hospitals</span>
            <img src={Infrastructure} alt="Infrastructure img" />
          </div>
          <p>
            &#x2022;AIIMS is currently not a single hospital, but a conglomerate of
            facilities. It has over 1,500 units located in the main hospital, the
            Ophthalmological Center of dr.Rajendra Prasad, Cardiac Surgery Center,
            Neuroscience Center, Hospital Center, Rotary Institute, and Detox
            Center. This facility complex serves approximately 1.5 million
            outpatients and 80,000 inpatients annually. <br /> <br />
            &#x2022; The number of surgical  operations performed at AIIMS last year amounted to over 100,000. The
            total number of beds available at Major Hospital and Dr.B.R. Ambedkar
            Institute Rotary Cancer Hospital, Dr.RP Center, NDDTC, CCM, NCI
            Jhajjar has 2,792 beds, including 288 private sector beds. Rural/Urban
            Health Training Centres Ballabgarh 35 km distance from the college
          </p>
        </div>

        <div>
          <div className='text-center counsellingInfo'>
            <span className='font-weight-bold'>Counselling Information</span>
          </div>
          <div className="CounsellingPara" >
            <span>All the NEET Under Graduate (MBBS/BDS) aspirant candidates are hereby informed that counseling for All India Quota seats/
              Institutional Quota/ Domicile (internal candidates) of Central Universities (Aligarh Muslim University/ Banaras Hindu University/
              University of Delhi/Faculty of Dentistry, Jamia Millia Islamia, Delhi), (wards of ESIC insured persons)
              seats of colleges under Employee State Insurance Corporation and Armed Forces Medical College, Pune for the Under graduate session 2023-24 will
              be conducted by Medical Counseling Committee/ Directorate General of Health Services, Ministry of Health and Family Welfare, Government of 
              India. <a href="#">click here for more</a></span>
          </div>
          <div className='yotubeVideo' >
            {Videosdata.map((item, index) => {
              return (
                <Videos item={item} key={index} />
              )
            })}
          </div>
        </div>

        <div className="hotelContainer" >
          <span>How to Reach</span>
        </div>
        <div className="hostel">
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
          <img src={located} alt="hostel img" />
        </div>
      </div>
      <Footer />
    </>
  );
};
