import React, { useState } from 'react';
import './ragister.css';
import ragimg from "../../images/Mobile login-pana.png"
import Footer from '../Footer/Footer'
import { toast } from 'react-toastify';
import Navbar from '../Navbar/Navbar';
import SocialMedia from '../SocialMedia/SocialMedia';
import { serverhost } from '../../host';
import { UseFormValidation } from '../../hooks/FormValidation';

const Register = () => {
    const [passShow, setPassshow] = useState(false);
    const [cpassShow, setCPassshow] = useState(false);
    const { errors, handleValidation } = UseFormValidation();

    const [inpval, setInpval] = useState({
        fname: '',
        email: '',
        password: '',
        cpassword: ''
    });

    const setVal = (e) => {
        const { name, value } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    }

    const addUserdata = async (e) => {
        e.preventDefault();
        const { fname, email, password, cpassword } = inpval
        const isValid = handleValidation(inpval);
        if (isValid) {
            const data = await fetch(`${serverhost}/register`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fname, email, password, cpassword
                })
            });
            const res = await data.json();
            console.log(res, "res, ragister")
            if (res.status === (201)) {
                toast(res.msg, {
                    autoClose: 1500,
                })
                localStorage.setItem("user", res.data?.fname);
                localStorage.setItem("id", res.data?._id);
                setInpval({ ...inpval, fname: "", email: "", password: "", cpassword: "" })
            } else {
                toast(res.error, {
                    autoClose: 1500,
                })
            }
        }
    }

    return (
        <>
            <Navbar />
            <SocialMedia />
            <section className='container ragister'>

                <div className='ragisterimg'>
                    <h2>Looks like you're <br></br> new here!</h2>
                    <span>Sign up with your Email <br /> to get started</span> <br /> <br />
                    <img src={ragimg} alt="img" ></img>
                </div>

                <div className='form_data'>
                    <form>
                        <div className='form_input'>
                            <label htmlFor='fname'>Name</label>
                            <input type='text' onChange={setVal} value={inpval.fname} name="fname" id='fname' placeholder='Enter Your Name' />
                        </div>

                        <div className='form_input'>
                            <label htmlFor='email'>Email</label>
                            <input type='email' onChange={setVal} value={inpval.email} name="email" id='email' placeholder='Enter Your Email Address' />
                        </div>

                        <div className='form_input'>
                            <label htmlFor='password'>Password</label>
                            <div className='two' >
                                <input onChange={setVal} type={!passShow ? "password" : "text"} value={inpval.password} name="password" id='password' placeholder='Enter Your passsword' />
                                <div className='showpass' onClick={() => setPassshow(!passShow)}>
                                    {!passShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>

                        <div className='form_input'>
                            <div className='two' >
                                <input onChange={setVal} type={!cpassShow ? "password" : "text"} name="cpassword" value={inpval.cpassword} id='cpassword' placeholder='Confirm Password' />
                                <div className='showpass' onClick={() => setCPassshow(!cpassShow)}>
                                    {!cpassShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>

                        <button className='btn' onClick={addUserdata} >Continue</button>
                    </form>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Register
