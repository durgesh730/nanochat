import React from 'react'
import CollegeDetails from './CollegeDetails'
import collegeImg from '../../images/aiims jammu.jpeg'
import infra from '../../images/infrastructure.png'
import hostel from '../../images/hostel.png'
import location from '../../images/location.png'
import hospital from '../../images/hospital (1).png'


const AIIMSJammu = () => {

    const CollegeInfo = [
        {
            title: 'AIIMS JAMMU',
            about: {
                collegeImgUrl: collegeImg,
                paraFirst: "AIIMS Jammu, also known as the All India Institute of Medical Sciences Jammu, is an autonomous medical university located in Jammu, India. It is one of the prestigious AIIMS institutions established by the Ministry of Health and Family Welfare, Government of India. AIIMS Jammu was established in the year 2020 with the aim of providing excellent medical education, healthcare services, and conducting high-quality research. ",
                paraSecond: "AIIMS Jammu focuses on conducting innovative research in various fields of medicine, including clinical research, basic sciences, and translational research. It has collaborations with renowned national and international institutions to promote collaborative research programs and exchange of knowledge.",
                btnLink: "https://www.aiimsjammu.edu.in/vision/"
            },
            quickSummary: {
                paraGraph: "",
                established: "	2020",
                institutionType: "Govt.",
                courses: "-",
                address: "	H27P+P8, Vijaypur, 184120",
                officialSite: "	https://www.aiimsjammu.edu.in/",
                contacts: "		91-11-26562122/25/33/44, 26567373, 26962819",
                affiliatedUniversity: "Statutory Autonomous, AIIMS"
            },
            courses: {
                img: collegeImg,
                seats: " AIIMS Jammu contains below mentioned MBBS seats = 	62",
                tutionfee: "Government Fees ₹ 5856 /Year",
                ranking: " College Ranking is based on How previous year parents Preferred AIIMS Jammu during NEET UG 2023 MCC and state counselling.Ranking = 66 "
            },
            addmision: {
                para: "Find AIIMS Jammu additional details given by this college to Medical Counselling committee.",
                maleHostel: "yes",
                femaleHostel: "yes",
                otherInfo: "	Camp Office Address GMC Doctors Guest House Maheshpura Chowk Jammu 180001",
                deanName: "	Dr Shakti Kumar Gupta",
                nodalName: "Dr Ashok Kumar Jaryal",
                designation: "	Professor",
                officeAddress: "Academic Section AIIMS New Delhi 110029",
                phone: "011-26594365",
                email: "aiims.reg[at]gmail.com"
            },
            bondStipend: {
                para: "After MBBS course completion in All India Institute of Medical Sciences Jammu, candidates should undergo rural service . If they skip, they need to pay penalty.",
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
                paraFirst: "All India Institute of Medical Sciences, Vijaypur offers many facilities for the students and faculty members. The AIIMS Jammu facilities include a library, medical facilities, sports, laboratories, and many more. The library of AIIMS Vijaypur has useful textbooks and reference books for students and staff. The college also provides medical facilities in case of emergency.",
                paraSecond: "The college provides library facilities for the students and staff. The AIIMS Vijaypur library has a collection of books, journals and many more that are useful for students.The college has laboratory facilities for the students. AIIMS Jammu has a department-based laboratory to improve their practical knowledge. ",
            },
            hostel: {
                img: hostel,
                paraFirst: "The AIIMS Jammu offers separate hostels for boys. The hostels are well-furnished and are equipped with modern appliances.",
                paraSecond: "The college offers separate hostels for girls. The AIIMS Vijaypur provides good accommodation facilities and is safe and secure for the hostel students. ",
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
                para: "The institute is located in the Vijaypur area of Jammu, and it is spread across a vast campus. The institute has good connectivity with all the major locations and is easily accessible. Vijaypur Jammu Railway station is about 2 km away from the institute. The nearest bus station is the Jammu Bus station which is 28 km away from the institute. The Jammu Airport is at a distance of 24 km from the institute. You can hire or rent a cab or taxi to reach the campus.",
                maplink: "https://www.google.com/maps/place/All+India+Institute+of+Medical+Science+Vijaypur,+Jammu/@32.5643125,75.0358125,15z/data=!4m6!3m5!1s0x391c219fd166a733:0xec90eb8bd06f6044!8m2!3d32.5643125!4d75.0358125!16s%2Fg%2F11n5vlv1kn?entry=ttu"
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

export default AIIMSJammu
