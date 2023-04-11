import React from 'react';

import "./Office_Side_Home_Page_Components.css"

const Office_Side_Home_Page_Components = () => {
    return (
        <div>
            <div className="Office_Side row">
                <div className="Office_Side_Left col-md-5">
                    <div className="Office_Side_Left_Box">

                        <img src="https://img.favpng.com/6/14/2/account-icon-avatar-icon-man-icon-png-favpng-d9YxzGw3UPA07dE7sAQyMSiNk.jpg" alt="" />
                        <h3>Service Holder Name</h3>
                        <p>Service Holder (Title) </p>

                        <div className="Office_Side_Left_Box_Text">
                            <p>Today Date</p>
                            <p>IP Address</p>
                        </div>
                        <div className="Office_Side_Left_Box_Text">
                            <p>Last Login</p>
                            <p>Total Login Tow Day</p>
                        </div>

                    </div>
                </div>


                <div className="Office_Side_Right col-md-7">

                    <div className="Office_Side_Right_Box">
                        <a href="Account_Print">Account Print</a>
                    </div>
                    <div className="Office_Side_Right_Box">
                        <a href="">Service Name</a>
                    </div>
                    <div className="Office_Side_Right_Box">
                        <a href="">Service Name</a>
                    </div>
                    <div className="Office_Side_Right_Box">
                        <a href="">Service Name</a>
                    </div>
                    <div className="Office_Side_Right_Box">
                        <a href="">Service Name</a>
                    </div>
                    <div className="Office_Side_Right_Box">
                        <a href="">Service Name</a>
                    </div>
                    <div className="Office_Side_Right_Box">
                        <a href="">Service Name</a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Office_Side_Home_Page_Components;