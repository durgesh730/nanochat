import React from 'react'
import CollegeDetails from './CollegeDetails'
import collegeImg from '../../images/aiims bhopal.png'
import infra from '../../images/infrastructure.png'
import hostel from '../../images/hostel.png'
import location from '../../images/location.png'
import hospital from '../../images/hospital (1).png'


const AIIMSBhopal = () => {

    const CollegeInfo = [
        {
            title: 'AIIMS BHOPAL',
            about: {
                collegeImgUrl: collegeImg,
                paraFirst: "The establishment of the All India Institute of Medical Sciences (AIIMS) in New Delhi in 1956 was the dream project of the first Prime Minister of India, Shri Jawaharlal Nehru, and was implemented by the first Minister of Health of India.",
                paraSecond: "n 2006, AIIMS, an organization of national importance, was set up by Bhopal, an initiative of the Government of India known as the Prime Minister’s Swasthya Suraksha Yojana under the Ministry of Health and Family Welfare, New Delhi.AIIMS is one of the partners of the Bhopal National Knowledge Network (NKN), which connects 52 medical colleges across the country.",
                btnLink: "https://www.aiimsbhopal.edu.in/"
            },
            quickSummary: {
                paraGraph: "",
                established: "2012",
                institutionType: "Govt.",
                courses: "23",
                address: "AIIMS Campus, Saket Nagar, Habibganj, Bhopal- 462020, Madhya Pradesh, India",
                officialSite: "http://www.aiimsbhopal.edu.in/",
                contacts: "	0755-2672327",
                affiliatedUniversity: "Statutory Autonomous, AIIMS"
            },
            courses: {
                img: collegeImg,
                seats: "  MBBS Seats available in All India Institute of Medical Sciences Bhopal is 125",
                tutionfee: "Government Fees ₹ 5856 /Year",
                ranking: " College Ranking is based on How previous year candidates Preferred All India Institute of Medical Sciences Bhopal during all india and state level counselling.Ranking = 11 "
            },
            addmision: {
                para: "",
                maleHostel: "yes",
                femaleHostel: "yes",
                otherInfo: "AIIMS Bhopal was established by the Act of Parliament w.e.f 16/07/2012 .The first batch of MBBS was inducted from July 2012",
                deanName: "Professor Rajesh Malik",
                nodalName: "Mr. M. Sabir Chauhan",
                designation: "Reporting Official",
                officeAddress: "Saket Nagar Bhopal",
                phone: "0755-2672355",
                email: "registrar[at]aiimsbhopal.edu.in"
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
                paraFirst: "Aiims is an extension of the Bhopal Medical College building, with a further development based on the 200- to 250-bed Vishram Sadan type patient care facility by CS, Development of indoor sports complex with multipurpose hall, Phase II Construction of residential premises of various types of accommodation, development of entertainment Park, high green campus, herbal garden to increase the self-reliance of the company with respect to water resources for optimal energy conservation, A rural health center in Chicago, with a public health school, An international vaccine science center funded by CSR; Except for a number of development tasks.",
                paraSecond: "It has planned to provide online science and print issues of national and international medical science journals, good quality books and audio reading space with access to international science and national biological databases.",
            },
            hostel: {
                img: hostel,
                paraFirst: "The Hostels provide accommodation for men and women and nursing students which is situated within the campus.It have a running mess with variety of 4 meals a day.The hostels provide full safety to the students.UG Boys Hostel 260 Rooms has double occupancy with a common toilet.UG Girls Hostel has 132 Rooms double occupancy with common toilet.PG boys Hostel provides two hostels B & C Wing that have the capacity of 112 and 105 students with 217 rooms.",
                paraSecond: "Girls Hostel A wing occupied 206 rooms single with attached toilet and B wing occupied 156 rooms single with common toilet.Girls Hostel C Wing occupied 154 rooms that had double occupancy with common toilets.",
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
                para: "Bhopal is the capital of Madhya Pradesh which is the Central State of India and the administrative headquarters of the Bhopal District and Bhopal Division.Bhopal has been selected as one of the top twenty Indian cities to be developed as a smart city under Prime Minister Narendra Modi’s flagship Smart Cities Mission.Raja Bhoj International Airport is located on the outskirts of Sant Hirdram, the premier airport serving the Indian state of Madhya Pradesh.From within the city, the VIP Road leads to the airport on a four-lane road 15 km north of the city.The main stations of Bhopal are the Bhopal Junction Station located in Old Bhopal and the Bhopal Habibganj Station located in New Bhopal.",
                maplink: "https://www.google.com/maps/place/All+India+Institute+of+Medical+Sciences+Bhopal/@23.2094476,77.4581713,17z/data=!4m6!3m5!1s0x397c43cd5a97dbd7:0xdbdb9ed3ed5b48c0!8m2!3d23.2094476!4d77.4581713!16s%2Fm%2F0n4b4yv?entry=ttu"
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

export default AIIMSBhopal
