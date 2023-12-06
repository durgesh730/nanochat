import React from 'react'
import CollegeDetails from './CollegeDetails'
import collegeImg from '../../images/AIIMS BIBINAGAR.png'
import infra from '../../images/infrastructure.png'
import hostel from '../../images/hostel.png'
import location from '../../images/location.png'
import hospital from '../../images/hospital (1).png'


const AIIMSBibinagar = () => {

    const CollegeInfo = [
        {
            title: 'AIIMS BIBINAGAR',
            about: {
                collegeImgUrl: collegeImg,
                paraFirst: "All India Institute of Medical Sciences Bibinagar is one of the new government colleges established in Telangana and popularly known as AIIMS Bibinagar. The institution aims to emerge as a leading global healthcare institute offering quality medical education in diversified fields, scientific research opportunities and fostering healthcare training to students inculcating in them ethical and moral values for sustainable community development.",
                paraSecond: "All India Institute of Medical Sciences Bibinagar is one of the apex healthcare institutes being established by the Ministry of Health & Family Welfare, Government of India, under the Pradhan Mantri Swasthya Suraksha Yojana (PMSSY). It is a full-fledged tertiary Medical college in Telangana. ",
                btnLink: "https://aiimsbibinagar.edu.in/About_Institute.html"
            },
            quickSummary: {
                paraGraph: "",
                established: "2019",
                institutionType: "Govt.",
                courses: "-",
                address: "Bibinagar, Telangana 508126",
                officialSite: "https://aiimsbibinagar.edu.in/",
                contacts: "	08685 295050",
                affiliatedUniversity: "Statutory Autonomous, AIIMS"
            },
            courses: {
                img: collegeImg,
                seats: "All India Institute of Medical Sciences Bibinagar is permitted with MBBS seats = 100",
                tutionfee: "AIIMS BIBINAGAR MBBS fees for various quota is given as. Apart from tuition fees, you need to pay various other fees during admission. Government Fees = ₹ 5856 /Year",
                ranking: "College Ranking is based on How Parents Preferred AIIMS Bibinagar during last year AIQ and SQ counselling. All India Ranking	= 12 "
            },
            addmision: {
                para: "Find AIIMS Bibinagar additional details given by this medical college to Medical Counselling committee.",
                maleHostel: "yes",
                femaleHostel: "yes",
                otherInfo: "Academic Fee and Hostel fee is one time fee for the entire course",
                deanName: "Dr Rahul Narang ",
                nodalName: "Dr. Vidya Ganji ",
                designation: "Dean",
                officeAddress: "Rangapur, Bibinagar, Yadadri, Bhuvanagiri, Telangana 508126",
                phone: "-",
                email: "durgeshchoudary@gmail.com"
            },
            bondStipend: {
                para: "After MBBS course completion in All India Institute of Medical Sciences Delhi, candidates should undergo rural service . If they skip, they need to pay bond penalty.",
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
                paraFirst: "All India Institute of Medical Sciences, Bibinagar provides many facilities for students and staff.  Hostels, a library, Sports and gym, recreation facilities, and music clubs, are some of the AIIMS Bibinagar facilities. The hotels are provided with cleaning facilities, laundry services, food services, water facilities and many more. The college has a library with a good collection of books, journals, and many more. One well-equipped cardiac ambulance is accessible whenever needed on campus for any clinical emergency.",
                paraSecond: "Students at the college have access to a health centre with first-aid supplies. IPD and ICU facilities are close to the hostel grounds on campus. Doctors on duty are always available on call. For students, lab investigations are completely free. The director of AIIMS Bibinagar ensured that every student on campus received the COVID vaccine. Along with the students, the hostel's housekeeping and security staff are all immunised. ",
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
                para: "It is located on a 200 acre area in the villages of Rangapur and Kondamadugu, Bibinagar Mandal, Yadadri Bhuvanagiri District, of state Telangana which is in the outskirts of city Hyderabad. The land is about 12 km from district headquarters Bhongir. The nearest railwaystation is 2 km away and international airport (Samshabad) is located at a distance of about 50 km. The site is located on the NH – 163 – Hyderabad Warangal National Highway",
                maplink: "https://www.mappls.com/lopw3n"
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

export default AIIMSBibinagar
