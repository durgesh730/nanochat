import React from 'react'
import "../../style/aiimsdelhi.css";
import CollegeDetails from './CollegeDetails';

const AIIMSMadurai = () => {

  const CollegeInfo = [
    {
        title: 'College Name',
        about: {
            collegeImgUrl: "",
            paraFirst: "",
            paraSecond: "",
            btnLink: ""
        },
        quickSummary: {
            paraGraph: "",
            established: "",
            institutionType: "",
            courses: "",
            address: "",
            officialSite: "",
            contacts: "",
            affiliatedUniversity: ""
        },
        courses: {
            img: "",
            seats: "",
            tutionfee: "",
            ranking: ""
        },
        addmision: {
            para: "",
            maleHostel: "",
            famaleHostel: "",
            otherInfo: "",
            deanName: "",
            nodalName: "",
            designation: "",
            officeAddress: "",
            phone: "",
            email: ""
        },
        bondStipend: {
            para: "",
            totalYear: "",
            penalty: "",
            stipend: ""
        },
        fee: {
            tutionfee: "",
            potfundHostel: "",
            hostelRent: "",
            messFeeNonVeg: "",
            gymfee: "",
            hosteldeposit: "",
            electricityCharge: "",
            messDeposit: "",
            cautionDeposit: "",
            laboratoryfee: "",
            registrationfee: "",
            studentUnionFee: "",
            messFeeVeg: "",
        },
        infrastructure: {
            img: "",
            paraFirst: "",
            paraSecond: "",
        },
        hostel: {
            img: "",
            paraFirst: "",
            paraSecond: "",
        },
        hospital: {
            img: "",
            paraFirst: "",
            paraSecond: "",
        },
        location: {
            img: "",
            para: "",
        },
    }
]

  return (
    <>
      
      <CollegeDetails info={CollegeInfo} />
    </>
  );
};
export default AIIMSMadurai
