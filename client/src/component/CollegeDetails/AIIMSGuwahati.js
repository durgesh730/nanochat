import React from 'react'
import CollegeDetails from './CollegeDetails'
import collegeImg from '../../images/aiimsguwahati.png'
import infra from '../../images/infrastructure.png'
import hostel from '../../images/hostel.png'
import location from '../../images/location.png'
import hospital from '../../images/hospital (1).png'


const AIIMSGuwahati = () => {

    const CollegeInfo = [
        {
            title: 'AIIMS GUWAHATI',
            about: {
                collegeImgUrl: collegeImg,
                paraFirst: "Established in May 2017, The All India Institute of Medical Sciences Guwahati ia an autonomous Institute of National Importance under the Ministry of Health & Family Welfare - Government of India. AIIMS Guwahati comprises of a medical college with a yearly intake of 125 MBBS students and a nursing college with a yearly intake of 75 students.  The duration of AIIMS Guwahati courses is 5 years and 6 months. ",
                paraSecond: "The candidates will be shortlisted for AIIMS Guwahati admissions based on the scores obtained in the NEET exam. The institute provides well-structured facilities on campus. The AIIMS Guwahati facilities include a library, laboratories, sports facilities, a medical hospital, and many other facilities.",
                btnLink: "https://aiimsguwahati.ac.in/page/about"
            },
            quickSummary: {
                paraGraph: "",
                established: "2020",
                institutionType: "Govt.",
                courses: "-",
                address: "Silbharal Changsari, Guwahati, Assam 781030",
                officialSite: "	https://aiimsguwahati.ac.in",
                contacts: "011-26588500, 011-26588700, 011-26589900",
                affiliatedUniversity: "Statutory Autonomous, AIIMS"
            },
            courses: {
                img: collegeImg,
                seats: " MBBS Seats available in AIIMS Guwahati is 50",
                tutionfee: "All India Institute of Medical Sciences Guwahati MBBS fees for various quota is given below. Apart from tuition fees, you need to pay various other fees during admission.Government Fees ₹ 5856 /Year",
                ranking: " College Ranking is based on How students Preferred AIIMS Guwahati during AIQ and SQ of NEET 2022 counselling.Ranking = 67 "
            },
            addmision: {
                para: "",
                maleHostel: "yes",
                femaleHostel: "yes",
                otherInfo: "",
                deanName: "Prof. (Dr.) Manasi Bhattacharjee",
                nodalName: "Dr. Sanjib Rawat",
                designation: "Reporting Official",
                officeAddress: "Guwahati, Changsari, Kamrup, Assam ",
                phone: "-",
                email: "registrar[at]aiimsguwahati.edu.in"
            },
            bondStipend: {
                para: "",
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
                paraFirst: "The All India Institute of Medical Sciences Guwahati offers multiple facilities on campus for students, staff, and faculty members. The AIIMS Guwahati facilities include a library, laboratories for each department, a parking facility on campus for students and staff members, and sports like indoor and outdoor games. AIIMS Guwahati facilities include a separate health centre on campus which assists with the first aid facility.  AIIMS Guwahari has and Anti-ragging committee. ",
                paraSecond: "The institute provides a separate laboratory for each department. The laboratory sessions will be conducted by faculty to students. The laboratories are equipped with the required modern technology. The laboratory sessions are conducted to build practical skills in students. ",
            },
            hostel: {
                img: hostel,
                paraFirst: "Boys Hostel-The University has a boy’s hostel facility which provides good hostel accommodation for the students.The boys' hostel provides comfortable living spaces, ensuring a conducive environment for study, rest, and personal growth. The facilities are designed to meet students' needs, enabling them to focus on their academic journey.",
                paraSecond: "Girls Hostel-The University has a girl's hostel facility which provides good hostel accommodation for the students.The girls' hostel offers a safe and secure living environment, promoting a sense of belonging and community among the residents. The comfortable accommodations cater to students' well-being, allowing them to thrive academically.",
            },
            hospital: {
                img: hospital,
                paraFirst: "The hospital has departments of Anaesthesiology, Anatomy, Biochemistry, Burns, Plastic Surgery, Cardiology, Cardiothoracic Surgery, Family Medicine, Dentistry, Dermatology, STD, Leprosy, Endocrinology, Metabolism, Forensic Medicine, Toxicology, General Medicine, General Surgery, Medical Oncology, Hematology, Microbiology, Neonatology, Nephrology, Neurology, Neurosurgery, Nuclear Medicine, Obstetrics, Gynaecology, Ophthalmology, Orthopaedics, Otorhinolaryngology, ENT, Paediatrics, Pediatric Surgery, Physical Medicine, Physiology, Psychiatry, Pulmonary Medicine, Gastroenterology, Surgical Oncology, and Urology.",
                paraSecond: "It also provides facilities of Trauma, Emergency Care, Blood Bank, Pharmacy, Radio-Diagnosis, Radiotherapy, and Laboratory Medicine.",
            },
            counselling: {
                para: "All the NEET Under Graduate (MBBS/BDS) aspirant candidates are hereby informed that counseling for All India Quota seats/ Institutional Quota/ Domicile (internal candidates) of Central Universities (Aligarh Muslim University/ Banaras Hindu University/ University of Delhi/Faculty of Dentistry, Jamia Millia Islamia, Delhi), (wards of ESIC insured persons) seats of colleges under Employee State Insurance Corporation and Armed Forces Medical College, Pune for the Under graduate session 2023-24 will be conducted by Medical Counseling Committee/ Directorate General of Health Services, Ministry of Health and Family Welfare, Government of India",
                link: "https://www.nanochat.in"
            },
            location: {
                img: location,
                para: "Guwahati is connected to other cities in Assam and to Dimapur in Nagaland, through NH 27. Rupnath Brahma Inter-State Bus Terminus (ISBT) is the main intercity transit point. There are a number of private and public buses that facilitate intercity and interstate transport. Distance between Rupnath Brahma Inter-State Bus Terminus (ISBT) to AIIMS Guwahati is around 23km. Distance between Kamakhya Temple to AIIMS Guwahati is around 21.5km.Guwahati Railway Station is located in the Paltan Bazar area. It is the main railway station of the city. Distance between Guwahati Railway Station to AIIMS Guwahati is around 23.2km. It is connected to many towns and cities in the state of Assam as well as cities across the country such as Delhi, Trivandrum, Bangalore and Chandigarh. The nearest railway station to AIIMS Guwahati is Changsari Railway Station. It is around 5km away from AIIMS Guwahati.",
                maplink: "https://www.google.com/maps/place/All+India+Institute+of+Medical+Sciences,+Guwahati/@26.2305036,91.5438165,12z/data=!4m6!3m5!1s0x375a51303807a927:0x10f8ebea82f31549!8m2!3d26.2535412!4d91.6974749!16s%2Fg%2F11qrctrmvb?entry=ttu"
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

export default AIIMSGuwahati
