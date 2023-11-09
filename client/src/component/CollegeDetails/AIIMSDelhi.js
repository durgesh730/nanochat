import React from 'react'
import CollegeDetails from './CollegeDetails'
import collegeImg from '../../images/delhiaiims1.jpg'
import infra from '../../images/infrastructure.png'
import hostel from '../../images/hostel.png'
import location from '../../images/location.png'
import hospital from '../../images/hospital (1).png'


const AIIMSDelhi = () => {

    const CollegeInfo = [
        {
            title: 'AIIMS DELHI',
            about: {
                collegeImgUrl: collegeImg,
                paraFirst: "AIIMS was created in 1956 to serve as a nucleus for nurturing excellence in all aspects of health care.Creating a country imbued with a scientific culture was Jawaharlal Nehru's dream, and immediately after independence he prepared a grand design to achieve it. Among the temples of modern India which he designed, was a centre of excellence in the medical sciences.",
                paraSecond: "Objectives -  To develop a pattern of teaching in undergraduate and postgraduate medical education in all its branches so as to demonstrate high standard of medical education to all medical colleges and other allied institutions in India.To bring together in one place educational facilities of the highest order for the training of the personnel in all important branches of the health activity.to attain self sufficiency in postgraduate in medical education.",
                btnLink: "https://aiims.edu/index.php?option=com_content&view=article&id=682&Itemid=3711&lang=en"
            },
            quickSummary: {
                paraGraph: "The health survey and development committee, chaired by Sir Joseph Bhore, an Indian government official, recommended as early as 1946 the establishment of a national medical center that would concentrate on meeting the need for a highly-skilled workforce to support healthcare activities country.AIIMS was finally created in 1956 as an autonomous institution under a parliamentary act, serving as a center to support excellence in all aspects of care health.",
                established: "1956",
                institutionType: "Govt.",
                courses: "33",
                address: "AIIMS, Ansari Nagar, New Delhi-110029, India",
                officialSite: "https://www.aiims.edu/",
                contacts: "91-11-26588663 / 26588641",
                affiliatedUniversity: "Statutory Autonomous, AIIMS"
            },
            courses: {
                img: collegeImg,
                seats: "All India Institute of Medical Sciences Delhi is permitted with MBBS seats = 132",
                tutionfee: "AIIMS New Delhi MBBS fees for various quota is given as. Apart from tuition fees, you need to pay various other fees during admission. Government Fees = ₹ 5856 /Year, NRI/OCI Fees	$ 75000 /Year",
                ranking: "College Ranking is based on How Parents Preferred AIIMS New Delhi during last year AIQ and SQ counselling. All India Ranking	= 1 "
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
                stipend:"₹ 26300 /month"
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
                paraFirst: "AIIMS campus is divided into 5 locations, the East Campus Includes OPD ward, main hospital ward, infirmary, medical school, research department, convergence ward, BB Dixit library, administration wing, student dormitories, central lawn, Jawaharlal auditorium, and staff room. This eastern city also has 4 centers specializing in cardiac carcinoma and neurology, an Oncology Center, an Ophthalmic Science Center, and a Dental Education and Research Center. The library is open 24 hours a day, 7 days a week (356 days) and has more than 1,50,257 books and other documents such as bound newspapers, pamphlets, etc.and employees, technicians and non-technicians. An average of 320 readers visit the library every day.",
                paraSecond: "The library is well equipped with modern facilities to support biomedical teaching and research.;A library has predominantly electronic resources (80%) that are provided with anytime, anywhere access to physicians and faculty members for their academic activities. Access Medicine Books, Oxford Medicine Online (53 textbooks), OVID",
            },
            hostel: {
                img: hostel,
                paraFirst: "AIIMS has more than one accommodation section with all sorts of facilities. Twelve male and 26 female office attendants are posted in different hostels. AIIMS has several halls of residence with a capacity of over 1990 accommodation facilities with single/double rooms, 418 accommodations for nursing students and staff nurses and 24 guest rooms furnished with all facilities.",
                paraSecond: "These are spread over different hostels and residences in the AIIMS Main Campus, Masjid Moth, Ayurvigyan Nagar, and JPNA Trauma Centre Hostel available in Raj Nagar. Male hostels have a total of more than 1350 student accommodation facilities. Female hostel has 650 accommodation facilities, Staff Hostel 400 accommodation, and also Guest rooms are available here. All residences have common rooms, sports clubs, Gymnasium, reading rooms, and recreational facilities.",
            },
            hospital: {
                img: hospital,
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
                maplink: "https://www.google.com/maps/d/viewer?mid=1nZR5sCwoJYYzenaIHvOlbViiYck&hl=en&ll=28.567677432266798%2C77.20968476679552&z=20"
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

export default AIIMSDelhi
