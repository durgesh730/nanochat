import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import './login.css';
import logimg from "../../images/Mobile login-rafiki.png";
import toast from 'react-hot-toast';
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar';
import SocialMedia from '../SocialMedia/SocialMedia';
import { serverhost } from '../../host';

const Login = () => {
    const Navigate = useNavigate()
    const [passShow, setPassshow] = useState(false);

    const [inpval, setInpval] = useState({
        email: '',
        password: '',
    })

    const setVal = (e) => {
        const { name, value } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    }

    const loginuser = async (e) => {
        e.preventDefault();
        const { email, password } = inpval;
        if (email === "") {
            toast.error("Please Enter the email")
        } else if (!email.includes('@')) {
            toast.error("Please Enter the valid email")
        } else if (password === " ") {
            toast.error("Please Enter  Your password")
        } else if (password.length < 6) {
            toast.error("Password must be 6 characters")
        } else {
            const data = await fetch(`${serverhost}/login`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            });
            const res = await data.json();
            if (res.status === (200)) {
                toast.success(res?.result?.msg)
                localStorage.setItem('token', res.result?.token)
                localStorage.setItem("user", res.result?.userValid.fname);
                localStorage.setItem("Id", res.result?.userValid._id);
                Navigate('/')
                setInpval({ ...inpval, email: " ", password: "" })
            } else if (res.status !== (201)) {
                toast.error(res.error)
            }
        }
    }

    return (
        <>
            <Navbar />
            <SocialMedia />
            <section className='container login'>
                <div className='loginimg'>
                    <h2>Welcome to Login</h2>
                    <p>Hi, we are you glad you are back.<br /> Please login</p>
                    <img src={logimg} alt="img"></img>
                </div>
                <div className='form_data'>
                    <form>
                        <div className='form_input'>
                            <label htmlFor='email'>Email</label>
                            <input type='email' name="email" value={inpval.email} id='email' placeholder='Enter Your Email Address' onChange={setVal} />
                        </div>

                        <div className='form_input'>
                            <label htmlFor='password'>Password</label>
                            <div className='two'>
                                <input type={!passShow ? "password" : "text"} value={inpval.password} name="password" id='password' placeholder='Enter Your password' onChange={setVal} />
                                <div className='showpass' onClick={() => setPassshow(!passShow)}>
                                    {!passShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>

                        <button className='btn' onClick={loginuser} >Login</button>
                        <p>Don't have an Account? <Link to="/signup"> Sign Up</Link></p>
                        <p>Forgot Password: <Link to="/password-reset"> Click Here</Link></p>
                    </form>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Login
