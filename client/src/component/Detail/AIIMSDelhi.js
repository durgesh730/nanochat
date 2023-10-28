import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../style/aiimsdelhi.css";
import SocialMedia from "../SocialMedia";
import pic from '../../images/aiimsdelhi.jpg'

export const AIIMSDelhi = () => {
  return (
    <>
      <Navbar />
      <SocialMedia />
      <div className="ContainerCollege" >
        <div className="collgeAbout" >

          <div className="collegeHeading" >
            <h2>AIIMS Delhi</h2>
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
          <div>
            <h2>Quick Summary</h2>
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
            <h2>MBBS Courses</h2>
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
      </div>
      <Footer />
    </>
  );
};
