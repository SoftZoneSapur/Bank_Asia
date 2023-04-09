import React from 'react';
import Footer from '../../Footer/Footer';
import Navbar_Nav from '../../Navbar/Navbar_Nav';

const New_Password = () => {
    return (
        <>
        <Navbar_Nav />

        <div className='container test'>
            <div className="Forgot_Password_Box">
                <h3>Password Reset</h3>
                <p>Enter your New Password</p>
                <input placeholder='Enter your New Password' class="form-control my-3" type="password" />
                <input placeholder='Enter your Confirm New Password' class="form-control my-3" type="password" />
                <a href="Office_Login">
                    <button className='btn btn-success'>Submit</button>
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

export default New_Password;