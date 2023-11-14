import React from 'react'
import CollegeDetails from './CollegeDetails'
import collegeImg from '../../images/aiims raipur.jpeg'
import infra from '../../images/infrastructure.png'
import hostel from '../../images/hostel.png'
import location from '../../images/location.png'
import hospital from '../../images/hospital (1).png'


const  AIIMSRaipur = () => {

    const CollegeInfo = [
        {
            title: 'AIIMS RAIPUR ',
            about: {
                collegeImgUrl: collegeImg,
                paraFirst: "AIIMS Raipur is one of the SIX AIIMS healthcare institutes being established by the Ministry of Health & Family Welfare, Government of India under the Pradhan Mantri Swasthya Suraksha Yojna (PMSSY).",
                paraSecond: "AIIMS Raipur is one of the SIX AIIMS healthcare institutes being established by the Ministry of Health & Family Welfare, Government of India under the Pradhan Mantri Swasthya Suraksha Yojna (PMSSY). With the aim of correcting regional imbalances in quality tertiary level healthcare in the country, and attaining self sufficiency in graduate and postgraduate medical education and training the PMSSY planned to set up 6 new AIIMS like institutions in under served areas of the country.",
                btnLink: "https://www.aiimsraipur.edu.in/user/about.php"
            },
            quickSummary: {
                paraGraph: "",
                established: "2012",
                institutionType: "Govt.",
                courses: "23",
                address: "AIIMS, Great Eastern Road, AIIMS Campus, Tatibandh, Raipur-492099, Chhattisgarh, India.",
                officialSite: "	http://www.aiimsraipur.edu.in/index.php",
                contacts: "	0771-2572999",
                affiliatedUniversity: "Statutory Autonomous, AIIMS"
             
            },
            courses: {
                img: collegeImg,
                seats: "AIIMS Raipur is permitted with MBBS seats = 125",
                tutionfee: "",
                ranking: "College Ranking is based on How Parents Preferred AIIMS Raipur during NEET UG 2023 MCC and state counselling. All India Ranking = 21 "
            },
            addmision: {
                para: "Find AIIMS Raipur additional details given by college to Medical Counselling committee.",
                maleHostel: "yes",
                femaleHostel: "yes",
                otherInfo: "	Fee of Rs 5856 is for the entire duration of MBBS course to be paid at the time of admission and is not refundable",
                deanName: "	Dr. Nitin M. Nagarkar",
                nodalName: "Dr. Nitin Gaikwad",
                designation: "Reporting Official",
                officeAddress: "Registrar Office Academic Section 2nd Floor Medical College Building AIIMS Raipur CG",
                phone: "0771-2970617",
                email: "registrar[at]aiimsraipur.edu.in"
            },
            bondStipend: {
                para: "Find All India Institute of Medical Sciences Raipur PG courses compulsory rural service and bond penalty amount below.",
                totalYear: 2,
                penalty: "₹5000000",
                stipend:"₹ 53550 /month"
            },
            fee: {
                tutionfee: "",
                potfundHostel: "",
                hostelRent: "",
                messFeeNonVeg: "",
                gymfee: "",
                hosteldeposit: "",
                electricityCharge: "",
                messDeposit: "",
                cautionDeposit: "",
                laboratoryfee: "",
                registrationfee: "",
                studentUnionFee: "",
                messFeeVeg: "",
            },
            infrastructure: {
                img: infra,
                paraFirst: "------",
                paraSecond: "-------",
            },
            hostel: {
                img: hostel,
                paraFirst: "------",
                paraSecond: "------",
            },
            hospital: {
                img: hospital,
                paraFirst: "------",
                paraSecond: "------",
            },
            counselling: {
                para: "All the NEET Under Graduate (MBBS/BDS) aspirant candidates are hereby informed that counseling for All India Quota seats/ Institutional Quota/ Domicile (internal candidates) of Central Universities (Aligarh Muslim University/ Banaras Hindu University/ University of Delhi/Faculty of Dentistry, Jamia Millia Islamia, Delhi), (wards of ESIC insured persons) seats of colleges under Employee State Insurance Corporation and Armed Forces Medical College, Pune for the Under graduate session 2023-24 will be conducted by Medical Counseling Committee/ Directorate General of Health Services, Ministry of Health and Family Welfare, Government of India",
                link: "https://www.nanochat.in"
            },
            location: {
                img: location,
                para: "------",
                maplink: "https://www.google.com/maps/place/All+India+Institute+Of+Medical+Sciences,+Raipur/@21.2569612,81.5743692,16z/data=!4m10!1m2!2m1!1saiims+raipur!3m6!1s0x3a28de23ea073ba1:0x9de4d779d976c7c9!8m2!3d21.2569612!4d81.579519!15sCgxhaWltcyByYWlwdXKSAQhob3NwaXRhbOABAA!16s%2Fm%2F0n481lx?entry=ttu"
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

export default AIIMSRaipur
