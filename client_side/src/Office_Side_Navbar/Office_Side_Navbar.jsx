import React from 'react';
import "./Office_Side_Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Office_Side_Navbar_Two from './Office_Side_Navbar_Two';

const Office_Side_Navbar = () => {
    return (
        <div>
            
            <div className="Office_Side_Navbar_Top">
                <div className="Office_Side_Navbar_Top_Left">
                    <a href="Office_Side_Home_Page">Agent Banking</a>
                </div>
                <div className="Office_Side_Navbar_Top_Right">

                    <div class="Office_Side_dropdown">

                        <div className="Office_Side_dropdown_btn">

                            <button class="Office_Side_dropbtn"><i class="fa fa-user"></i> User</button>
                                <div class="Office_Side_dropdown-content">
                                    <a href="#">
                                        <i class="fa fa-user"></i>
                                        User Name:
                                    </a>
                                    <a href="#">
                                    <i class="fa fa-eye"></i>
                                        View Profile
                                    </a>
                                    <a href="#">
                                    <i class="fa fa-key"></i>
                                        Change Password
                                    </a>
                                </div>
                            </div>
                    
                        </div>

                        <span className='Office_Side_dropdown_btn'>
                            <i class="fa fa-calendar"></i>
                            Date
                        </span>
                        <span className='Office_Side_dropdown_btn'>
                            <i class="fa fa-arrow-right"></i>
                            Sign Out
                        </span>
                        <span className='Office_Side_dropdown_btn'>
                            <i class="fa-solid fa-house"></i>
                            ⌂
                            System Home
                        </span>

                    </div>
            </div>



            <Office_Side_Navbar_Two />
        </div>
    );
};

export default Office_Side_Navbar;