import React from 'react'
import "../../style/CollegeDetails.css";
import CollegeDetails from './CollegeDetails';

import infra from '../../images/infrastructure.png'
import hostel from '../../images/hostel.png'
import location from '../../images/location.png'
import collegeImg from '../../images/aiims madurai.jpeg'

const AIIMSMadurai = () => {

    const CollegeInfo = [
        {
            title: 'AIIMS MADURAI',
            about: {
                collegeImgUrl: collegeImg,
                paraFirst: "All India Institute of Medical Sciences, Madurai is an ‘Institute of National Importance’ established under the Pradhan Mantri Swasthya Suraksha Yojna (PMSSY) of the Ministry of Health and Family Welfare, Government of India. The AIIMS Madurai provides only one course which is M.B.B.S. ",
                paraSecond: "The AIIMS Madurai admissions are offered in the stream of Medicine and Allied Science based on NEET scores obtained by the students. AIIMS Madurai also provides many facilities for the benefit of the students and staff.",
                btnLink: "https://jipmer.edu.in/aiims-madurai"
            },
            quickSummary: {
                paraGraph: "",
                established: "2021",
                institutionType: "Govt.",
                courses: "-",
                address: "V2M4+PFH, Madurai, Tamil Nadu 625006",
                officialSite: "	http://www.aiimsmadurai.edu.in/",
                contacts: "	(+91-11-26562122/25/33/44, 26567373, 26962819).",
                affiliatedUniversity: "Statutory Autonomous, AIIMS"
            },
            courses: {
                img: collegeImg,
                seats: " AIIMS Madurai contains below mentioned MBBS seats = 50",
                tutionfee: "All India Institute of Medical Sciences Madurai MBBS fees for various quota is given below. Apart from tuition fees, you need to pay various other fees during admission.Government Fees ₹ 5856 /Year",
                ranking: " College Ranking is based on How Parents Preferred AIIMS Madurai during all india and state level counselling.Ranking = 82 "
            },
            addmision: {
                para: "Find AIIMS Madurai additional details given by college to Medical Counselling committee.",
                maleHostel: "yes",
                femaleHostel: "yes",
                otherInfo: "The MBBS classes for AIIMS Madurai will be temporarily conducted from State or Union govt medical college till the main campus comes up.",
                deanName: "Prof Dr M Hanumantha Rao",
                nodalName: "Dr Kusa Kumar Shaha",
                designation: "Dean",
                officeAddress: "JIPMER Puducherry",
                phone: "0755-2672355",
                email: "aiimsmadurai2020[at]gmail.com"
            },
            bondStipend: {
                para: "After MBBS course completion in AIIMS Madurai, candidates should undergo few years of compulsary service . If they skip, they need to pay penalty as per compulsary service bond.",
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
                paraFirst: "All India Institute of Medical Sciences, Madurai offers many facilities for the students, faculty and staff members. The AIIMS Madurai facilities include a library, medical facilities, gym, laboratories, and many more. The library of AIIMS Madurai has useful textbooks and reference books for students and staff. The college offers separate hostels for boys and girls. The AIIMS Madurai gym facilities help students to relax between their busy schedules.",
                paraSecond: "The college provides library facilities for the students and staff. The AIIMS Madurai library has a collection of books, journals and many more that are useful for students.The AIIMS Madurai offers excellent IT infrastructural facilities for all the students, staff and faculty.  ",
            },
            hostel: {
                img: hostel,
                paraFirst: "Boys Hostel = The AIIMS Madurai offers separate hostels for boys. The hostels are well-furnished and are equipped with modern appliances",
                paraSecond: "Girls Hostel = The college offers separate hostels for girls. The AIIMS Madurai provides good accommodation facilities and is safe and secure for the hostel students.",
            },
            
            counselling: {
                para: "All the NEET Under Graduate (MBBS/BDS) aspirant candidates are hereby informed that counseling for All India Quota seats/ Institutional Quota/ Domicile (internal candidates) of Central Universities (Aligarh Muslim University/ Banaras Hindu University/ University of Delhi/Faculty of Dentistry, Jamia Millia Islamia, Delhi), (wards of ESIC insured persons) seats of colleges under Employee State Insurance Corporation and Armed Forces Medical College, Pune for the Under graduate session 2023-24 will be conducted by Medical Counseling Committee/ Directorate General of Health Services, Ministry of Health and Family Welfare, Government of India",
                link: "https://www.nanochat.in"
            },
            location: {
                img: location,
                para: "The college is located in Madurai, Tamil Nadu. The distance between Tirumangalam Railway Station and AIIMS Madurai is 10.4 kilometres. The Madurai Airport is 25.8 km away from the college. Mullai Nagar Bus Stop is one of the closest bus stops to AIIMS Madurai. Students can reach the college by taxi or cab.",
                maplink: "https://www.google.com/maps/place/AIIMS+Madurai/@9.8829375,78.0060625,17z/data=!3m1!4b1!4m6!3m5!1s0x3b00cdf57921fbad:0x4fb83ab41a3eaad2!8m2!3d9.8829375!4d78.0060625!16s%2Fg%2F11l22t2g8p?entry=ttu"
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

export default AIIMSMadurai
