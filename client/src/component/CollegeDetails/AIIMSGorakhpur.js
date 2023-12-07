import React from 'react'
import "../../style/CollegeDetails.css";
import CollegeDetails from './CollegeDetails';
import collegeImg from '../../images/aiims gorakhpur.jpeg'
import infra from '../../images/infrastructure.png'
import hostel from '../../images/hostel.png'
import location from '../../images/location.png'

const AIIMSGorakhpur = () => {

    const CollegeInfo = [
        {
            title: 'AIIMS GORAKGPUR',
            about: {
                collegeImgUrl: collegeImg,
                paraFirst: "The All India Institute of Medical Sciences is an autonomous organisation under the Ministry of Health and Family Welfare, Government of India. AIIMS Gorakhpur offers undergraduate and postgraduate courses. The total number of AIIMS Gorakhpur courses is 6. Interested candidates should meet the AIIMS eligibility criteria and cutoff.",
                paraSecond: "Eligible candidates can apply for AIIMS Gorakhpur admission for the desired course on the official website. AIIMS Gorakhpur admissions are offered based on the scores obtained in the NEET examination and their past academic performance. The institute offers multiple facilities on campus for students and staff. The AIIMS facilities include a library, laboratories, sports facilities, and many others.",
                btnLink: "https://aiimsgorakhpur.edu.in/"
            },
            quickSummary: {
                paraGraph: "",
                established: "2019",
                institutionType: "Govt.",
                courses: "-",
                address: "	AIIMS, Kunraghat, Gorakhpur-273008, Uttar Pradesh, India.",
                officialSite: "		https://aiimsgorakhpur.edu.in/",
                contacts: "	5512205501, 5512205585",
                affiliatedUniversity: "Statutory Autonomous, AIIMS"
            },
            courses: {
                img: collegeImg,
                seats: " MBBS Seats available in All India Institute of Medical Sciences Gorakhpur is 125",
                tutionfee: "Government Fees ₹ 5856 /Year",
                ranking: " College Ranking is based on How previous year candidates Preferred AIIMS Gorakhpur during NEET 2023 All India counselling and state counselling.Ranking = 34 "
            },
            addmision: {
                para: "",
                maleHostel: "yes",
                femaleHostel: "yes",
                otherInfo: "",
                deanName: "Dr Surekha Kishore",
                nodalName: "Dr Arani Das",
                designation: "Reporting Official",
                officeAddress: "AIIMS Gorakhpur Medical College Building Kunraghat Gorakhpur",
                phone: "0551-2205599",
                email: "drdasa[at]aiimsgorakhpur.edu.in"
            },
            bondStipend: {
                para: "After MBBS course completion in AIIMS Gorakhpur, candidates should undergo compulsary service after internship . If they skip, they need to pay amount mentioned in service bond as penalty",
                totalYear: 0,
                penalty: 0,
                stipend: "26300 /month"
            },
            fee: {
                tutionfee: 1350,
                potfundHostel: 1320,
                hostelRent: 990,
                messFeeNonVeg: 3500,
                gymfee: 220,
                hosteldeposit: 1000,
                electricityCharge: 198,
                messDeposit: 500,
                cautionDeposit: 100,
                laboratoryfee: 90,
                registrationfee: 25,
                studentUnionFee: 63,
                messFeeVeg: 3200,
            },
            infrastructure: {
                img: infra,
                paraFirst: "The Central Library of All India Institute of Medical Sciences Gorakhpur is being developed to cater to the diverse needs of the students, faculty and staff of the Institute.It has a collection of textbooks in anatomy, physiology, biochemistry and community medicine.",
                paraSecond: "Beginning with a collection of nearly 600 reference and text books on various subjects, the library aims to cater to print and online issues of notable journals, books and magazines.",
            },
            hostel: {
                img: hostel,
                paraFirst: "Boys Hostel-The University has a boy’s hostel facility which provides good hostel accommodation for the students.The boys' hostel provides comfortable living spaces, ensuring a conducive environment for study, rest, and personal growth. The facilities are designed to meet students' needs, enabling them to focus on their academic journey.",
                paraSecond: "Girls Hostel-The University has a girl's hostel facility which provides good hostel accommodation for the students.The girls' hostel offers a safe and secure living environment, promoting a sense of belonging and community among the residents. The comfortable accommodations cater to students' well-being, allowing them to thrive academically.",
            },
            
            counselling: {
                para: "All the NEET Under Graduate (MBBS/BDS) aspirant candidates are hereby informed that counseling for All India Quota seats/ Institutional Quota/ Domicile (internal candidates) of Central Universities (Aligarh Muslim University/ Banaras Hindu University/ University of Delhi/Faculty of Dentistry, Jamia Millia Islamia, Delhi), (wards of ESIC insured persons) seats of colleges under Employee State Insurance Corporation and Armed Forces Medical College, Pune for the Under graduate session 2023-24 will be conducted by Medical Counseling Committee/ Directorate General of Health Services, Ministry of Health and Family Welfare, Government of India",
                link: "https://www.nanochat.in"
            },
            location: {
                img: location,
                para: "All India Institute of Medical Sciences Gorakhpur is located at Kunraghat, Gorakhpur, Uttar Pradesh. The nearest bus stop is Paidlegunj Chowk Gorakhpur which is around 2.5 km from the campus. The closest airport is Gorakhpur Airport which is around 3.3 Km from the campus. The nearest railway station is Gorakhpur Junction Railway Station which is 5.5 Km away from the campus and it takes around 18 min to reach.",
                maplink: "https://www.google.com/maps/place/All+India+Institute+of+Medical+Sciences/@26.7464329,83.4199535,17z/data=!3m1!4b1!4m6!3m5!1s0x3991458dc1c89577:0x20daa48eef8e6cd2!8m2!3d26.7464329!4d83.4199535!16s%2Fg%2F11fk3v__33?entry=ttu"
            },
        }
    ]


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
            {CollegeInfo.map((item, index) => {
                return (
                    <CollegeDetails key={index} info={item} Videosdata={Videosdata} />
                )
            })}
        </>
    )
}

export default AIIMSGorakhpur
