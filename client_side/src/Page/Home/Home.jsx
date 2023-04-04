import React from 'react';
import Navbar from '../../Navbar/Navbar_Nav';
import "./Home.css"

import Home_Components from '../../Components/Home/Home_Components';
import Navbar_Nav from '../../Navbar/Navbar_Nav';

import "../../Assets/Css/Css.css"
import Footer from '../../Footer/Footer';

const Home = () => {
    return (
        <div className='Background_Image'>


            <Navbar_Nav />
            
            
            

            <Home_Components />



            <Footer />






        </div>
    );
};

export default Home;