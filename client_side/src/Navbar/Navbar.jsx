import React from 'react';
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Bank_Asia_Logo from "../Image/bank_asia_logo.jpg"
import Bank_Asia_Logo_Agent from "../Image/agent-banking2.png"
import Gore_Bose_Account_Khulun from "../Image/Gore-bose-hisab-icon-w.png"

const Navbar = () => {



    return (
        <div>
            {/* Top Navbar  */}
            <div className="Top_Navbar">
                <div className="Top_Navbar_Left_Side">
                    <span> <i class="fa  fa-envelope"></i> </span> || <span> <i class="fa fa-facebook"></i>  </span>
                </div>
                <div className="Top_Navbar_Right_Side">
                    <span><i class="fa fa-phone"></i> 01711055368</span>
                </div>
            </div>
            {/* End Top Navbar  */}

            {/* Top Title Bar */}
            <div className="Top_Title_Bar">
                <div className="Top_Title_Bar_Left_Side">
                    <img src={Bank_Asia_Logo} alt="Bank Asia Logo" />
                </div>
                <div className="Top_Title_Bar_Right_Side">
                    <img className='Top_Title_Bar_Right_Side_Agent_Logo' src={Bank_Asia_Logo_Agent} alt="Bank Asia Agent Logo" />
                    <img className='Top_Title_Bar_Right_Side_Gore_Bose_Account_Khulun_Image' src={Gore_Bose_Account_Khulun} alt="Gore Bose Account Khulun Image" />
                    <div className="Phon_Icon">
                        <i class="fa fa-phone"></i>
                    </div>
                    <div className="Call_16205">
                        <span className='Call_16205_Css'>16205</span> <br /> <span>Help Line</span>
                    </div>
                </div>
            </div>
            {/* End Top Title Bar */}



            {/* Top Menu Bar  */}
            <div className="Top_Menu_bar">
                <a href="">Home</a>
                <a href="">Deposit</a>
                <a href="">FDR</a>
                <a href="">2%</a>
                <a href="">2%</a>
            </div>
            {/* End Top Menu Bar  */}




        </div>
    );
};

export default Navbar;