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
                    <h3>এজেন্ট ব্যাংকিং</h3>
                    <p>এজেন্ট ব্যাংকিং বাংলাদেশের অর্থনৈতিক অন্তর্ভুক্তির অগ্রযাত্রায় একটি নতুন, শক্তিশালী এবং ব্যাপক-ভিত্তিক ব্যাংকিং প্রচেষ্টা। ব্যাংক এশিয়ার উদ্যোগে ২০১৪ সালের জানুয়ারীতে বাংলাদেশে এ সেবার যাত্রা শুরু হয়। এর আগে ২০১৩ সালে বাংলাদেশ ব্যাংক এ বিশেষায়িত ব্যাংকিং সেবা পরিচালনার অনুমতি প্রদান করে। মাত্র ক’বছরের ব্যবধানে এ সুদূর প্রসারী উদ্যোগ নানা দিকে, বিচিত্র আঙ্গিকে শাখা মেলতে শুরু করেছে। সময় এবং দূরত্বের ব্যবধান ঘুচিয়ে এ সেবা গ্রামীন জনগোষ্ঠীর কাছে হৃদয়গ্রাহী হয়ে উঠছে। তাদের ক্ষুদ্র সঞ্চয় ব্যাংকিং চ্যানেলে জমা হয়ে গড়ে উঠছে সম্ভাবনাময় অর্থনীতির এক শক্তিশালী ভিত্তি। প্রাণ সঞ্চারিত হচ্ছে গ্রামীন অর্থনীতিতে। প্রান্তিক কৃষক, ক্ষুদ্র উদ্যোক্তা সহ সকলে এজেন্ট ব্যাংকিং মোবাইল অ্যাপস-এর কল্যানে সহজেই ঋণ সুবিধা পাচ্ছে। জনগণের দোরগোড়ায় দ্রুত এ সেবা পৌঁছে দিতে সরকারি, বেসরকারী বিভিন্ন উন্নয়ন সংস্থা এজেন্ট ব্যাংকিং উদ্যোগের সাথে সম্পৃক্ত হয়েছে।</p>

                    <h3>WHERE WE ARE TODAY</h3>

                    <div className="Section_2_Left_Side_Box">5,129 <br />Outlets</div>
                    <div className="Section_2_Left_Side_Box">70 <br /> Partners</div>
                    <div className="Section_2_Left_Side_Box">64 <br /> District</div>
                    <div className="Section_2_Left_Side_Box">532 <br /> Upazila</div>
                    <div className="Section_2_Left_Side_Box">4,114 <br /> Union</div>
                
                </div>


                <div className="Section_2_Right_Side">
                    <h3>সর্বশেষ সংবাদ</h3>
                    <hr />
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
                </div>



            </section>
            {/* end  section 2  */}







        </div>
    );
};

export default Home;