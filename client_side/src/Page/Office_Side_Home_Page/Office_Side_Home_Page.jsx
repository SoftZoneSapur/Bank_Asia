import React from 'react';
import Office_Side_Home_Page_Components from '../../Components/Office_Side_Home_Page_Components/Office_Side_Home_Page_Components';
import Office_Side_Navbar from '../../Office_Side_Navbar/Office_Side_Navbar';

const Office_Side_Home_Page = () => {
    return (
        <div>
            <Office_Side_Navbar />
            
            <Office_Side_Home_Page_Components />
            
        </div>
    );
};

export default Office_Side_Home_Page;