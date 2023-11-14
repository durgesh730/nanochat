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
                paraFirst: "The university has a wide range of facilities for its students. The campus of the varsity has modern and upgraded infrastructure. All India Institute of Medical Sciences Raipur facilities are separate boys hostel and girls hostel, modern gym, well stocked library etc.The hospital and college complex takes up 64 acres, while the residential complex takes up the remaining 40 acres. All India Institute of Medical Sciences Raipur campus is spread out over 104 acres. The AIIMS Raipur hospital has been approved for 960 beds and 30 operating theatres. All India Institute of Medical Sciences, Raipur also includes four modular operating rooms, MGPS, CT scan, other diagnostic capabilities, and two on-campus pharmacies. In addition to the Medical College Hospital (MCH), the site is home to a number of different hospitals and institutions, including the Dental College, College of Nursing, State Virology Lab, and others. ",
                paraSecond: "The library has an ample number of reading material for students and faculty members. AIIMS Raipur also has sports facilities at the campus for its students. The university has modern medical facilities and IT infrastructure. AIIMS Raipur facilities ensure students do not face any inconvenience during their time at the campus. ",
            },
            hostel: {
                img: hostel,
                paraFirst: "All India Institute of Medical Sciences Raipur facilities are separate boys hostel and girls hostel",
                paraSecond: "The university has a hostel for boys students. It offers comfortable accommodation to students. The rooms of the boys hostel are ventilated and spacious.AIIMS Raipur has a separate hostel for girls students. The girls hostel of the university has all the basic facilities and the rooms are spacious and ventilated.",
            },
            hospital: {
                img: hospital,
                paraFirst: "All India Institute of Medical Sciences (AIIMS) in Raipur, Chhattisgarh was established in 2014 by the Ministry of Health & Family Welfare. The hospital has departments of Anatomy, Anesthesiology, Biochemistry, Burns, Plastic Surgery, Cardiology, Cardiothoracic Surgery, Family Medicine, Dentistry, Dermatology, ENT, Forensic Medicine, Toxicology, Gastroenterology, General Medicine, General Surgery, Medical Oncology, Haematology, Microbiology, Neonatology, Neurology, Neurosurgery, Nuclear Medicine, Obstetrics, Gynecology, Ophthalmology, Orthopaedics, Pediatrics, Pediatrics Surgery, Pharmacology, Physical Medicine, Rehabilitation, Physiology, Psychiatry, Pulmonary Medicine, Surgical Gastroenterology, Surgical Oncology, and Urology.", 
                paraSecond:"OPD registration timing is between 8:30 am to 10:30 am from Monday to Saturday. The hospital provides 24x7 emergency care.",
               
            },
            counselling: {
                para: "All the NEET Under Graduate (MBBS/BDS) aspirant candidates are hereby informed that counseling for All India Quota seats/ Institutional Quota/ Domicile (internal candidates) of Central Universities (Aligarh Muslim University/ Banaras Hindu University/ University of Delhi/Faculty of Dentistry, Jamia Millia Islamia, Delhi), (wards of ESIC insured persons) seats of colleges under Employee State Insurance Corporation and Armed Forces Medical College, Pune for the Under graduate session 2023-24 will be conducted by Medical Counseling Committee/ Directorate General of Health Services, Ministry of Health and Family Welfare, Government of India",
                link: "https://www.nanochat.in"
            },
            location: {
                img: location,
                para: "AIIMS Raipur Location is located at Gate No.1, Great Eastern Road, opposite Gurudwara, AIIMS Campus, Tatibandh, Raipur, Chhattisgarh. The nearest airport to the varsity is Swami Vivekananda International Airport. It is located 25 km away from the campus. With a distance of 7.6 km, Raipur Junction Railway Station is the nearest railway station to the varsity. Amananka Bus Depot is the closest bus depot to All India Institute of Medical Sciences Raipur. The university is situated 3.3 km away from Amananka Bus Depot. ",
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
