import React from 'react'
import CollegeDetails from './CollegeDetails'
import collegeImg from '../../images/aiimsjodhpur.png'
import infra from '../../images/infrastructure.png'
import hostel from '../../images/hostel.png'
import location from '../../images/location.png'
import hospital from '../../images/hospital (1).png'


const AIIMSJodhpur = () => {

    const CollegeInfo = [
        {
            title: 'AIIMS JODHPUR',
            about: {
                collegeImgUrl: collegeImg,
                paraFirst: "Ministry of Health & Family Welfare has established 6 NEW AIIMS including this AIIMS in Jodhpur.AIIMS Jodhpur was established in the year 2012. It is one of the six new AIIMS established by the Ministry of Health and Family Welfare GOI under the Pradhan Mantri Swasthya Suraksha Yojna (PMSSY). AIIMS Jodhpur offers both UG and PG courses to interested candidates across the country. Many students who want to pursue medical course studies from across the country apply for admissions to the institute. ",
                paraSecond: "Indian Government underneath the Pradhan Mantri Swasthya Suraksha Yojna holding the aim of Correcting regional imbalances in quality tertiary level healthcare in the country and attaining autonomy in PG and UG medical education.",
                btnLink: "https://www.aiimsjodhpur.edu.in/index.php?vr=aboutjodhpur"
            },
            quickSummary: {
                paraGraph: "",
                established: "2012",
                institutionType: "Govt.",
                courses: "24",
                address: "AIIMS, Basni Industrial Area Phase-2, Jodhpur-342005, Rajasthan",
                officialSite: "http://www.aiimsjodhpur.edu.in/",
                contacts: "0291 – 2740536, 0291- 2740741",
                affiliatedUniversity: "Statutory Autonomous, AIIMS"
             
            },
            courses: {
                img: collegeImg,
                seats: "MBBS Seats available in AIIMS Jodhpur = 25 ",
                tutionfee: "All India Institute of Medical Sciences Jodhpur MBBS fees for various quota is given as. Apart from tuition fees, you need to pay various other fees during admission.Government Fees = ₹ 5356 /Year",
                ranking: "College Ranking is based on How previous year parents Preferred AIIMS Jodhpur during last year AIQ and SQ counselling.All India Ranking = 10  "
            },
            addmision: {
                para: "",
                maleHostel: "yes",
                femaleHostel: "yes",
                otherInfo: "-",
                deanName: "Dr. Sanjeev Misra",
                nodalName: "Dr. Shilpi Gupta Dixit",
                designation: "Reporting Official",
                officeAddress: "AIIMS Jodhpur",
                phone: "0291-2833149",
                email: "dixitsg[at]aiimsjodhpur.edu.in"
            },
            bondStipend: {
                para: "After MBBS course completion in All India Institute of Medical Sciences Jodhpur, candidates should undergo compulsory rural service . If they skip, they need to pay penalty as per compulsary service bond.",
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
                paraFirst: "All India Institute of Medical Sciences Jodhpur Campus Area is spread over 180 acresThe All India Institute of Medical Sciences, Jodhpur, provided many facilities for the students as well the general public to cater to their medical needs by providing 24*7 services and treatment to the patients. It consists of an OPD (Out Patient Department), Blood Bank, and Yellow Fever Vaccination Centre. The students and interns of All India Institute of Medical Sciences, Jodhpur, can also accommodate the hostels provided by the institute. The hostel premises are maintained and cleaned on a regular basis and are also provided with essential amenities.",
                paraSecond: "The facilities provided by the All India Institute of Medical Sciences, Jodhpur:Hostels,Guest House, Staff Quarters,Faculty House,Dining Hall,Sports Facilities,Laboratories",
            },
            hostel: {
                img: hostel,
                paraFirst: "All India Institute of Medical Sciences Jodhpur having Hostel for both boys and girls, UG course with 250 and 125 Rooms, 196 for PG & Interns 190 Rooms for Resident.For Nurses Hostel (Nursing Students) 200 Rooms are available.",
                paraSecond: "Separately 13 Rooms for Guest House.Canteen facilities also available inside the Campus itself.The hostel facilities are made available to the UG, PG students as well as the interns of AIIMS, Jodhpur. The hostel buildings are segregated for boys and girls. The UG Boys Hostel consists of 250 rooms. The UG Boys Hostel consists of 250 rooms, and the UG Girls Hostels comprises 125 rooms. The hostels for PG and interns consist of 196 rooms, while for the residents, a hostel building consisting of 190 rooms is made available.UG Girls Hostels comprises 125 rooms. For nursing students, a hostel building is reserved, which can allocate 200 students. The students are facilitated with all the required amenities that are used on a daily basis and also consists of a cafeteria that provides freshly prepared snacks and food items at affordable prices. The hostel premises are under 24*7 CCTV surveillance, and a hostel warden is also provided with a room in the respective hostels.",
            },
            hospital: {
                img: hospital,
                paraFirst: "All India Institute of Medical Sciences, Jodhpur have OPD and IPD Services.27 Departments running are in Out-Patient Departments (OPD) Services.AIIMS Jodhpur has departments of Anatomy, Anesthesiology, Critical Care, Biochemistry, Burn, Plastic Surgery, Cardiology, Family Medicine, Dentistry, Dermatology, Endocrinology, Diabetes, Metabolism, ENT, Forensic Medicine, Toxicology, Gastroenterology, General Medicine, General Surgery, Medical Oncology, Hematology, Microbiology, Neonatology, Nephrology, Neurology, Neurosurgery, Nuclear Medicine, Nursing, Obstetrics, Gynaecology, Ophthalmology, Orthopedics, Pediatrics, Pediatrics Surgery, Pharmacology, Physical Medicine, Rehabilitation, Physiology, Psychiatry, Pulmonary Medicine, Critical Care, Gastroenterology, Oncology, and Urology.",
                paraSecond: "AIIMS Jodhpur Contains more than 5 Faculties in Each Departments.More than 550 staffs are available in AIIMS Jodhpur",
            },
            counselling: {
                para: "All the NEET Under Graduate (MBBS/BDS) aspirant candidates are hereby informed that counseling for All India Quota seats/ Institutional Quota/ Domicile (internal candidates) of Central Universities (Aligarh Muslim University/ Banaras Hindu University/ University of Delhi/Faculty of Dentistry, Jamia Millia Islamia, Delhi), (wards of ESIC insured persons) seats of colleges under Employee State Insurance Corporation and Armed Forces Medical College, Pune for the Under graduate session 2023-24 will be conducted by Medical Counseling Committee/ Directorate General of Health Services, Ministry of Health and Family Welfare, Government of India",
                link: "https://www.nanochat.in"
            },
            location: {
                img: location,
                para: "All India Institute of Medical Sciences Jodhpur is is located at just 15 Kms away from the city railway station.The city railway station is located at 330 Kms away from Jaipur- the state Capital of Rajasthan.It is well connected to Delhi by road and railway and it is 660 Kms away.Jodhpur is linked by Railways with Agra, Ahmedabad, Ajmer, Bikaner, Delhi, Jaipur, Kolkata, and Udaipur.Airport also Well connected from Delhi and MumbaiStudents can reach the institute by air if they are from another state or city, bus, or even train depending on the distance and their convenience. The details of the transport are as follows. Jodhpur Junction is the nearest railway junction to AIIMS Jodhpur, which is about 6 km. The nearest bus depot from the institute is only 4 km away and convenient for those traveling by bus. By air, Jodhpur Airport is about 8 km from the institute..",
                maplink: "https://www.google.com/maps/place/All+India+Institute+of+Medical+Sciences+(AIIMS),+Jodhpur/@26.2390443,73.0046956,17z/data=!4m10!1m2!2m1!1sAIIMS+Jodhpur+!3m6!1s0x39418c082dc64515:0xaa9da8d09f2b5fc!8m2!3d26.2389604!4d73.0074086!15sCg1BSUlNUyBKb2RocHVykgEObWVkaWNhbF9zY2hvb2zgAQA!16s%2Fm%2F0n4brr1?entry=ttu"
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

export default AIIMSJodhpur
