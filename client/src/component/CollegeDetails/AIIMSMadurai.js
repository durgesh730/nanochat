import React from 'react'
import "../../style/CollegeDetails.css";
import CollegeDetails from './CollegeDetails';

import infra from '../../images/infrastructure.png'
import hostel from '../../images/hostel.png'
import location from '../../images/location.png'
import collegeImg from '../../images/aiims madurai.jpeg'

const AIIMSMadurai = () => {

    const CollegeInfo = [
        {
            title: 'AIIMS MADURAI',
            about: {
                collegeImgUrl: collegeImg,
                paraFirst: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse ultrices gravida dictum fusce. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Vitae ultricies leo integer malesuada nunc.",
                paraSecond: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse ultrices gravida dictum fusce. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Vitae ultricies leo integer malesuada nunc. Pellentesque sit amet porttitor eget dolor morbi non.",
                btnLink: "https://www.writeCollgelink.in"
            },
            quickSummary: {
                paraGraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse ultrices gravida dictum fusce. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Vitae ultricies leo integer malesuada nunc.",
                established: "1920",
                institutionType: "Govt.",
                courses: "33",
                address: "AIIMS, Ansari Nagar, New Delhi-110029, India",
                officialSite: "Click here",
                contacts: "91-11-26588663 / 26588641",
                affiliatedUniversity: "Self Funded"
            },
            courses: {
                img: collegeImg,
                seats: "There is just enough space here for several lines of text. Make sure you get your message across clearly yet concisely.",
                tutionfee: "There is just enough space here for several lines of text. Make sure you get your message across clearly yet concisely.",
                ranking: "There is just enough space here for several lines of text. Make sure you get your message across clearly yet concisely."
            },
            addmision: {
                para: "Find AIIMS New Delhi additional details given by this medical college to Medical Counselling committee.",
                maleHostel: "yes",
                femaleHostel: "yes",
                otherInfo: "Academic Fee and Hostel fee is one time fee for the entire course",
                deanName: "DR NEENA KHANNA",
                nodalName: "DR ASHOK KUMAR JARYAL",
                designation: "Dean",
                officeAddress: "ACADEMIC SECTION AIIMS NEW DELHI 110029",
                phone: "011-26594365",
                email: "durgeshchoudary@gmail.com"
            },
            bondStipend: {
                para: "After MBBS course completion in All India Institute of Medical Sciences Delhi, candidates should undergo rural service . If they skip, they need to pay bond penalty.",
                totalYear: 0,
                penalty: 0,
                stipend: 3546545
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
                studentUnionFee: 53,
                messFeeVeg: 3200,
            },
            infrastructure: {
                img: infra,
                paraFirst: "AIIMS campus is divided into 5 locations, the East Campus Includes OPD ward, main hospital ward, infirmary, medical school, research department, convergence ward, BB Dixit library, administration wing, student dormitories, central lawn, Jawaharlal auditorium, and staff room. This eastern city also has 4 centers specializing in cardiac carcinoma and neurology, an Oncology Center, an Ophthalmic Science Center, and a Dental Education and Research Center. The library is open 24 hours a day, 7 days a week (356 days) and has more than 1,50,257 books and other documents such as bound newspapers, pamphlets, etc.and employees, technicians and non-technicians. An average of 320 readers visit the library every day.",
                paraSecond: "The library is well equipped with modern facilities to support biomedical teaching and research.;A library has predominantly electronic resources (80%) that are provided with anytime, anywhere access to physicians and faculty members for their academic activities. Access Medicine Books, Oxford Medicine Online (53 textbooks), OVID",
            },
            hostel: {
                img: hostel,
                paraFirst: "AIIMS has more than one accommodation section with all sorts of facilities. Twelve male and 26 female office attendants are posted in different hostels. AIIMS has several halls of residence with a capacity of over 1990 accommodation facilities with single/double rooms, 418 accommodations for nursing students and staff nurses and 24 guest rooms furnished with all facilities.",
                paraSecond: "These are spread over different hostels and residences in the AIIMS Main Campus, Masjid Moth, Ayurvigyan Nagar, and JPNA Trauma Centre Hostel available in Raj Nagar. Male hostels have a total of more than 1350 student accommodation facilities. Female hostel has 650 accommodation facilities, Staff Hostel 400 accommodation, and also Guest rooms are available here. All residences have common rooms, sports clubs, Gymnasium, reading rooms, and recreational facilities.",
            },
            hospital: {
                img: infra,
                paraFirst: "AIIMS is currently not a single hospital, but a conglomerate of facilities. It has over 1,500 units located in the main hospital, the Ophthalmological Center of dr.Rajendra Prasad, Cardiac Surgery Center, Neuroscience Center, Hospital Center, Rotary Institute, and Detox Center. This facility complex serves approximately 1.5 million outpatients and 80,000 inpatients annually.",
                paraSecond: "The number of surgical operations performed at AIIMS last year amounted to over 100,000. The total number of beds available at Major Hospital and Dr.B.R. Ambedkar Institute Rotary Cancer Hospital, Dr.RP Center, NDDTC, CCM, NCI Jhajjar has 2,792 beds, including 288 private sector beds. Rural/Urban Health Training Centres Ballabgarh 35 km distance from the college",
            },
            counselling: {
                para: "All the NEET Under Graduate (MBBS/BDS) aspirant candidates are hereby informed that counseling for All India Quota seats/ Institutional Quota/ Domicile (internal candidates) of Central Universities (Aligarh Muslim University/ Banaras Hindu University/ University of Delhi/Faculty of Dentistry, Jamia Millia Islamia, Delhi), (wards of ESIC insured persons) seats of colleges under Employee State Insurance Corporation and Armed Forces Medical College, Pune for the Under graduate session 2023-24 will be conducted by Medical Counseling Committee/ Directorate General of Health Services, Ministry of Health and Family Welfare, Government of India",
                link: "https://www.nanochat.in"
            },
            location: {
                img: location,
                para: "New Delhi Bus Stand and Inter State Bus Terminal to AIIMS Medical college is 20 km distance. We can reach within 40 min from NH 44 and Baba Banda Singh Bahadur Setu road. Ajmeri Gate Railway station in Delhi is located 10.5 km away from this college, we can reach here within 30 min through Prithviraj Road and Sri Aurobindo Marg. Indira Gandhi International Airport, Delhi is the nearest airport of this medical college, which is located 9.8 km away from Medical College. Through Mahatma Gandhi Road and NH 48, we can reach the Airport within 20 min to this Medical College.",
                maplink:"www.map.com"
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

export default AIIMSMadurai
