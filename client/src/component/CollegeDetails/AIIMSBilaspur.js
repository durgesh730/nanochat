import React from 'react'
import CollegeDetails from './CollegeDetails'
import collegeImg from '../../images/aiimsbilaspur.png'
import infra from '../../images/infrastructure.png'
import hostel from '../../images/hostel.png'
import location from '../../images/location.png'
import hospital from '../../images/hospital (1).png'


const AIIMSBilaspur = () => {

    const CollegeInfo = [
        {
            title: 'AIIMS BILASPUR',
            about: {
                collegeImgUrl: collegeImg,
                paraFirst: "All India Institute of Medical Sciences (AIIMS) Bilaspur (Himachal Pradesh), an Institute of National Importance was officially approved, under Phase-V of the Pradhan Mantri Swasthya Suraksha Yojana (PMSSY), by Union Cabinet on December 04, 2019",
                paraSecond: "It intends to develop patterns of teaching in undergraduate and postgraduate medical education in all its branches so as to demonstrate a high standard of medical education to all medical colleges and other allied institutions in India. The Hon’ble Prime Minister of India, Shri Narendra Modi laid the foundation stone of AIIMS, Bilaspur on October 03, 2017.",
                btnLink: "https://www.aiimsbilaspur.edu.in/"
            },
            quickSummary: {
                paraGraph: "",
                established: "2020",
                institutionType: "Govt.",
                courses: "-",
                address: "7QPM+4QH, Changar Palasiyan, Himachal Pradesh 174001",
                officialSite: "	https://www.aiimsbilaspur.edu.in/",
                contacts: "01978-292563 , 9015480371, 8219550572",
                affiliatedUniversity: "Statutory Autonomous, AIIMS"
            },
            courses: {
                img: collegeImg,
                seats: "All India Institute of Medical Sciences Bilaspur is permitted with MBBS seats = 50",
                tutionfee: "AIIMS Bilaspur MBBS fees for various quota is given as. Apart from tuition fees, you need to pay various other fees during admission. Government Fees = ₹ 5856 /Year, NRI/OCI Fees	$ 75000 /Year",
                ranking: "College Ranking is based on How Parents Preferred AIIMS Bilaspur during last year AIQ and SQ counselling. All India Ranking	= 47 "
            },
            addmision: {
                para: "Find AIIMS Bilaspur additional details given by this medical college to Medical Counselling committee.",
                maleHostel: "yes",
                femaleHostel: "yes",
                otherInfo: "Academic Fee and Hostel fee is one time fee for the entire course",
                deanName: "Prof Sanjay Vikrant",
                nodalName: "Dr Yatiraj Singi",
                designation: "Reporting Official",
                officeAddress: "Associate professor Department of Forensic Medicine AIIMS BilaspurHimachal Pradesh 174001",
                phone: "01978-292575",
                email: "drsingiyatiraj[at]gmail.com"
            },
            bondStipend: {
                para: "After MBBS course completion in All India Institute of Medical Sciences Bilaspur, candidates should undergo rural service . If they skip, they need to pay bond penalty.",
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
                paraFirst: "The AIIMS Bilaspur facilities include a well-structured library with a huge collection of books, magazines, journals and many other subject-related books, separate laboratories for each department, sports like indoor and outdoor games, and many others. The AIIMS Bilaspur facilities include an auditorium which is used to conduct professional and cultural activities and parking facilities for students and employees on campus. ",
                paraSecond: "The institute provides a separate laboratory for each department. The laboratories are equipped with modern technology equipment. To enhance the practical skills of students the faculty will conduct a laboratory session regularly. AIIMS Bilaspur has an auditorium to conduct seminars, conferences, presentations, guest lectures, and any other co-curricular activities like singing, dancing, playing skits, etc., or to conduct any events related to AIIMS Bilaspur. The campus auditorium acts as a variety of campus events and projects.",
            },
            hostel: {
                img: hostel,
                paraFirst: "The college provides separate hostels for all the boys. Each student has their own bed, cupboard, table and chair. The hostels for the first-year MBBS students are located on the second floor while for the second year MBBS students are located on the first floor.",
                paraSecond: "The college has separate hostel facilities for all the girls. The hostels are well-equipped with the required appliances for the comfort and safety of students. Some rooms are provided with a student strength of 2 while some rooms are provided with a student strength of 3. ",
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
                para: "The Institute was approved to be established over a span of about 247 acre (99.96 hectre) land on National Highway – 205 (Shimla-Kangra / Shimla Ghumarwin road), in the village of Kothipura, District Bilaspur, Himachal PradeshThe institute is located on National Highway – 205 (Shimla-Kangra / Shimla Ghumarwin road), in the village of Kothipura, District Bilaspur, Himachal Pradesh. The nearest railway station is  Kiratpur Sahib railway station which is 34.9 km away from the AIIMS Bilaspur. The closest bus stop is the Sundar Nagar bus stop. The closest airport to AIIMS Bilaspur is Bilasa Devikewat Airport (Chakrabatha) Bilaspur.",
                maplink: "https://www.google.com/maps/place/AIIMS+BILASPUR/@31.2854759,76.7843533,17z/data=!3m1!4b1!4m6!3m5!1s0x39053ffd9652144d:0x915873c454e7fb7c!8m2!3d31.2854759!4d76.7843533!16s%2Fg%2F11j1j5x2jp?entry=ttu"
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

export default AIIMSBilaspur
