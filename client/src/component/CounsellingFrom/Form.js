import React, { useState } from 'react'
import './form.css'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import SocialMedia from '../SocialMedia/SocialMedia';
import FormModal from '../FormModal/FormModal';
import toast from 'react-hot-toast';
import { CounsellingPayment } from '../API/paymentapi';
import { useNavigate } from 'react-router-dom';

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
  const [unpaidChecked, setUnpaidChecked] = useState(false);
  const [paidChecked, setPaidChecked] = useState(false);
  const navigate = useNavigate()

  const setVal = (e) => {
    const { name, value } = e.target;

    setInpval(() => {
      return {
        ...inVal,
        [name]: value
      }
    })
  }

  const handleOpen = (e) => {
    e.preventDefault()
    if (!inVal.fname.trim()) {
      toast.error("Enter Your Name", {
        autoClose: 3000,
      })
    } else if (inVal.phonenumber.length < 10) {
      toast.error("Enter Your Correct Phone number", {
        autoClose: 3000,
      })
    } else if (!inVal.AIQRank.trim()) {
      toast.error("Enter Your AIQ Rank", {
        autoClose: 3000,
      })
    } else if (!inVal.category.trim()) {
      toast.error("Enter Your Category", {
        autoClose: 3000,
      })
    } else {
      setOpen(true);
    }
  }

  const handleSubmit = (e) => {
    if (paidChecked) {
      const amount = 1000
      CounsellingPayment(amount)
      setOpen(false)
    } else {
      toast.success('your form will submitted successsully')
      navigate('/')
    }
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
        handleSubmit={handleSubmit}
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
