import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "../../style/CollegeDetails.css";
import SocialMedia from "../SocialMedia/SocialMedia";
import Videos from "../CounellingVideos/Videos"
import '../../style/video.css'
import { useNavigate } from "react-router-dom";

const CollegeDetails = ({ info, Videosdata }) => {

  const navigate = useNavigate()

  const handleLocation = (location) => {
    navigate(location)
  }

  return (
    <>
      <Navbar />
      <SocialMedia />
      <div className="ContainerCollege" >
        <div className="collgeAbout" >

          <div className="collegeHeading" >
            <span>{info?.title}</span>
          </div>

          <div className="CollegeContainer" >
            <div className="CollegeImage" >
              <img src={info?.about?.collegeImgUrl} alt="college image" />
            </div>

            <div className="CollegeText" >
              <div className="collegeAboutText" >
                <span>About Us</span>
              </div>
              <div className="collegeAboutDetails" >
                <span>
                  {info?.about?.paraFirst}
                </span> <br /><br />

                <span>
                  {info?.about?.paraSecond}
                </span>
              </div>
              <div className="learn-btn" >
                <a href={info?.about?.btnLink} target="_blank" >Learn More</a>
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
                <li>2.7 Fees Sturucture</li>
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
              {info?.quickSummary?.paraGraph}
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
              <div>  {info?.quickSummary?.established} </div>
              <div>  {info?.quickSummary?.institutionType}</div>
              <div> {info?.quickSummary?.courses} </div>
              <div>  {info?.quickSummary?.address}</div>
              <div> <a href={info?.quickSummary?.officialSite} target="_blank" > {info?.quickSummary?.officialSite}</a> </div>
              <div>  {info?.quickSummary?.contacts} </div>
              <div>  {info?.quickSummary?.affiliatedUniversity}</div>
            </div>
          </div>
        </div>

        <div className="mbbsCourse" >
          <div className="mbbsCourseHeading" >
            <span>MBBS Courses</span>
          </div>

          <div className="CollegeContainer gap" >
            <div className="CollegeImage" >
              <img src={info?.courses?.img} alt="college image" />
            </div>

            <div className="CollegeText" >
              <div>
                <div className="subtopics">
                  <span>Seats</span>
                </div>
                <div>
                  <span>
                    {info?.courses?.seats}
                  </span>
                </div>
              </div>
              <div>
                <div className="subtopics">
                  <span>Tution Fee</span>
                </div>
                <div>
                  <span>
                    {info?.courses?.tutionfee}
                  </span>
                </div>
              </div>
              <div>
                <div className="subtopics">
                  <span>Ranking</span>
                </div>
                <div>
                  <span>
                    {info?.courses?.ranking}
                  </span>
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
                {info?.addmision?.para}
              </p>
            </div>
            <table className="tabletext">
              <tr>
                <td>Male Hostel</td>
                <td> {info?.addmision?.maleHostel}</td>
              </tr>
              <tr>
                <td>female Hostel</td>
                <td>{info?.addmision?.femaleHostel}</td>
              </tr>
              <tr>
                <td>Other Info</td>
                <td>
                  {info?.addmision?.otherInfo}
                </td>
              </tr>
              <tr>
                <td>Name of the Dean</td>
                <td> {info?.addmision?.deanName}</td>
              </tr>
              <tr>
                <td>Name of the Nodal Officer</td>
                <td>{info?.addmision?.nodalName}</td>
              </tr>
              <tr>
                <td>Designation</td>
                <td>{info?.addmision?.designation}</td>
              </tr>
              <tr>
                <td>Office Address</td>
                <td>{info?.addmision?.officeAddress}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{info?.addmision?.phone}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{info?.addmision?.email}</td>
              </tr>
            </table>
          </div>
        </div>

        <div className="bondContainer">
          <div className="bondtitle">
            <span>Bond and Stipend</span>
          </div>

          <div className="bondtext" >
            <p>{info?.bondStipend?.para}</p>
          </div>

          <table className="bondtable">
            <tr>
              <td>Total Years</td>
              <td>{info?.bondStipend?.totalYear}</td>
            </tr>
            <tr>
              <td>Penalty</td>
              <td>₹ {info?.bondStipend?.penalty}</td>
            </tr>
            <tr>
              <td>Stipend</td>
              <td>₹ {info?.bondStipend?.stipend}</td>
            </tr>
          </table>
        </div>

        <div className="svgImage" >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#232354" fill-opacity="1" d="M0,64L48,69.3C96,75,192,85,288,101.3C384,117,480,139,576,133.3C672,128,768,96,864,85.3C960,75,1056,85,1152,96C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>

        <div className="feeStructure">
          <div className="feeStructuretitle">
            <span>Fees Structure</span>
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
              <td>{info?.fee?.tutionfee}</td>
            </tr>
            <tr>
              <td>UG</td>
              <td>OneTime</td>
              <td>Pot Fund Hostel</td>
              <td>{info?.fee?.potfundHostel}</td>
            </tr>

            <tr>
              <td>UG</td>
              <td>OneTime</td>
              <td>Hostel Rent For 5 Years</td>
              <td>{info?.fee?.hostelRent}</td>
            </tr>
            <tr>
              <td>UG</td>
              <td>Monthly</td>
              <td>Mess Fees NonVeg</td>
              <td>{info?.fee?.messFeeNonVeg}</td>
            </tr>
            <tr>
              <td>UG</td>
              <td>OneTime</td>
              <td>Gymkhana Fee Hostel</td>
              <td>{info?.fee?.gymfee}</td>
            </tr>
            <tr>
              <td>UG</td>
              <td>OneTime</td>
              <td>Hostel Deposit Refundable</td>
              <td>{info?.fee?.hosteldeposit}</td>
            </tr>
            <tr>
              <td>UG</td>
              <td>OneTime</td>
              <td>Electricity Charges</td>
              <td>{info?.fee?.electricityCharge}</td>
            </tr>
            <tr>
              <td>UG</td>
              <td>OneTime</td>
              <td>Mess Deposit Refundable</td>
              <td>{info?.fee?.messDeposit}</td>
            </tr>
            <tr>
              <td>UG</td>
              <td>OneTime</td>
              <td>Caution Deposit</td>
              <td>{info?.fee?.cautionDeposit}</td>
            </tr>
            <tr>
              <td>UG</td>
              <td>OneTime</td>
              <td>Laboratory Fees</td>
              <td>{info?.fee?.laboratoryfee}</td>
            </tr>
            <tr>
              <td>UG</td>
              <td>OneTime</td>
              <td>Registration Fee</td>
              <td>{info?.fee?.registrationfee}</td>
            </tr>
            <tr>
              <td>UG</td>
              <td>OneTime</td>
              <td>Student Union Fee</td>
              <td>{info?.fee?.studentUnionFee}</td>
            </tr>
            <tr>
              <td>UG</td>
              <td>Monthly</td>
              <td>Mess Fees Veg</td>
              <td>{info?.fee?.messFeeVeg}</td>
            </tr>
          </table>
        </div>
        <div className="Infrastructure">
          <div className="infrastructureTitle">
            <span>Infrastructure</span>
            <img src={info?.infrastructure?.img} alt="Infrastructure img" />
          </div>
          <p>
            &#x2022;
            {info?.infrastructure?.paraFirst}<br></br>
            &#x2022; {info?.infrastructure?.paraSecond}
          </p>
        </div>

        <div className="hotelContainer" >
          <span>HOSTEL</span>
        </div>
        <div className="hostel">
          <p>
            {" "}
            &#x2022;{info?.hostel?.paraFirst} <br /><br />
            &#x2022; {info?.hostel?.paraSecond}
          </p>
          <div className="hosteltitle">
            <img src={info?.hostel?.img} alt="hostel img" />
          </div>
        </div>

        {/* <div className="Infrastructure">
          <div className="infrastructureTitle">
            <span> Affilliated Hospitals</span>
            <img src={info?.hospital?.img} alt="Infrastructure img" />
          </div>
          <p>
            &#x2022;{info?.hospital?.paraFirst} <br /> <br />
            &#x2022; {info?.hospital?.paraSecond}
          </p>
        </div> */}

        <div>
          <div className='text-center counsellingInfo'>
            <span className='font-weight-bold'>Counselling Information</span>
          </div>
          <div className="CounsellingPara" >
            <span>{info?.counselling?.para} <a href={info?.counselling?.link}>click here for more</a></span>
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
          <p>{info?.location?.para} <a href={info?.location?.maplink} >see in Map</a> </p>
          <img src={info?.location?.img} alt="hostel img" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CollegeDetails

