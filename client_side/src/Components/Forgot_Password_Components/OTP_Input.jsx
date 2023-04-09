import React from 'react';
import Navbar_Nav from '../../Navbar/Navbar_Nav';
import Footer from '../../Footer/Footer';

const OTP_Input = () => {
    return (
        <>
        <Navbar_Nav/>


        <div className='container test'>
            <div className="Forgot_Password_Box">
                <h3>Password Reset</h3>
                <p>Enter your OTP</p>
                <input placeholder='Enter your OTP' class="form-control my-3" type="text" />
                <a href="New_Password">
                    <button className='btn btn-success'>Next</button>
                </a>

                {/* <div class="d-flex Forgot_Password_Box_Other_btn justify-content-between mt-4">
                        <a class="btn btn-info mb-4" href="Office_Login">Login</a>
                        <a class="btn btn-info mb-4" href="Registration">Register</a>
                </div> */}

            </div>
        </div>

        <Footer />
        </>
    );
};

export default OTP_Input;