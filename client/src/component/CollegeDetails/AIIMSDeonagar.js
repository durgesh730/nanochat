import React from 'react'
import CollegeDetails from './CollegeDetails'
import collegeImg from '../../images/AIIMS DEOGHAR.jpeg'
import infra from '../../images/infrastructure.png'
import hostel from '../../images/hostel.png'
import location from '../../images/location.png'
import hospital from '../../images/hospital (1).png'


const AIIMSDeoghar = () => {

    const CollegeInfo = [
        {
            title: 'AIIMS DEOGHARAR',
            about: {
                collegeImgUrl: collegeImg,
                paraFirst: "The government of India has launched the Pradhan Mantri Swasthya Suraksha Yojana (PMSSY) under the Ministry of Health and Family Welfare, New Delhi with the objective of correcting regional imbalances in the availability of affordable and reliable tertiary healthcare services and also to augment facilities for quality medical education creating a critical mass of doctors and conduct research in the country relevant to the area . Main mission is to establish a centre of excellence in medical education, training, health care and research imbued with scientific culture, compassion for the sick and commitment to serve the under served.",
                paraSecond: "Main objectives according to Executive Director & CEO are to create an excellent academic and educational milieu for providing a platform for development of quality medical services, teaching and research. Other objectives are to achieve an epitome of quality in medical education delivery and training system and to render International standard quality patient care and health care development system",
                btnLink: "https://www.aiimsdeoghar.edu.in/aboutus/mission"
            },
            quickSummary: {
                paraGraph: "",
                established: "2019",
                institutionType: "Govt.",
                courses: "-",
                address: "AIIMS, Deoghar, Jharkhand, India.",
                officialSite: "	https://aiimsdeoghar.edu.in//",
                contacts: "	0755-2672327",
                affiliatedUniversity: "Statutory Autonomous, AIIMS"
            },
            courses: {
                img: collegeImg,
                seats: " AIIMS Deogarh contains MBBS seats= 125",
                tutionfee: "All India Institute of Medical Sciences Deogarh MBBS fees for various quota is given below. Apart from tuition fees, you need to pay various other fees during admission.Government Fees ₹ 5856 /Year",
                ranking: " College Ranking is based on How last year candidates Preferred AIIMS Deogarh during NEET 2022 All India counselling and state counselling.Ranking = 65 "
            },
            addmision: {
                para: "Find AIIMS Deogarh additional details given by this medical college to Medical Counselling committee.",
                maleHostel: "yes",
                femaleHostel: "yes",
                otherInfo: "Academic Fee and Hostel fee is one time fee for the entire course",
                deanName: "PROF. DR. SAURABH VARSHNEY",
                nodalName: "DR. ARPAN HALDAR",
                designation: "Reporting Official",
                officeAddress: "PANCHAYAT TRAINING INSTITUTE DABURGRAM JASIDIH DEOGHARJHARKHAND-814142 (AIIMS TEMPORARY CAMPUS)",
                phone: "	06432-295052",
                email: "registrar[at]aiimsdeoghar.edu.in"
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
                paraFirst: "The institute offers MBBS and BSc in Nursing programme at the UG level. AIIMS Deoghar offers courses across 20+ departments, which include Anatomy, Biochemistry, Community & Family Medicine, Pharmacology and Physiology. The Institute has a well-recognised and highly-experienced faculty who are of good repute in their relevant Medical domains",
                paraSecond: "The institute offers several facilities for students. AIIMS Deoghar facilities are also offered for staff and faculty members. Some of the facilities included in the All India Institute of Medical Sciences Deoghar are a boys' hostel, a girls' hostel, a library etc. The institute provides hostel accommodation facilities for boys and girls. AIIMS Deoghar has separate hostels for boys and girls. AIIMS Deoghar library has various books on various subjects of medicines. Both outdoor and indoor sports facilities are available for students at AIIMS Deoghar. Labs and guest rooms are also included in the All India Institute of Medical Sciences Deoghar facilities list.",
            },
            hostel: {
                img: hostel,
                paraFirst: "AIIMS Deoghar offers hostel facilities separately for boys and girls. The institute has a boy's hostel to provide accommodation facilities for outstation students. ",
                paraSecond: "The institute provides hostel accommodation facilities for girls and boys. A separate girls' hostel is there at All India Institute of Medical Sciences Deoghar.",
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
                para: "The institute is located in Deoghar, Jharkhand, in Daburgram Jasidih. Deoghar International Airport is 19.9 kilometres away. AIIMS Deoghar is 35 minutes away. Deoghar Junction, 15 kilometres away, is the nearest railway station. From the railway station, it will take 31 minutes to reach AIIMS Deoghar. Students can take a bus from the Jasidih Bus Stop, which is the closest bus stop to the All India Institute of Medical Sciences, Deoghar.",
                maplink: "https://www.google.com/maps/place/All+India+Institute+of+Medical+Sciences,+Deoghar/@24.4360971,86.6130299,15z/data=!4m6!3m5!1s0x39f13ef928db2cff:0x7394cef0c1a6d8c2!8m2!3d24.4360971!4d86.6130299!16s%2Fg%2F11fz_0d7q_?entry=ttu"
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

export default AIIMSDeoghar
