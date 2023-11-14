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
                paraFirst: "The establishment of the All India Institute of Medical Sciences (AIIMS) in New Delhi in 1956 was the dream project of the first Prime Minister of India, Shri Jawaharlal Nehru, and was implemented by the first Minister of Health of India.However, over the past 50 years, tertiary health services have realized that there is a huge regional disparity in improving the availability of affordable and reliable, quality medical education, by establishing a leading figure in physicians and carrying out research activities, with a peculiar relevance to the region.",
                paraSecond: "In 2003, the then Prime Minister of India Shri Atal Bihari Vajpayee have planned to build up 6 AIIMS in various parts of the country on the AIIMS line in New Delhi.In 2006, AIIMS, an organization of national importance, was set up by Bhopal, an initiative of the Government of India known as the Prime Minister’s Swasthya Suraksha Yojana under the Ministry of Health and Family Welfare, New Delhi.",
                btnLink: "https://aiimsbhopal.edu.in/index_controller/test?id=9#SHTM"
            },
            quickSummary: {
                paraGraph: "AIIMS is one of the partners of the Bhopal National Knowledge Network (NKN), which connects 52 medical colleges across the country.The prestigious ‘Ayushman Bharat’ project of the Government of India has also been launched at the AIIMS in Bhopal under the Prime Minister John Health Scheme for people in need of quality health care.In addition, the AIIMS Institute, through the tireless efforts of Babal, is able to obtain large CSR funding from both public and private companies, which is being used to establish a state-of-the-art, state-of-the-art facility at AIIMS, Bhopal.",
                established: "2012",
                institutionType: "Govt.",
                courses: "23",
                address: "AIIMS Campus, Saket Nagar, Habibganj, Bhopal- 462020, Madhya Pradesh, India.",
                officialSite: "	http://www.aiimsbhopal.edu.in/",
                contacts: "	0755-2672327",
                affiliatedUniversity: "Statutory Autonomous, AIIMS"
            },
            courses: {
                img: collegeImg,
                seats: "MBBS Seats available in All India Institute of Medical Sciences Bhopal is 125",
                tutionfee: "All India Institute of Medical Sciences Bhopal MBBS fees for various quota is given as. Apart from tuition fees, you need to pay various other fees during admission. Government Fees ₹ 5856 /Year",
                ranking: "College Ranking is based on How previous year candidates Preferred All India Institute of Medical Sciences Bhopal during all india and state level counselling.All India Ranking = 11 "
            },
            addmision: {
                para: "Find AIIMS Bhopal additional details given by this college to Medical Counselling committee",
                maleHostel: "yes",
                femaleHostel: "yes",
                otherInfo: "AIIMS Bhopal was established by the Act of Parliament w.e.f 16/07/2012 .The first batch of MBBS was inducted from July 2012.",
                deanName: "Professor Rajesh Malik",
                nodalName: "Mr. M. Sabir Chauhan",
                designation: "Reporting Official",
                officeAddress: "Saket Nagar Bhopal",
                phone: "0755-2672355",
                email: "registrar[at]aiimsbhopal.edu.in"
            },
            bondStipend: {
                para: "After MBBS course completion in AIIMS Bhopal, candidates should undergo rural compulsary service . If they skip, they need to pay service bond penalty.",
                totalYear: 0,
                penalty: 0,
                stipend: "₹ 26300 /month"
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
                paraFirst: "Aiims is an extension of the Bhopal Medical College building, with a further development based on the 200- to 250-bed Vishram Sadan type patient care facility by CS, Development of indoor sports complex with multipurpose hall, Phase II Construction of residential premises of various types of accommodation, development of entertainment Park, high green campus, herbal garden to increase the self-reliance of the company with respect to water resources for optimal energy conservation, A rural health center in Chicago, with a public health school, An international vaccine science center funded by CSR; Except for a number of development tasks.Auditorium = The auditorium at AIIMS Bhopal is an interesting architectural building.It has an octagonal shape and can seat up to 1000 seats in the audience gallery.There is an open-air amphitheater with an auditorium for outdoor events.The auditorium will be fitted with a synchronized sound and lighting system and green rooms.",
                paraSecond: "Library = It has planned to provide online science and print issues of national and international medical science journals, good quality books and audio reading space with access to international science and national biological databases. The Library offers world class library management systems like Radio Frequency Identification (RFID) system housed at the AIIMS Bhopal.The Central Library is open Monday through Friday from 9:30 a.m.to 6:00 p.m.Monday – Saturday The reading room is open from 09:30 a.m. to 12:00 p.m.The Library has 108 Subscribed journals, ERMED-247, Complementary and Other Access-365.It is a traditional print-based research center and a complete learning / integrated information center with access to both conventional and digital mode, both on-site and off-site 24 * 7 * 365.The Central Library has more than 250 students on three floors are located in a comfortable building that can be seated.The Central Library has a well-designed sophisticated infrastructure to meet the needs of reading and research.Both print and digital locations are equipped with print and appropriate and relevant learning and information resources.Resources are armed with the latest collection of books, magazines, journals, e-journals, e-books and databases from world-renowned publishers. Central Library operates fully automated using Koha – an integrated library management system with RFID-enabled security gates, smart card, self-check out and check-in and RFID drop box.There are some special features available.These are E-library, Lift & CCTV, Water Dispenser (First floor), Internet Services (Ethernet & Wi-Fi), Photocopying, Discussion & Smart Interaction Zone, Fire Alarm & Announcement system, Online Public Access Catalogue(OPAC), printing & binding services.",
            },
            hostel: {
                img: hostel,
                paraFirst: "The Hostels provide accommodation for men and women and nursing students which is situated within the campus.It have a running mess with variety of 4 meals a day.The hostels provide full safety to the students.UG Boys Hostel 260 Rooms has double occupancy with a common toilet.UG Girls Hostel has 132 Rooms double occupancy with common toilet.PG boys Hostel provides two hostels B & C Wing that have the capacity of 112 and 105 students with 217 rooms.There is single occupancy with attached toilet and 20 Family accommodation available.PG Girls Hostel A Wing has 147 rooms that provide single occupancy with attached toilets.Girls Hostel A wing occupied 206 rooms single with attached toilet and B wing occupied 156 rooms single with common toilet.Girls Hostel C Wing occupied 154 rooms that had double occupancy with common toilets.",
                paraSecond: "Sports and Recreation = AIIMS Bhopal hostel each floor has a common room that is equipped with a TV and internet access via WiFi.The hostels have indoor sports facilities like Table Tennis, Carrom and Chess with their courts.The surrounding grounds are prepared for outdoor sports such as Cricket, Football, Shuttlecock and volleyball.",
            },
            hospital: {
                img: hospital,
                paraFirst: "------------------------",
                paraSecond: "-------------------------",
            },
            counselling: {
                para: "All the NEET Under Graduate (MBBS/BDS) aspirant candidates are hereby informed that counseling for All India Quota seats/ Institutional Quota/ Domicile (internal candidates) of Central Universities (Aligarh Muslim University/ Banaras Hindu University/ University of Delhi/Faculty of Dentistry, Jamia Millia Islamia, Delhi), (wards of ESIC insured persons) seats of colleges under Employee State Insurance Corporation and Armed Forces Medical College, Pune for the Under graduate session 2023-24 will be conducted by Medical Counseling Committee/ Directorate General of Health Services, Ministry of Health and Family Welfare, Government of India",
                link: "https://www.nanochat.in"
            },
            location: {
                img: location,
                para: "Bhopal is the capital of Madhya Pradesh which is the Central State of India and the administrative headquarters of the Bhopal District and Bhopal Division.Bhopal has been selected as one of the top twenty Indian cities to be developed as a smart city under Prime Minister Narendra Modi’s flagship Smart Cities Mission.Raja Bhoj International Airport is located on the outskirts of Sant Hirdram, the premier airport serving the Indian state of Madhya Pradesh. From within the city, the VIP Road leads to the airport on a four- lane road 15 km north of the city.The main stations of Bhopal are the Bhopal Junction Station located in Old Bhopal and the Bhopal Habibganj Station located in New Bhopal.Both of these stations are WiFi equipped with waiting halls, communication facilities, refreshment centers, parking, passenger ticket counters and ticketing machines, health facilities and a dedicated State Railway Police Force to ensure security.National Highway 46 forms a ring road around Bhopal, which connects with Jabalpur to the east.",
                maplink: "https://www.google.com/maps/d/viewer?mid=1PDXvZROrqtPF7i6kCPzY-12hxTw&hl=en&ll=30.077970000000025%2C78.28552699999999&z=17"
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
