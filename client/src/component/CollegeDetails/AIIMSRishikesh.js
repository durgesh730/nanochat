import React from 'react'
import CollegeDetails from './CollegeDetails'
import collegeImg from '../../images/aiims rishikesh.jpeg'
import infra from '../../images/infrastructure.png'
import hostel from '../../images/hostel.png'
import location from '../../images/location.png'
import hospital from '../../images/hospital (1).png'


const AIIMSRishikesh = () => {

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
                paraFirst: "The college provides many facilities for both the students and staff members. Some of the AIIMS Rishikesh facilities are the boys hostel, girls hostel, library, medical clinic, sports, auditorium, laboratories, mess and IT infrastructure. These facilities are provided with the overall development of the students. The peaceful environment of the hostels facilitates focused learning among the students. Students are comfortable in the resident-like accommodation provided in the hostels. All India Institute of Medical Sciences Rishikesh facilities also include 24X7 access to the library.",
                paraSecond: "The library resources include textbooks, reference books, journals, periodicals, newspapers, magazines, e-books, e-journals, etc. The long-term needs of underprivileged students are also taken care of by the college library. Both indoor and outdoor games are provided by the AIIMS Rishikesh sports department.",
            },
            hostel: {
                img: hostel,
                paraFirst: "The hostel rooms are newly constructed, well ventilated, and furnished with furniture like a bed, table, chairs, cupboards, and bookshelf. There is a provision of electricity power backup to each room and geysers in all washroom areas, water coolers (with ROs) on each floor.All the AIIMS Rishikesh hostels have common rooms with TV, cable connections, reading rooms in UG or nursing hostels, a library with more than 250 books in boys hostel, subscription to newspapers & display on newspaper stands in all common areas of each hostel. ",
                paraSecond: "The hostel premises are equipped with a modern C.C.T.V camera facility for round the clock monitoring, provision of canteen (24×7) in hostel area and uninterrupted power supply in common facility areas of the hostels are available.The administration is working towards making the hostels Wi-Fi enabled. There is a dedicated and safe parking facility available for the students, residents, and guests.",
            },
            hospital: {
                img: hospital,
                paraFirst: "AIIMS Rishikesh has 25 functional modular operating theatres, 17 functional super speciality and 18 speciality functional. AIIMS Rishikesh has collaborated with IIT Roorkee and Patanjali Yogpeeth on various research endeavors, the latter to bolster AYUSH research. It has invested considerably in intramural research grants to expand the breadth and depth of research. ",
                paraSecond: "It has a multi-diagnostic research unit to support lab-based studies. Besides, the Advanced Center of Continuous Professional Development provides ongoing support to faculty and other medical professionals for improving clinical, research, and teaching skills. Along with a growing footfall in routine outpatient clinics, 85 specialized clinics have been added since 2018-19. ",
            },
            counselling: {
                para: "All the NEET Under Graduate (MBBS/BDS) aspirant candidates are hereby informed that counseling for All India Quota seats/ Institutional Quota/ Domicile (internal candidates) of Central Universities (Aligarh Muslim University/ Banaras Hindu University/ University of Delhi/Faculty of Dentistry, Jamia Millia Islamia, Delhi), (wards of ESIC insured persons) seats of colleges under Employee State Insurance Corporation and Armed Forces Medical College, Pune for the Under graduate session 2023-24 will be conducted by Medical Counseling Committee/ Directorate General of Health Services, Ministry of Health and Family Welfare, Government of India",
                link: "https://www.nanochat.in"
            },
            location: {
                img: location,
                para: "Rishikesh doesnt have an airport of its own. Rather, the Jolly Grant Airport of Dehradun(DED), about 14 km from Rishikesh, provides the nearest air link from the city.Rishikesh has a railway station of its own. However, most people prefer Haridwar, which is 25 km from Rishikesh, since not many direct trains halt at the said station. Many trains connecting Haridwar with major cities of India, such as Delhi and Dehradun(DED), ply on a daily basis. So, one can get down at Haridwar and take a cab, auto rickshaw or bus for reaching Rishikesh.Rishikesh is well connected with all the major destinations of the region, like Delhi (227 Km), Dehradun(DED) (42 Km), Haridwar (25 Km) and so on.From Delhi, one has to take NH 58 to reach Rishikesh.On the other hand, from Dehradun(DED), it can be reached taking NH 72. Buses as well as taxis are easily available for Rishikesh, from all these places.",
                maplink: "https://www.google.com/maps/place/All+India+Institute+of+Medical+Sciences,+Rishikesh/@30.0787546,78.2822874,17z/data=!4m10!1m2!2m1!1saiims+rishikesh!3m6!1s0x39093e1bc5e50819:0xfa6fe1f06092aa14!8m2!3d30.0793525!4d78.2861864!15sCg9haWltcyByaXNoaWtlc2haESIPYWlpbXMgcmlzaGlrZXNokgEObWVkaWNhbF9zY2hvb2yaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUXRhVFZNVTNSUlJSQULgAQA!16s%2Fg%2F11clyy4_5t?entry=ttu"
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

export default AIIMSRishikesh
