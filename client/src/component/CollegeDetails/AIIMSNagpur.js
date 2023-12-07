import React from 'react'
import CollegeDetails from './CollegeDetails'
import collegeImg from '../../images/aiims nagpur.png'
import infra from '../../images/infrastructure.png'
import hostel from '../../images/hostel.png'
import location from '../../images/location.png'
import hospital from '../../images/hospital (1).png'


const AIIMSNagpur = () => {

    const CollegeInfo = [
        {
            title: 'AIIMS NAGPUR',
            about: {
                collegeImgUrl: collegeImg,
                paraFirst: "The All India Institute of Medical Sciences Nagpur is also known as AIIMS Nagpur. AIIMS Nagpur offers undergraduate and graduate programmes. The AIIMS Nagpur courses provide a number of specialisations at each level of the programme. Before applying for AIIMS Nagpur admissions to the selected programme, the candidate must pass the NEET/INI CET. ",
                paraSecond: "The candidate must meet the AIIMS Nagpur eligibility and cutoff requirements. AIIMS Nagpur admissions will be based on the results of the entrance tests. The institute has a number of facilities on campus. The AIIMS Nagpur facilities include separate hostels for boys and girls, a library, sports, a canteen, and many others.",
                btnLink: "https://aiimsnagpur.edu.in/"
            },
            quickSummary: {
                paraGraph: "",
                established: "2018",
                institutionType: "Govt.",
                courses: "23",
                address: "AIIMS, Plot No. 2, Sector – 20, MIHAN, Nagpur-441108, Maharashtra, India.",
                officialSite: "	https://aiimsnagpur.edu.in/",
                contacts: "	0712-2744922 0712-2744447",
                affiliatedUniversity: "Statutory Autonomous, AIIMS"
            },
            courses: {
                img: collegeImg,
                seats: " AIIMS Nagpur is permitted with below MBBS seats = 125",
                tutionfee: "AIIMS Nagpur MBBS fees for various quota is given below. Apart from tuition fees, you need to pay various other fees during admission.Government Fees ₹ 1628/Year",
                ranking: " College Ranking is based on How previous year candidates Preferred All India Institute of Medical Sciences Nagpur during AIQ and SQ of NEET 2023 counselling.Ranking = 22 "
            },
            addmision: {
                para: "Find AIIMS Nagpur additional details given by this medical institution to Medical Counselling committee.",
                maleHostel: "yes",
                femaleHostel: "yes",
                otherInfo: "	Fee of Rs 5856 is for the entire duration of MBBS course to be paid at the time of admission and is not refundable",
                deanName: "Maj Gen Dr Vibha Dutta",
                nodalName: "Dr Bharat Sontakke",
                designation: "Reporting Official",
                officeAddress: "Plot No 2 Sector 20 MIHAN Nagpur",
                phone: "07103-295707                ",
                email: "registrar[at]aiimsnagpur.edu.in"
            },
            bondStipend: {
                para: "After MBBS course completion in All India Institute of Medical Sciences Nagpur, candidates should undergo few years of compulsary service . If they skip, they need to pay bond penalty.",
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
                paraFirst: "AIMS Nagpur has a fully centralized airconditioned library that spans a total covered area of 2546 sq. m. (G+2 Building). The library complex has a group study room and mini-conference room. Internet facility is available in the library. The library has been automated with the KOHA library management system for day to day management. The library is open from Monday to Sunday 7 AM to 11 PM.",
                paraSecond: "AIMS Nagpur offers medical facilities to take care of the medical needs of students.The central laboratory of AIMS Nagpur is provided with facilities of automated Biochemistry, Microbiology, Clinical Pathology and Radio-diagnosis.",
            },
            hostel: {
                img: hostel,
                paraFirst: "Boys hostel, girls hostel, and library are some of the facilities offered at All India Institute of Medical Sciences, Nagpur. The institute provides separate accommodation facilities for students.",
                paraSecond: "The college has separate hostels for boys and girls. Students have to fill the application forms for hostels separately and rooms are allotted based on availability.AIMS Nagpur provides separate hostel accommodation for boys and girls. All the required facilities are available for students in the hostels.",
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
                para: "The institute is located at Plot No. 2, Sector 20, MIHAN, Nagpur, Maharashtra, Pin: 441108. The nearest airport is Dr. Babasaheb Ambedkar International Airport, which is 10.3 km away, and students may reach the campus in around 20 minutes. The nearest railway station, Nagpur Railway Station, is 17.8 kilometres distant from AIIMS Nagpur, and students may reach the institute campus in around 35 minutes. Students can board a bus from the ST Bus Stand in Nagpur to AIIMS Nagpur.",
                maplink: "https://www.google.com/maps?q=AIIMS+Nagpur&ftid=0x3bd4959769f65f93:0xc35cc25fded8242e"
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

export default AIIMSNagpur
