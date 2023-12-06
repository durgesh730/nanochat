import React from 'react'
import { Link } from 'react-router-dom'
import './cards.css'

const Cards = () => {
    return (
        <>
            <div className='container'>
                <div className='text-center cutoff'>
                    <h2> Would you like to See State Wise NEET CutOff ? </h2></div>

                <div className='State' data-aos="fade-up">
                    <div className='ThirdCard'>
                        <div class="card ">
                            <div class="card-body d-grid ">
                                <div className='cardsheading'><span>States</span></div> <hr />
                                <Link to={"Andhra Pradesh"}>Andhra Pradesh</Link>
                                <Link to={"Arunachal Pradesh"}>	Arunachal Pradesh</Link>
                                <Link to={"Assam"}>Assam</Link>
                                <Link to={'Bihar'}>Bihar</Link>
                                <Link to={"Chhattisgarh"}>Chhattisgarh</Link>
                                <Link to={"Chandigarh"}>Chandigarh</Link>
                                <Link to={"Delhi"}>Delhi</Link>
                                <Link to={"Goa"}>Goa</Link>
                              
                            </div>
                        </div>
                    </div>

                    <div className='ThirdCard'>
                        <div class="card container">
                            <div class="card-body d-grid ">
                                <div className='cardsheading'><span>States</span></div><hr />
                                <Link to={"Gujarat"}>Gujarat</Link>
                                <Link to={"Haryana"}>Haryana</Link>
                                <Link to={"Himachal Pradesh"}>Himachal Pradesh</Link>
                                <Link to={"Jharkhand"}>Jharkhand</Link>
                                <Link to={"Karnataka"}>Karnataka</Link>
                                <Link to={"Kerala"}>Kerala</Link>
                                <Link to={"Madhya Pradesh"}>Madhya Pradesh</Link>
                                <Link to={"Maharashtra"}>Maharashtra</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='horiline' >
                    <hr />
                </div>

                <div className='State'>
                    <div className='ThirdCard' data-aos ="fade-up-right" >
                        <div class="card container">
                            <div class="card-body d-grid ">
                                <div className='cardsheading'><span>States</span></div><hr />
                                
                                <Link to={"Manipur"}>Manipur</Link>
                                <Link to={"Meghalaya<"}>Meghalaya</Link>
                                <Link to={"Mizoram"}>Mizoram</Link>
                                <Link to={"Nagaland"}>Nagaland</Link>
                                <Link to={"Odisha"}>Odisha</Link>
                                <Link to={"Punjab"}>Punjab</Link>
                                <Link to={"Rajasthan"}>Rajasthan</Link>
                            </div>
                        </div>
                    </div>

                    <div className='ThirdCard' data-aos ="fade-up-left" >
                        <div class="card container">
                            <div class="card-body d-grid ">
                                <div className='cardsheading'><span>States</span></div><hr />
                                
                                <Link to={"Sikkim<"}>Sikkim</Link>
                                <Link to={"Tamil Nadu"}>Tamil Nadu</Link>
                                <Link to={"Telangana"}>Telangana</Link>
                                <Link to={"Tripura"}>Tripura</Link>
                                <Link to={"Uttar Pradesh"}>Uttar Pradesh</Link>
                                <Link to={"Uttarakhand"}>Uttarakhand</Link>
                                <Link to={"West Bengal"}>West Bengal</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
