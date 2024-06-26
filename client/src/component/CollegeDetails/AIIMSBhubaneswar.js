import React from 'react'
import CollegeDetails from './CollegeDetails'
import collegeImg from '../../images/aiimsbhubaneswar.jpeg'
import infra from '../../images/infrastructure.png'
import hostel from '../../images/hostel.png'
import location from '../../images/location.png'
import hospital from '../../images/hospital (1).png'


const AIIMSBhubaneswar = () => {

    const CollegeInfo = [
        {
            title: 'AIIMS BHUBANESWAR',
            about: {
                collegeImgUrl: collegeImg,
                paraFirst: "All India Institute of Medical Sciences, Bhubaneswar is one of the apex healthcare Institutes established by the Ministry of Health & Family Welfare, Government of India under the Pradhan Mantri Swasthya Suraksha Yojna (PMSSY). Under this scheme six new All India Institutes of Medical Sciences have been established at Patna, Raipur, Bhopal, Bhubaneswar, Jodhpur and Rishikesh apart from the one at New Delhi.",
                paraSecond: "In his Independence Day Speech on August 15, 2003, then prime minister Atal Bihari Vajapayee announced opening up of 6 AIIMS Hospitals at Patna, Raipur, Bhopal, Bhubaneswar, Jaipur and Rishikesh under Pradhan Mantri Swasthya Suraksha Yojana (PMSSY) launched for up gradation of medicare facilities in underserved areas of the country besides providing quality medical education in super-specialty disciplines in these areas.",
                btnLink: "https://aiimsbhubaneswar.nic.in/aboutAIIMS.aspx"
            },
            quickSummary: {
                paraGraph: "",
                established: "2012",
                institutionType: "Govt.",
                courses: "24",
                address: "AIIMS, Sijua, Bhubaneswar-751019, Odisha, India.",
                officialSite: "	https://aiimsbhubaneswar.nic.in/",
                contacts: "0674-2476001, 2476043",
                affiliatedUniversity: "Statutory Autonomous, AIIMS"
             
            },
            courses: {
                img: collegeImg,
                seats: "MBBS Seats available in All India Institute of Medical Sciences Bhubaneswar = 125 ",
                tutionfee: "AIIMS Bhubaneswar MBBS fees for various quota is given as. Apart from tuition fees, you need to pay various other fees during admission.Government Fees	₹ 5856 /Year",
                ranking: "College Ranking is based on How last year parents Preferred AIIMS Odisha during NEET 2022 counselling.All India Ranking = 9 "
            },
            addmision: {
                para: "Find AIIMS Bhubaneswar additional details given by college to Medical Counselling committee.",
                maleHostel: "yes",
                femaleHostel: "yes",
                otherInfo: "--",
                deanName: "Prof. Debasish Hota",
                nodalName: "BIDHU BHUSAN MISHRA",
                designation: "Reporting Official",
                officeAddress: "AIIMS BHUBANESWAR",
                phone: "0674-2476643",
                email: "registrar[at]aiimsbhubaneswar.edu.in"
            },
            bondStipend: {
                para: "After MBBS course completion in AIIMS Bhubaneswar, candidates should undergo compulsory rural service . If they skip, they need to pay penalty as per compulsary service bond.",
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
                paraFirst: "As AIIMS is an Institute of National Importance, the infrastructure of the college is better than many other colleges. They have air-conditioned classrooms and a 24*7 library, well-occupied lab facilities, and many more sports and athletic opportunities that are worthwhile values. The quality of food served here is another thing to notice. The rest of everything is free of cost in college.",
                paraSecond: "There are various clubs and committees like literary, cultural, quiz, sports, academics, dance, music, fine arts, web and IT, photography, etc. There are annual socio-cultural fests like Chiasma, annual sports day, medical conferences and workshops that keep happening.Hostel infrastructure is good, but it can be improved in many ways. ",
            },
            hostel: {
                img: hostel,
                paraFirst: "Boys Hostel-The University has a boy’s hostel facility which provides good hostel accommodation for the students.The boys' hostel provides comfortable living spaces, ensuring a conducive environment for study, rest, and personal growth. The facilities are designed to meet students' needs, enabling them to focus on their academic journey.",
                paraSecond: "Girls Hostel-The University has a girl's hostel facility which provides good hostel accommodation for the students.The girls' hostel offers a safe and secure living environment, promoting a sense of belonging and community among the residents. The comfortable accommodations cater to students' well-being, allowing them to thrive academically.",
            },
            hospital: {
                img: hospital,
                paraFirst: "AIIMS Bhubaneshwar has departments of Anatomy, Anesthesiology, Critical Care, Biochemistry, Burn, Plastic Surgery, Cardiology, Family Medicine, Dentistry, Dermatology, Endocrinology, Diabetes, Metabolism, ENT, Forensic Medicine, Toxicology, Gastroenterology, General Medicine, General Surgery, Medical Oncology, Hematology, Microbiology, Neonatology, Nephrology, Neurology, Neurosurgery, Nuclear Medicine, Nursing, Obstetrics, Gynaecology, Ophthalmology, Orthopedics, Pediatrics, Pediatrics Surgery, Pharmacology, Physical Medicine, Rehabilitation, Physiology, Psychiatry, Pulmonary Medicine, Critical Care, Gastroenterology, Oncology, and Urology",
                paraSecond: "The hospital provides facilities for Radiotherapy, Radiodiagnosis, Pharmacology, Pathology with Laboratory Medicine, Transfusion Medicine, Blood Bank, and Trauma. The hospital has Dr Manisha R Gaikwad, Dr Pravash Ranjan Mishra, Dr Prabhas Ranjan Tripathy, Dr Sukdev Nayak, Dr Satyajeet Misra, Dr Manaswini Mangaraj, and Dr Sunil Kumar Rout on the panel.",
            },
            counselling: {
                para: "All the NEET Under Graduate (MBBS/BDS) aspirant candidates are hereby informed that counseling for All India Quota seats/ Institutional Quota/ Domicile (internal candidates) of Central Universities (Aligarh Muslim University/ Banaras Hindu University/ University of Delhi/Faculty of Dentistry, Jamia Millia Islamia, Delhi), (wards of ESIC insured persons) seats of colleges under Employee State Insurance Corporation and Armed Forces Medical College, Pune for the Under graduate session 2023-24 will be conducted by Medical Counseling Committee/ Directorate General of Health Services, Ministry of Health and Family Welfare, Government of India",
                link: "https://www.nanochat.in"
            },
            location: {
                img: location,
                para: "The All India Institute of Medical Sciences is located in Sijau, Pattrapada, Odisha, and forms an part of the city of Bhubaneswar. The closest railway station is the Bhubaneshwar Railway station, which is 14.5 km away. So, students can reach the campus in about 25 minutes after reaching the Railway Station. The nearest airport, the Biju Patnaik International Airport, is about 10.3 km away, and the students can reach the campus in about 20 minutes after reaching the airport.",
                maplink: "https://www.google.com/maps/place/All+India+Institute+of+Medical+Sciences+Bhopal/@23.2101836,77.4570134,17.4z/data=!4m6!3m5!1s0x397c43cd5a97dbd7:0xdbdb9ed3ed5b48c0!8m2!3d23.2094476!4d77.4581713!16s%2Fm%2F0n4b4yv?entry=ttu"
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

export default AIIMSBhubaneswar
