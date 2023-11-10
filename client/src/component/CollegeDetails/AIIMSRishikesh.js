import React from 'react'
import CollegeDetails from './CollegeDetails'
import collegeImg from '../../images/aiims rishikesh.jpeg'
import infra from '../../images/infrastructure.png'
import hostel from '../../images/hostel.png'
import location from '../../images/location.png'
import hospital from '../../images/hospital (1).png'


const AIIMSDelhi = () => {

    const CollegeInfo = [
        {
            title: 'AIIMS RISHIKESH',
            about: {
                collegeImgUrl: collegeImg,
                paraFirst: "Situated on the bank of sacred Ganges, amidst mountains and woods in the Yoga Capital of world-Rishikesh, All India Institute of Medical Sciences aims to serve country by imparting knowledge, providing excellent health-care at affordable cost and investing in the area of medical research. It was established under the Pradhan Mantri Swasthya Suraksha Yojna’s first phase and supported to be an autonomous body by the All India Institute of Medical Sciences (Amendment) Bill, 2012.",
                paraSecond: " Institute follows the globally prevailing principles of education and focuses on development of skills and conceptual knowledge among its students. To achieve the same, institute has adopted newer methods of learning even at undergraduate level that pursue student as a life-long active learner.",
                btnLink: "https://aiimsrishikesh.edu.in/a1_1/?page_id=205"
            },
            quickSummary: {
                paraGraph: "",
                established: "2012",
                institutionType: "Govt.",
                courses: "62",
                address: "AIIMS, Virbhadra Road Near Barrage, Shivaji Nagar, Sturida Colony, Rishikesh, Uttarakhand 249203",
                officialSite: "http://aiimsrishikesh.edu.in/",
                contacts: "0135-2462929, 0135-2462503",
                affiliatedUniversity: "N/A"
             
            },
            courses: {
                img: collegeImg,
                seats: "All India Institute of Medical Sciences Rishikesh is permitted with MBBS seats = 132",
                tutionfee: "AIIMS Rishikesh MBBS fees for various quota is given as. Apart from tuition fees, you need to pay various other fees during admission. Government Fees = ₹ 5856/Year",
                ranking: "College Ranking is based on How previous year parents Preferred All India Institute of Medical Sciences Rishikesh during NEET 2022 AIQ and State counselling. All India Ranking = 17  "
            },
            addmision: {
                para: "Find AIIMS Rishikesh additional details given by this medical institution to Medical Counselling committee.",
                maleHostel: "yes",
                femaleHostel: "yes",
                otherInfo: "-",
                deanName: "Prof. Manoj Kumar Gupta",
                nodalName: "Shri Rajeev Chaudhary",
                designation: "Reporting Official",
                officeAddress: "Registrar office AIIMS Rishikesh",
                phone: "0135-2460840",
                email: "regisoff[at]aiimsrishikesh.edu.in"
            },
            bondStipend: {
                para: "After MBBS course completion in AIIMS Rishikesh, candidates should undergo few years of compulsary service . If they skip, they need to pay service bond penalty.",
                totalYear: 0,
                penalty: 0,
                stipend:"26300 /month"
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
                maplink: "https://www.google.com/maps/d/viewer?mid=1PDXvZROrqtPF7i6kCPzY-12hxTw&hl=en&ll=30.077970000000025%2C78.28552699999999&z=17"
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

export default AIIMSDelhi
