import React from 'react';
import Account_Print_Page_Components from '../../Components/Account_Print_Page_Components/Account_Print_Page_Components';
import Navbar_Nav from '../../Navbar/Navbar_Nav';
import Footer from '../../Footer/Footer';

const Account_Print_Page = () => {
    return (
        <div>
            <Navbar_Nav />

            <Account_Print_Page_Components />

            <Footer />
        </div>
    );
};

export default Account_Print_Page;