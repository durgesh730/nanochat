import React from 'react'
import CollegeDetails from './CollegeDetails'
import collegeImg from '../../images/aiims-raebareli.png'
import infra from '../../images/infrastructure.png'
import hostel from '../../images/hostel.png'
import location from '../../images/location.png'
import hospital from '../../images/hospital (1).png'


const AIIMSRaebrali = () => {

    const CollegeInfo = [
        {
            title: 'AIIMS RAEBRALI',
            about: {
                collegeImgUrl: collegeImg,
                paraFirst: "All India Institute of Medical Sciences Raebareli was established in 2013. The AIIMS Raebareli is a government medical college and Institute of National Importance. The AIIMS Raebareli courses are recognised by the Medical Council of India (MCI). The AIIMS Raebareli admissions are offered to the M.B.B.S. programme. The college provides facilities like a library, hostels, classrooms, medical facilities and many more. ",
                paraSecond: "The college offers M.B.B.S. at the UG level. The AIIMS Raebareli courses are offered in full-time mode only. The AIIMS Raebareli Course is offered in streams of Medicine and Allied Science. The duration of AIIMS Raebareli M.B.B.S. is 5.5 years. ",
                btnLink: "https://aiimsrbl.edu.in/"
            },
            quickSummary: {
                paraGraph: "",
                established: "2019",
                institutionType: "Govt.",
                courses: "-",
                address: "AIIMS, Dalmau Road, Munshiganj, Raebareli-229405, Uttar Pradesh, India.",
                officialSite: "	https://aiimsrbl.edu.in/",
                contacts: "0535-2704400",
                affiliatedUniversity: "Statutory Autonomous, AIIMS"
            },
            courses: {
                img: collegeImg,
                seats: " MBBS Seats available in All India Institute of Medical Sciences Rae bareli is 100",
                tutionfee: "Government Fees ₹ 5856 /Year",
                ranking: " College Ranking is based on How last year candidates Preferred AIIMS Rae Bareli during last year AIQ and SQ counselling. Ranking = 45 "
            },
            addmision: {
                para: "Find AIIMS Rae Bareli additional details given by college to Medical Counselling committee",
                maleHostel: "yes",
                femaleHostel: "yes",
                otherInfo: "",
                deanName: "Dr. Arvind Rajwanshi",
                nodalName: "Samir Shukla",
                designation: "Reporting Official",
                officeAddress: "AIIMS Raebareli Munshiganj Dalmau Road Raebareli",
                phone: "0535-2971111",
                email: "samir.shukla2011[at]gmail.com"
            },
            bondStipend: {
                para: "After MBBS course completion in AIIMS Rae Bareli, candidates should undergo compulsory rural service . If they skip, they need to pay bond penalty amount",
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
                paraFirst: "All India Institute of Medical Sciences Raebareli provides good infrastructural facilities for students and staff. The AIIMS Raebareli facilities include hostels, a library, classrooms, medical facilities, sports and many more. The AIIMS Raebareli library has a collection of textbooks and reference books for students and is a perfect place for book lovers. The college also provides medical facilities to students and staff in any emergency.",
                paraSecond: "The college provides medical facilities for all the students and staff. The AIIMS Raebareli medical facilities include a health centre with a first aid facilityThe college provides library facilities for the students and staff. The AIIMS Raebareli library has a collection of books, journals and many more that are useful for students.",
            },
            hostel: {
                img: hostel,
                paraFirst: "The college has separate hostels for boys. The AIIMS Raebareli hostels also have wardens to maintain the rules and regulations of each hostel.",
                paraSecond: "The AIIMS Raebareli provides separate hostels for girls. The hostels are well-equipped with all the modern appliances for the comfort of the students. ",
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
                para: "The college is located near Dalmau Road, Munshiganj, Raebareli, Uttar Pradesh. The Amousi Airport is the closest airport to AIIMS Raebareli. The Raebareli Junction is the closest railway station to the college. The closest bus stop to AIIMS Raebareli is Gangaganj Bus Stop. Students can reach the campus easily through a cab or taxi.",
                maplink: "https://www.google.com/maps/place/All+India+Institute+of+Medical+Sciences,+Raebareli/@26.1792745,81.2437027,17z/data=!3m1!4b1!4m6!3m5!1s0x399ba1b76b43644f:0x2b71324188ee51f5!8m2!3d26.1792745!4d81.2437027!16s%2Fg%2F11hdx17_3x?entry=ttu"
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

export default AIIMSRaebrali
