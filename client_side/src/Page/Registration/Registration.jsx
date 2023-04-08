import React from 'react';
import Registration_Components from '../../Components/Registration_Components/Registration_Components';

import Navbar_Nav from "../../Navbar/Navbar_Nav"
import Footer from '../../Footer/Footer';

const Registration = () => {
    return (
        <div>
            <Navbar_Nav />

            <Registration_Components />

            <Footer />

        </div>
    );
};

export default Registration;