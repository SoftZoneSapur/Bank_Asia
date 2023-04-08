import React from 'react';
import "./Forgot_Password_Components.css"

const Forgot_Password_Components = () => {
    return (
        <div className='container test'>
            
            <div className="Forgot_Password_Box">
                <h3>Password Reset</h3>
                <p>Enter your email address</p>
                <input placeholder='Enter your email address' class="form-control my-3" type="email" />
                <button className='btn btn-success'>Next</button>

                <div class="d-flex justify-content-between mt-4">
                    {/* <button class="btn btn-info"> */}
                        <a class="btn btn-info mb-4" href="Office_Login">Login</a>
                    {/* </button>
                    <button class=" btn btn-info"> */}
                        <a class="btn btn-info mb-4" href="Registration">Register</a>
                    {/* </button> */}
                </div>

            </div>



        </div>
    );
};

export default Forgot_Password_Components;