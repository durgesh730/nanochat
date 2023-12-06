import React from 'react'
import CollegeDetails from './CollegeDetails'
import collegeImg from '../../images/aiims patna.jpeg'
import infra from '../../images/infrastructure.png'
import hostel from '../../images/hostel.png'
import location from '../../images/location.png'
import hospital from '../../images/hospital (1).png'


const AIIMSPatna = () => {

    const CollegeInfo = [
        {
            title: 'AIIMS PATNA',
            about: {
                collegeImgUrl: collegeImg,
                paraFirst: "All India Institute of Medical Sciences Patna is strategically located to address regional imbalances in healthcare services, research, and training. It was established under Pradhan Mantri Swasthya Suraksha Yojna (PMSSY) during the first phase following the- then Prime Minister Atal Bihari Vajpayee’s visionary announcement in Independence Day Speech on 15th August 2003.",
                paraSecond: "AIIMS Patna was one amongst six hospitals along with Raipur, Bhopal, Bhubaneswar, Jodhpur, and Rishikesh, in the country to improve healthcare facilities, provide quality medical education in super-specialty disciplines, and promote healthcare inclusion in underserved areas.",
                btnLink: "https://aiimspatna.edu.in/about/"
            },
            quickSummary: {
                paraGraph: "",
                established: "2012",
                institutionType: "Govt.",
                courses: "20",
                address: "AIIMS, Aurangabad Road, Phulwari Sharif, Patna-801507, Bihar, India.",
                officialSite: "http://www.aiimspatna.org/",
                contacts: "91-612-2451070",
                affiliatedUniversity: "Statutory Autonomous, AIIMS"
             
            },
            courses: {
                img: collegeImg,
                seats: "AIIMS Patna is permitted with MBBS seats = 125 ",
                tutionfee: "AIIMS Patna MBBS fees for various quota is given as. Apart from tuition fees, you need to pay various other fees during admission.Government Fees = ₹ 5856 /Year",
                ranking: "College Ranking is based on How students Preferred AIIMS Patna during all india and state level counselling. All India Ranking = 24 "
            },
            addmision: {
                para: "Find AIIMS Patna additional details given by medical college to Medical Counselling committee.",
                maleHostel: "yes",
                femaleHostel: "yes",
                otherInfo: "-",
                deanName: "Dr. Saurabh Varshney",
                nodalName: "Dr. Ayan Banerjee",
                designation: "Reporting Official",
                officeAddress: "Dean Office Admin Building AIIMS Patna",
                phone: "0612-2451006",
                email: "drayanb[at]aiimspatna.org"
            },
            bondStipend: {
                para: "Find AIIMS Patna PG courses few years of compulsary service and penalty below",
                totalYear: 3,
                penalty: "2500000",
                stipend:"68545 /month"
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
                paraFirst: "All India Institute Of Medical Sciences, Patna strives to provide the best academic and medical services to all. AIIMS, Patna has a library that has a wide collection of books encompassing a wide range of subjects. The library is headed by a library team, that looks after the maintenance and functioning of the library. The digital library on the campus gives students access to the World ebook Library, Cochrane Library, National Digital Library, Cambridge University Press, Clinical Key Medical Education, South Asia Archive, Thieme Open Access Journal, LWW E-Books and many more.AIIMS, Patna has hostel facilities for both boys and girls..With facilities made available for football, cricket and many other sports.",
                paraSecond: "Services for Central Laboratories are located on the fourth level of D Block (IPD Complex). Biochemistry, microbiology, and pathology are included.CFM Lab, Physiology Lab, Gastroenterology Lab, Non-Invasive Cardiology Lab, Pulmonary Medicine Lab, and Radiology Services are more functional laboratories (USG, X-Ray, CT-Scan, MRI).The cafeteria on the campus aims to serve healthy and nutritious food to all.The classrooms are fully furnished with smartboards, projectors, microphones and speakers. The auditorium is spacious and equipped with the latest technology.AIIMS, Patna has Banking and ATM facilities on the campus.",
            },
            hostel: {
                img: hostel,
                paraFirst: "AIIMS Patna hostel rooms are comfortably-furnished and made for a good stay. Girls & boys have separate blocks, and each block has a fixed accommodation capacity.There is a dedicated team of officials and workers to make the stay of students comfortable, safe.The AIIMS Patna hostel is a home away from home that provides a comfortable stay to students.", 
                paraSecond: "AIIMS Patna has several hostels for boys and girls separately for its undergraduate and postgraduate students, PhD scholars and resident doctors.Conveniently located, hostellers do not have to travel long distances after a day of hard work and studies.",
            },
            hospital: {
                img: hospital,
                paraFirst: "AIIMS Patna has over 43 departments such asAnaesthesiology,Anatomy,Biochemistry,Burns & Plastic Surgery,Cardiology,Cardiothoracic Surgery,College of Nursing,Community & Family Medicine,Dentistry,Dermatology,Emergency Medicine,ENT,Forensic Medicine & Toxicology,Gastroenterology,General Medicine,General Surgery,Hospital Administration.",
                paraSecond: "Medical Education,Medical Oncology & Haematology,Microbiology, Neonatology,Nephrology,Neurology,Neurosurgery,Nuclear Medicine,Obstetrics & Gynecology,Ophthalmology,Orthopaedics,Pathology / Lab Medicine,Pediatrics.Pediatric Surgery,Pharmacology,Physical Medicine & Rehabilitation,Physiology,Psychiatry,Pulmonary Medicine,Radiodiagnosis,Radiotherapy,Surgical Gastroenterology,Surgical Oncology,Transfusion Medicine & Blood Bank,Trauma & Emergency,Urology.",
            },
            counselling: {
                para: "All the NEET Under Graduate (MBBS/BDS) aspirant candidates are hereby informed that counseling for All India Quota seats/ Institutional Quota/ Domicile (internal candidates) of Central Universities (Aligarh Muslim University/ Banaras Hindu University/ University of Delhi/Faculty of Dentistry, Jamia Millia Islamia, Delhi), (wards of ESIC insured persons) seats of colleges under Employee State Insurance Corporation and Armed Forces Medical College, Pune for the Under graduate session 2023-24 will be conducted by Medical Counseling Committee/ Directorate General of Health Services, Ministry of Health and Family Welfare, Government of India",
                link: "https://www.nanochat.in"
            },
            location: {
                img: location,
                para: "Located in Bihar, the capital and largest city of the state, Patna is known for its ancient history, archaeological sites, and historical events. In addition to its many sights and attractions, Patna is now a major hub for business as well as medical facilities. The city has many major hospitals including AIIMS Patna, IGIMS, PMCH, etc. Popular leisure, medical, and business travel destination in India, Patna has a good road, air, and rail infrastructure that connects it with all major cities.An easy way to get to Patna is to fly to Lok Nayak Jayaprakash Airport from anywhere in India. For commuting, you can take private taxis or pre-paid auto-rickshaws. The airport is well connected via Air India, Go Air, Jet Airways, Indigo, and JetLite to all the major cities like Bangalore, Delhi, Chennai, Kolkata, Hyderabad, Lucknow, Mumbai, and Vishakhapatnam.A city on National Highway 30, Patna is easily accessible by bus or taxi from all major cities. Buses run regularly on different routes across the country and connect the city with the rest of the country.There is also a rail network between Delhi and Kolkata via which you may reach Patna. It happens to be among the busiest rail networks in the country. Trains running at regular intervals between Patna Junction and other parts of the country connect the city with other parts of the country. There is a taxi stand at the station as well as an auto-rickshaw service.",
                maplink: "https://www.google.com/maps/place/AIIMS+Patna/@25.5629068,85.0364629,17z/data=!3m1!4b1!4m6!3m5!1s0x39f2a9ea2ae04fd9:0xb2efd2a31008d750!8m2!3d25.562902!4d85.0413338!16s%2Fm%2F0k0n90r?entry=ttu"
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

export default AIIMSPatna
