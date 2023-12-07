import React from 'react'
import CollegeDetails from './CollegeDetails'
import collegeImg from '../../images/aiimsrajkot.png'
import infra from '../../images/infrastructure.png'
import hostel from '../../images/hostel.png'
import location from '../../images/location.png'
import hospital from '../../images/hospital (1).png'


const AIIMSRajkot = () => {

    const CollegeInfo = [
        {
            title: 'AIIMS RAJKOT',
            about: {
                collegeImgUrl: collegeImg,
                paraFirst: "Established under the Pradhan Mantri Swasthya Suraksha Yojna (PMSSY) of the Ministry of Health and Family Welfare, Government of India, All India Institute Of Medical Sciences Rajkot is an ‘Institute of National Importance’. The AIIMS Rajkot provides only one UG course which is Bachelor of Medicine, Bachelor of Surgery (MBBS).",
                paraSecond: "Admission to AIIMS, Rajkot for MBBS is granted on the scores obtained by the student in the NEET UG entrance examination. AIIMS Rajkot also provides many facilities for the benefit of the students. The objective of AIIMS, Rajkot is to bring together in one place educational facilities of the highest order for the training of personnel in all branches of health activities. The institute of considered one of the best government colleges in the country. ",
                btnLink: "https://aiimsrajkot.edu.in/"
            },
            quickSummary: {
                paraGraph: "",
                established: "2020",
                institutionType: "Govt.",
                courses: "-",
                address: "	All India Institute of Medical Sciences, Rajkot, Gujarat, India 360006",
                officialSite: "	https://aiimsrajkot.edu.in/",
                contacts: "	0291 – 2740741",
                affiliatedUniversity: "Statutory Autonomous, AIIMS"
            },
            courses: {
                img: collegeImg,
                seats: " All India Institute of Medical Sciences Rajkot contains below mentioned MBBS seats = 50",
                tutionfee: "AIIMS Rajkot MBBS fees for various quota is given below. Apart from tuition fees, you need to pay various other fees during admission.Government Fees ₹ 5856 /Year",
                ranking: "College Ranking is based on How Parents Preferred All India Institute of Medical Sciences Rajkot during AIQ and SQ of NEET 2022 counselling. Ranking = 46 "
            },
            addmision: {
                para: "",
                maleHostel: "yes",
                femaleHostel: "yes",
                otherInfo: "",
                deanName: "Dr Prof Col CDS Katoch",
                nodalName: "Dr Vivek Sharma",
                designation: "Dean",
                officeAddress: "AIIMS Rajkot",
                phone: "951-0469007",
                email: "drviveksharmazen[at]gmail.com"
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
                paraFirst: "298 Acres Land Area. The land is close to Rajkot and is 6 km from Municipal Corporation’s limits.The Government of Gujarat has earmarked around 201 acres of land for the project and will take care of providing access roads, water facilities and electricity connection",
                paraSecond: "All India Institute of Medical Sciences Rajkot provides many facilities for students and staff. Some of the AIIMS Rajkot facilities include hostels, a library, laboratories, sports, medical facilities, transport facilities, a cafeteria and many more. The AIIMS Rajkot hostels have a lobby room, guest waiting area and dedicated newspaper, and magazine reading corner on the ground floor. The library facilities can be used by students, staff, and faculty members for updating their knowledge and supporting research and teaching or learning activities.",
            },
            hostel: {
                img: hostel,
                paraFirst: "   Undergraduate Men’s Hostel for first year students with 40 rooms in one campus thst was temporary premises currently situated in B4 and B5 quarter of the Staff Residential Complex buildings of Pandit Deendayal Upadhyay Government Medical College.Undergraduate Men’s Hostel for second year students with 23 rooms in one campus is currently a temporary campus in the PDU Medical College Training Hostel.",
                paraSecond: "Hostels are located within walking distance from the academic block of AIIMS Rajkot.All rooms are double occupancy and have fully built-in lockable almirah, good quality wardrobe with storage, study table with cupboard, reading chair, mattress, pillow, ceiling fans and electrical fittings and refrigerator etc.of the hostel are provided for common use of the students.Bus facility is available to transport students from hostel to college and back to hostel that has the capacity of 50 to 55 students.The hostel has a common room with recreational facilities that allow students to relax.",
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
                para: "Rajkot has Railway Junction which connects major cities.The Rajkot bus stand is 15 kilometers from the college and takes about 40 minutes to travel via Aurobindo Ghosh Road.Rajkot Railway Station is 14 km from the college, which is about a 35 minute drive.Rajkot Domestic Airport is the nearest airport to the college, which is 13 km away, a 30-minute drive.The proposed site are within 12-15 kilometres from Airport.",
                maplink: "https://www.google.com/maps/place/All+India+Institute+of+Medical+Sciences,+Rajkot+(AIIMS+Rajkot)/@22.3689812,70.7464055,17z/data=!4m6!3m5!1s0x3959c9c3b621838b:0x70393f9e004a5669!8m2!3d22.3689812!4d70.7464055!16s%2Fg%2F11lrrjpvtt?entry=ttu"
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

export default AIIMSRajkot
