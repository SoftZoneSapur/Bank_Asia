import React from 'react';
import "./Office_Login_Components.css"

import Office_Login_Background from "../../Assets/Image/Office_Login_Background.JPG"
import Agent_Logo from "../../Assets/Image/Agent_Logo.jpg"


const Office_Login_Components = () => {
    return (
        <div>
            <div className="Office_Login">

                <div className="Office_Login_Left">
                    
                    <img src={Office_Login_Background} alt="" />
                </div>



                <div className="Office_Login_Right">
                    
                    <img className='img-fluid' src={Agent_Logo} alt="" />
                    <input className='form-control' type="text" />
                    <input className='form-control' type="password" />
                    <button className='btn btn-info'>Login</button>
                
                </div>

            </div>
        </div>
    );
};

export default Office_Login_Components;