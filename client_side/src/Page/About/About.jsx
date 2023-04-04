import React from 'react';

import Navbar from "../../Navbar/Navbar_Nav"
import Footer from "../../Footer/Footer"
import About_Components from '../../Components/About/About_Components';

const About = () => {
    return (
        <div>
            <Navbar />

            <About_Components />

            <Footer />
        </div>
    );
};

export default About;