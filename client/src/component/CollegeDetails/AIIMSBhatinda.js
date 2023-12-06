import React from 'react'
import CollegeDetails from './CollegeDetails'
import collegeImg from '../../images/AIIMS-Bathinda.png'
import infra from '../../images/infrastructure.png'
import hostel from '../../images/hostel.png'
import location from '../../images/location.png'
import hospital from '../../images/hospital (1).png'


const AIIMSBhatinda = () => {

    const CollegeInfo = [
        {
            title: 'AIIMS BHATINDA',
            about: {
                collegeImgUrl: collegeImg,
                paraFirst: "AIIMS, Bathinda is one of the premier healthcare institution established by the Ministry of Health & Family Welfare, Government of India under the Pradhan Mantri Swasthya Suraksha Yojna (PMSSY).",
                paraSecond: "All India Institute of Medical Sciences, Bathinda (AIIMS Bathinda) is a medical college and medical research public university based in Bathinda, Punjab, India.[1] As one of the All India Institutes of Medical Sciences, it operates autonomously under the Ministry of Health and Family Welfare. AIIMS Bathinda spreads over a large area of about 177 Acres and is surrounded by lush green parks. It became operational in 2019, one of the six AIIMS to do so in 2019.",
                btnLink: "https://aiimsbathinda.edu.in/"
            },
            quickSummary: {
                paraGraph: "",
                established: "2019",
                institutionType: "Govt.",
                courses: "33",
                address: "AIIMS, Jodhpur Romana, near Giani Zail Singh College, Mandi Dabwali Road, Bathinda-151001, Punjab, India.",
                officialSite: "http://aiimsbathinda.edu.in/",
                contacts: "-",
                affiliatedUniversity: "Statutory Autonomous, AIIMS"
            },
            courses: {
                img: collegeImg,
                seats: "AIIMS Punjab contains below mentioned MBBS seats= 132",
                tutionfee: "AIIMS Bathinda MBBS fees for various quota is given below. Apart from tuition fees, you need to pay various other fees during admission. Government Fees = ₹ 5856 /Year",
                ranking: "College Ranking is based on How last year candidates Preferred AIIMS Bathinda during AIQ and SQ of NEET 2022 counselling.	= 31 "
            },
            addmision: {
                para: "Find AIIMS Bathinda additional details given by this institution to Medical Counselling committee..",
                maleHostel: "yes",
                femaleHostel: "yes",
                otherInfo: "Academic Fee and Hostel fee is one time fee for the entire course",
                deanName: "	Dr DK Singh",
                nodalName: "Dr Bhola Nath",
                designation: "Professor",
                officeAddress: "Jodhpur Romana near Giani Zail Singh College Mandi Dabwali RoadBathinda Punjab",
                phone: "0164-2867670",
                email: "ugcounselling2021aiimsbti[at]gmail.com"
            },
            bondStipend: {
                para: "After MBBS course completion in All India Institute of Medical Sciences Bathinda, candidates should undergo compulsory rural service . If they skip, they need to pay penalty as per compulsary service bond.",
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
                registrationfee: 20,
                studentUnionFee: 63,
                messFeeVeg: 3200,
            },
            infrastructure: {
                img: infra,
                paraFirst: "All India Institute of Medical Sciences Bathinda offers many facilities for the students and faculty members. The AIIMS Bathinda facilities include a library, medical facilities, sports, laboratories, and many more. The library of AIIMS Bathinda has useful textbooks and reference books for students and staff. The college also provides medical facilities in case of emergency. Other AIIMS Bathinda facilities include the auditorium and transportation facilities.",
                paraSecond: "The college has laboratory facilities for the students. The AIIMS Bathinda has a department-based laboratory to improve their practical knowledge.The college provides library facilities for the students and staff. The AIIMS Bathinda library has a collection of books, journals and many more that are useful for students. The college provides medical facilities for all the students and staff. The AIIMS Bathinda medical facilities include a health centre with a first aid facility.The college offers sports facilities for the students. The  AIIMS Bathinda facilities improve the physical health of the students",
            },
            hostel: {
                img: hostel,
                paraFirst: "AIIMS Bathinda has all adequate accommodation facilities for Both Boys and Girls pursuing studies in campus.The Authorities are extremely helpful and hear the demands of students with utmost priority. There are 2 Hostels for MBBS Students + Residential Area.Each Hostel is a 5 Floored Building.",
                paraSecond: "Each Hostel have 2 Elevators and 3 Staircases including Proper Fire Exits Paths. As of Now, the rooms are double occupancy, and the students get common washrooms (2 Big Well Equipped Common Washrooms), and also a washroom for PwD Students.",
            },
            hospital: {
                img: hospital,
                paraFirst: "AIIMS is currently not a single hospital, but a conglomerate of facilities. It has over 1,500 units located in the main hospital, the Ophthalmological Center of dr.Rajendra Prasad, Cardiac Surgery Center, Neuroscience Center, Hospital Center, Rotary Institute, and Detox Center. This facility complex serves approximately 1.5 million outpatients and 80,000 inpatients annually.",
                paraSecond: "The number of surgical operations performed at AIIMS last year amounted to over 100,000. The total number of beds available at Major Hospital and Dr.B.R. Ambedkar Institute Rotary Cancer Hospital, Dr.RP Center, NDDTC, CCM, NCI Jhajjar has 2,792 beds, including 288 private sector beds. Rural/Urban Health Training Centres Ballabgarh 35 km distance from the college",
            },
            counselling: {
                para: "All the NEET Under Graduate (MBBS/BDS) aspirant candidates are hereby informed that counseling for All India Quota seats/ Institutional Quota/ Domicile (internal candidates) of Central Universities (Aligarh Muslim University/ Banaras Hindu University/ University of Delhi/Faculty of Dentistry, Jamia Millia Islamia, Delhi), (wards of ESIC insured persons) seats of colleges under Employee State Insurance Corporation and Armed Forces Medical College, Pune for the Under graduate session 2023-24 will be conducted by Medical Counseling Committee/ Directorate General of Health Services, Ministry of Health and Family Welfare, Government of India",
                link: "https://www.nanochat.in"
            },
            location: {
                img: location,
                para: "The distance between Bathinda and Aiims is 286 km. The road distance is 354.8 km.he driving distance between Bathinda to Aiims is 355 km. It takes approximately 5h 11m to drive from Bathinda to Aiims.The quickest flight from Bhatinda Airport to Delhi Airport is the direct flight which takes 1h 10m.",
                maplink: "https://www.google.com/maps/place/All+India+Institute+of+Medical+Sciences,+Bathinda/@30.1608913,74.9290558,17z/data=!3m1!4b1!4m6!3m5!1s0x39173232102154af:0x38c03cd69ea6d821!8m2!3d30.1608913!4d74.9290558!16s%2Fg%2F11v60dtc6m?entry=ttu"
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

export default AIIMSBhatinda
