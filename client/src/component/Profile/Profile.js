import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { TextField } from '@mui/material'
import { AiFillSetting } from 'react-icons/ai';
import './Profile.css'

const Profile = () => {
    return (
        <>
            <Navbar />
            <center>

                <div className='accountsetting'>
                    <span>Account Settings <AiFillSetting /> </span>
                </div>

                <div className='infoProfile' >
                    <div className='' >
                        <TextField
                            id="standard-password-input"
                            label="Name"
                            type="name"
                            autoComplete="current-password"
                            variant="standard"
                        // value={username.value}
                        // onChange={username.onChange}
                        />
                    </div>

                    <div className='my-2' >
                        <TextField
                            id="standard-password-input"
                            label="Phone"
                            type="phone"
                            autoComplete="current-password"
                            variant="standard"
                        // value={phone.value}
                        // onChange={phone.onChange}
                        />
                    </div>
                    <div className='my-2'>
                        <TextField
                            id="standard-password-input"
                            label="Email"
                            type="email"
                            autoComplete="current-password"
                            variant="standard"
                        // value={email.value}
                        // onChange={email.onChange}
                        />
                    </div>
                </div>

                <div className='my-4' >
                    <button className='myprofile-btn mx-4'
                    // onClick={handleEdits} 
                    >
                        Save
                    </button>
                </div>
            </center>
            <Footer />
        </>
    )
}

export default Profile
