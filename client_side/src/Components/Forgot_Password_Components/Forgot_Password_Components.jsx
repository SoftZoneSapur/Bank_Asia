import React from 'react';
import "./Forgot_Password_Components.css"

const Forgot_Password_Components = () => {
    return (
        <div className='container test'>
            
            <div className="Forgot_Password_Box">
                <h3>Password Reset</h3>
                <p>Enter your email address</p>
                <input placeholder='Enter your email address' class="form-control my-3" type="email" />
                <a href="OTP_Input">
                    <button className='btn btn-success'>Next</button>
                </a>

                <div class="d-flex Forgot_Password_Box_Other_btn justify-content-between mt-4">
                        <a class="btn btn-info mb-4" href="Office_Login">Login</a>
                        <a class="btn btn-info mb-4" href="Registration">Register</a>
                </div>

            </div>



        </div>
    );
};

export default Forgot_Password_Components;