import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "../../Assets/Css/Css.css"
import "./About.css"

import BorhanUddinRaju from "../../Image/BorhanUddinRaju.jpg"

const About_Components = () => {
    return (
        <div>
        
        {/* About Section start */}
        <section className='About_Section container'>

            <div className="Box_Shadow_About Background_Image_About">
                <div className="row">
                    <div className="col-md-6">
                        <div className="About_Section_Left_Side">
                            <img src={BorhanUddinRaju} className='About_Image img-fluid' alt="" />
                        </div>

                    </div>

                    <div className="col-md-6">
                        <div className="About_Section_Right_Side">
                            <div className="About_Section_Title_Box">
                                <h3>Borhan Uddin Raju</h3>
                                {/* post title  */}
                                <span>CEO (Bank Asia Agent Banking)</span> <br />
                                {/* address  */}
                                <span>Shahapur Bazar, Chatkhil, Noakhali</span>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            
        </section>
        {/* About Section end */}






        </div>
    );
};

export default About_Components;