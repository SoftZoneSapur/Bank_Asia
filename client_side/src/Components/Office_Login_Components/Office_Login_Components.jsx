import React from 'react';
import "./Office_Login_Components.css"

import Office_Login_Background from "../../Assets/Image/Office_Login_Background.JPG"
import Agent_Logo from "../../Assets/Image/Agent_Logo.jpg"


const Office_Login_Components = () => {
    return (
        <div>
            <div className="Office_Login_Office_Side">

                <div className="Office_Login_Office_Side_Left">
                    
                    <img src={Office_Login_Background} alt="" />
                </div>



                <div className="Office_Login_Office_Side_Right">
                    
                    <img className='img-fluid' src={Agent_Logo} alt="" />
                    <input placeholder='User ID' className='form-control' type="text" />
                    <input placeholder='Password' className='form-control' type="password" />
                    <a href="Office_Side_Home_Page">
                        <button className='btn'>Login</button>
                    </a>
                    <a href="Forgot_Password">Forgot Your Admin Password?</a>

                    <div className="Office_Login_Office_Side_Other_Btn">
                        <a href="/"><button className='btn'>Public Home</button></a>
                        <a href="Registration"><button className='btn'>Admin Registration</button></a>
                    </div>

                    <p>©Copyright <b>Rasal Hossain</b>. All Rights reserved.</p>
                
                </div>

            </div>
        </div>
    );
};

export default Office_Login_Components;