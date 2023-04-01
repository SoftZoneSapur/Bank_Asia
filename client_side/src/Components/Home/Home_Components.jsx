import React from 'react';

import "./Home_Components.css"

import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';

  
const Home = () => {
    return (
        <div className='container'>

            {/* section 1 start  */}
            <section className='section_1'>
            <MDBCarousel showIndicators showControls fade>
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={1}
                    src='https://www.bankasia-bd.com/agentassets/slider/flash-1.jpg'
                    alt='...'
                >
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={2}
                    src='https://www.bankasia-bd.com/agentassets/slider/flash-102.jpg'
                    alt='...'
                >
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={3}
                    src='https://www.bankasia-bd.com/agentassets/slider/flash-3.jpg'
                    alt='...'
                >
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </MDBCarouselItem>

                
                </MDBCarousel>

            </section>
            {/* end section 1  */}






            {/* section 2 start  */}
            <section className='Section_2'>
                <div className="Section_2_Left_Side">
                    <h3>AGENT BANKING</h3>
                    <p>Agent Banking, a very new but powerful and wide-ranged initiative in the journey of Financial Inclusion in Bangladesh. Bank Asia introduced this venture here in January 2014. Earlier in 2013, Bangladesh Bank accorded Bank Asia to roll out this specialized banking service. In span of a few years, this service spreads in multi-dimensional ways, reduces gap of time and space and becomes attractive to rural mass. The small droplets of deposit contribute in building strong platform of our promising economy, and thus infuses lifeline in our rural economy. Now marginal farmers, small entrepreneurs and general people enjoy loan facilities in easier and faster manner through this platform. To reach Agent Banking services at the doorsteps of rural people Government, non-government and development partners shake hands together.</p>

                    <h3>WHERE WE ARE TODAY</h3>

                    <div className="Section_2_Left_Side_Box">5,129 <br />Outlets</div>
                    <div className="Section_2_Left_Side_Box">70 <br /> Partners</div>
                    <div className="Section_2_Left_Side_Box">64 <br /> District</div>
                    <div className="Section_2_Left_Side_Box">532 <br /> Upazila</div>
                    <div className="Section_2_Left_Side_Box">4,114 <br /> Union</div>
                
                </div>


                <div className="Section_2_Right_Side">

                </div>



            </section>
            {/* end  section 2  */}







        </div>
    );
};

export default Home;