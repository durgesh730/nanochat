import React from 'react'
import CollegeDetails from './CollegeDetails'
import collegeImg from '../../images/aiims patna.jpeg'
import infra from '../../images/infrastructure.png'
import hostel from '../../images/hostel.png'
import location from '../../images/location.png'
import hospital from '../../images/hospital (1).png'


const AIIMSPatna = () => {

    const CollegeInfo = [
        {
            title: 'AIIMS PATNA',
            about: {
                collegeImgUrl: collegeImg,
                paraFirst: "All India Institute of Medical Sciences Patna is strategically located to address regional imbalances in healthcare services, research, and training. It was established under Pradhan Mantri Swasthya Suraksha Yojna (PMSSY) during the first phase following the- then Prime Minister Atal Bihari Vajpayee’s visionary announcement in Independence Day Speech on 15th August 2003.",
                paraSecond: "AIIMS Patna was one amongst six hospitals along with Raipur, Bhopal, Bhubaneswar, Jodhpur, and Rishikesh, in the country to improve healthcare facilities, provide quality medical education in super-specialty disciplines, and promote healthcare inclusion in underserved areas.",
                btnLink: "https://aiimspatna.edu.in/about/"
            },
            quickSummary: {
                paraGraph: "",
                established: "2012",
                institutionType: "Govt.",
                courses: "20",
                address: "AIIMS, Aurangabad Road, Phulwari Sharif, Patna-801507, Bihar, India.",
                officialSite: "http://www.aiimspatna.org/",
                contacts: "91-612-2451070",
                affiliatedUniversity: "Statutory Autonomous, AIIMS"
             
            },
            courses: {
                img: collegeImg,
                seats: "AIIMS Patna is permitted with MBBS seats = 125 ",
                tutionfee: "AIIMS Patna MBBS fees for various quota is given as. Apart from tuition fees, you need to pay various other fees during admission.Government Fees = ₹ 5856 /Year",
                ranking: "College Ranking is based on How students Preferred AIIMS Patna during all india and state level counselling. All India Ranking = 24 "
            },
            addmision: {
                para: "Find AIIMS Patna additional details given by medical college to Medical Counselling committee.",
                maleHostel: "yes",
                femaleHostel: "yes",
                otherInfo: "-",
                deanName: "Dr. Saurabh Varshney",
                nodalName: "Dr. Ayan Banerjee",
                designation: "Reporting Official",
                officeAddress: "Dean Office Admin Building AIIMS Patna",
                phone: "0612-2451006",
                email: "drayanb[at]aiimspatna.org"
            },
            bondStipend: {
                para: "Find AIIMS Patna PG courses few years of compulsary service and penalty below",
                totalYear: 3,
                penalty: "₹ 2500000",
                stipend:"₹ 68545 /month"
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
                paraFirst: "To Be Updated",
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
                para: "------------",
                maplink: "https://www.google.com/maps/place/AIIMS+Patna/@25.5629068,85.0364629,17z/data=!3m1!4b1!4m6!3m5!1s0x39f2a9ea2ae04fd9:0xb2efd2a31008d750!8m2!3d25.562902!4d85.0413338!16s%2Fm%2F0k0n90r?entry=ttu"
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

export default AIIMSPatna
