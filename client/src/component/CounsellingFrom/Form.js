import React, { useState } from 'react'
import './form.css'
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import SocialMedia from '../SocialMedia/SocialMedia';
import { serverhost } from '../../host';
import FormModal from '../FormModal/FormModal';
import axios from "axios"

const Form = () => {

  const [inVal, setInpval] = useState({
    fname: '',
    lastname: "",
    DOB: "",
    AIQRank: "",
    CRank: "",
    phonenumber: "",
    category: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    question: "",
    state: ""
  })
  const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  const [unpaidChecked, setUnpaidChecked] = useState(false);
  const [paidChecked, setPaidChecked] = useState(false);

  const setVal = (e) => {
    const { name, value } = e.target;

    setInpval(() => {
      return {
        ...inVal,
        [name]: value
      }
    })
  }

  // const handleform = async (e) => {
  //   e.preventDefault();

  //   const { fname, lastname, DOB, AIQRank, CRank, phonenumber, category,
  //     choice1, choice2, choice3, choice4, question, state } = inVal;

  //   if (fname === '') {
  //     toast("Enter Your Name", {
  //       autoClose: 3000,
  //     })
  //   } else if (phonenumber.length < 10) {
  //     toast("Enter Your Correct Phone number", {
  //       autoClose: 3000,
  //     })
  //   } else if (AIQRank === "") {
  //     toast("Enter Your AIQ Rank", {
  //       autoClose: 3000,
  //     })
  //   } else if (category === "") {
  //     toast("Enter Your Category", {
  //       autoClose: 3000,
  //     })
  //   } else {
  //     const data = await fetch(`${serverhost}/studentform`, {
  //       method: 'POST',
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({
  //         fname, lastname, DOB, AIQRank, CRank, phonenumber,
  //         category, choice1, choice2, choice3, choice4, question, state
  //       })
  //     });
  //     const res = await data.json();

  //     if (res.status === (201)) {
  //       toast("Your form submitted successfully", {
  //         autoClose: 3000,
  //       })
  //       setInpval({
  //         ...inVal,
  //         fname: '',
  //         lastname: "",
  //         DOB: "",
  //         AIQRank: "",
  //         CRank: "",
  //         phonenumber: "",
  //         category: "",
  //         choice1: "",
  //         choice2: "",
  //         choice3: "",
  //         choice4: "",
  //         question: "",
  //         state: ""
  //       })

  //     } else {
  //       toast("Please Enter Correct Details!", {
  //         autoClose: 3000,
  //       })
  //     }
  //   }

  // }

  const handleOpen = async () => {
    console.log("button clicked")

    const { data: { order } } = await axios.post(`${serverhost}/checkout`, {
      amount: 200
    })
    const options = {
      key: "rzp_test_tRFotIAhLlWm3v", // Enter the Key ID generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Durgesh chaudhary",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: `${serverhost}/paymentverification`,
      prefill: {
        name: "Gaurav Kumar", // logged in user name
        email: "gaurav.kumar@example.com",
        contact: "9000090000"
      },
      notes: {
        address: "Razorpay Corporate Office"
      },
      theme: {
        color: "#3399cc"
      }
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  }

  return (
    <>

      <Navbar />
      <SocialMedia />

      <FormModal
        setOpen={setOpen}
        open={open}
        unpaidChecked={unpaidChecked}
        setUnpaidChecked={setUnpaidChecked}
        paidChecked={paidChecked}
        setPaidChecked={setPaidChecked}
      />

      <div className='container formfields '>
        <form >
          <h2 className='text-center my-4'>Counselling Form</h2>
          <div className=' inputs'>
            <div className="form-group p-3 ">
              <input type="fname" className="form-control" value={inVal.fname} name="fname" id="name" aria-describedby="emailHelp" placeholder="First Name" onChange={setVal} minlength="3" />
            </div>

            <div className="form-group p-3 ">
              <input type="lastname" className="form-control" id="lastname" name="lastname" value={inVal.lastname} placeholder="Last Name" onChange={setVal} />
            </div>

            <div className="form-group p-3 ">
              <input type="DOB" className="form-control" id="DOB" value={inVal.DOB} name="DOB" placeholder="Category" onChange={setVal} />
            </div>
          </div>

          <div className='inputs'>
            <div className="form-group p-3 ">
              <input type="AIQRank" className="form-control" id="AIQRank" value={inVal.AIQRank} name="AIQRank" aria-describedby="emailHelp" placeholder="AIQ Rank" onChange={setVal} />
            </div>

            <div className="form-group p-3 ">
              <input type="CRank" className="form-control" id="CRank" name="CRank" value={inVal.CRank} placeholder="Category Rank" onChange={setVal} />
            </div>

            <div className="form-group p-3 ">
              <input type="phonenumber" className="form-control" name="phonenumber" value={inVal.phonenumber} id="phonenumber" placeholder="Phone Number" onChange={setVal} minlength="10" />
            </div>

            <div className="form-group p-3 ">
              <input type="category" className="form-control" name="category" value={inVal.category} id="category" placeholder="Category" onChange={setVal} />
            </div>
          </div>


          <div className='px-4 ' style={{ fontSize: "1.5rem", padding: "1rem" }} ><small className='text-center my-4'>Enter Your Desired College Choices </small></div>

          <div className='inputs'>
            <div className="form-group p-3 ">
              <input type="choice1" className="form-control" id="choice1" name="choice1" value={inVal.choice1} aria-describedby="emailHelp" placeholder="1. Choice" onChange={setVal} />
            </div>

            <div className="form-group p-3 ">
              <input type="choice2" className="form-control" id="choice2" name="choice2" value={inVal.choice2} placeholder="2. Choice" onChange={setVal} />
            </div>

            <div className="form-group p-3 ">
              <input type="choice3" className="form-control" id="choice3" name="choice3" value={inVal.choice3} placeholder="3. Choice" onChange={setVal} />
            </div>
          </div>

          <div className='d-flex'>
            <div className="form-group p-3 ">
              <input type="choice4" className="form-control  " value={inVal.choice4} name="choice4" id="choice4" placeholder="4. Choice" onChange={setVal} />
            </div>
          </div>

          <div className='textarea'>
            <div className="form-group p-3">
              <label htmlfor="DOB">You have any question than write here</label>
              <textarea class="form-control" id="question" value={inVal.question} name="question" rows="2" onChange={setVal}></textarea>
            </div>

            <div className="form-group p-3 ">
              <label htmlfor="DOB">Enter Your State Name</label>
              <input type="state" className="form-control" value={inVal.state} id="state" name="state" placeholder="State Name" onChange={setVal} />
            </div>

          </div>

          <div className='formbutton my-4'>
            <button type="button" onClick={handleOpen} className="btn">
              Submit
            </button></div>
        </form>
      </div>

      <Footer />
    </>
  )
}

export default Form
