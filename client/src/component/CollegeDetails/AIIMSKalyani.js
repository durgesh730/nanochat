import React from 'react'
import "../../style/CollegeDetails.css";
import CollegeDetails from './CollegeDetails';
import collegeImg from '../../images/aiimskalyani.jpeg'

import infra from '../../images/infrastructure.png'
import hostel from '../../images/hostel.png'
import location from '../../images/location.png'

const AIIMSKalyani = () => {

    const CollegeInfo = [
        {
            title: 'AIIMS KALYANI',
            about: {
                collegeImgUrl: collegeImg,
                paraFirst: "All India Institute of Medical Sciences (AIIMS) Kalyani was officially approved, under the Pradhan Mantri Swasthya Suraksha Yojana (PMSSY), by Union Cabinet on October 07, 2015. The Institute was approved to be established over a span of 179.82-acre land on National Highway – 34 around 50 km from Kolkata, in the village of Basantapur, near Kalyani, District Nadia, West Bengal. ",
                paraSecond: "AIIMS Kalyani is an Institute of National Importance set up with the aim to address imbalances at three levels – regional, specialties, and ratio of medical doctors to nurses and other healthcare professionals.",
                btnLink: "https://aiimskalyani.edu.in/aiims-kalyani/"
            },
            quickSummary: {
                paraGraph: "",
                established: "2019",
                institutionType: "Govt.",
                courses: "-",
                address: "AIIMS, NH-34 Connector, Basantapur, Saguna, Kalyani-741245, West Bengal, India.",
                officialSite: "	https://aiimskalyani.edu.in//",
                contacts: "	033 – 29516004",
                affiliatedUniversity: "Statutory Autonomous, AIIMS"
            },
            courses: {
                img: collegeImg,
                seats: " All India Institute of Medical Sciences Kalyani is permitted with below MBBS seats=125",
                tutionfee: "Government Fees ₹ 5856 /Year",
                ranking: " College Ranking is based on How last year candidates Preferred AIIMS Kalyani during last year AIQ and SQ counselling.Ranking = 31 "
            },
            addmision: {
                para: "",
                maleHostel: "yes",
                femaleHostel: "yes",
                otherInfo: "-",
                deanName: "Professor Dr Ramji Singh",
                nodalName: "Professor Dr Kalyan Goswami",
                designation: "Dean",
                officeAddress: "Academic Section Room No 1 First Floor Administrative Building AIIMSKalyani",
                phone: "-",
                email: "academics[at]aiimskalyani.edu.in"
            },
            bondStipend: {
                para: "After MBBS course completion in AIIMS Kalyani, candidates should undergo rural compulsary service . If they skip, they need to pay amount mentioned in service bond as penalty.",
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
                paraFirst: "In the era of information, Information Technology (IT) has become an indispensable need of every enterprise, and AIIMS Kalyani is no exception to it. AIIMS Kalyani being just a year-old institute, the IT infrastructure development is still in its nascent stage; and the IT cell is currently involved in setting up the network for the entire campus. In the ongoing COVID times where e-education has become inevitable, the institute is continuing to provide medical education through online platforms, as well as come up with online assessment methods.  The IT Department endeavors to provide active support in the provision of high-quality medical education and patient care.",
                paraSecond: "The college has a health center with a first aid facility for the students.The college has a library facility for all students.",
            },
            hostel: {
                img: hostel,
                paraFirst: "The college has a boy’s hostel facility which provides good hostel accommodation for the students.",
                paraSecond: "The college has a girl's hostel facility which provides good hostel accommodation for the students.",
            },
            
            counselling: {
                para: "All the NEET Under Graduate (MBBS/BDS) aspirant candidates are hereby informed that counseling for All India Quota seats/ Institutional Quota/ Domicile (internal candidates) of Central Universities (Aligarh Muslim University/ Banaras Hindu University/ University of Delhi/Faculty of Dentistry, Jamia Millia Islamia, Delhi), (wards of ESIC insured persons) seats of colleges under Employee State Insurance Corporation and Armed Forces Medical College, Pune for the Under graduate session 2023-24 will be conducted by Medical Counseling Committee/ Directorate General of Health Services, Ministry of Health and Family Welfare, Government of India",
                link: "https://www.nanochat.in"
            },
            location: {
                img: location,
                para: "All India Institute of Medical Sciences Kalyani, NH - 34 Connector, Basantapur, Saguna West Bengal - 741245, IndiaAIIMS Kalyani's 179.82 acres (0.7277 km2) campus is in Saguna, Kalyani, West Bengal, an affluent suburban residential community 50 kilometres (31 mi) north of downtown Kolkata. It is directly north of the NH 34 Connector (the road connects Kalyani with NH 34), directly west of the Jamuna river and about 12 km east of Hooghly river.[28][29] The campus is located in Seismic Zone III.[3]",
                maplink: "https://mapcarta.com/N9364161511"
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

export default AIIMSKalyani

