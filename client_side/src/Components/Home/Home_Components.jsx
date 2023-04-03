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
            <section className='Section_2 row'>
                <div className="Section_2_Left_Side col-md-8">
                    <h3>এজেন্ট ব্যাংকিং</h3>
                    <p>এজেন্ট ব্যাংকিং বাংলাদেশের অর্থনৈতিক অন্তর্ভুক্তির অগ্রযাত্রায় একটি নতুন, শক্তিশালী এবং ব্যাপক-ভিত্তিক ব্যাংকিং প্রচেষ্টা। ব্যাংক এশিয়ার উদ্যোগে ২০১৪ সালের জানুয়ারীতে বাংলাদেশে এ সেবার যাত্রা শুরু হয়। এর আগে ২০১৩ সালে বাংলাদেশ ব্যাংক এ বিশেষায়িত ব্যাংকিং সেবা পরিচালনার অনুমতি প্রদান করে। মাত্র ক’বছরের ব্যবধানে এ সুদূর প্রসারী উদ্যোগ নানা দিকে, বিচিত্র আঙ্গিকে শাখা মেলতে শুরু করেছে। সময় এবং দূরত্বের ব্যবধান ঘুচিয়ে এ সেবা গ্রামীন জনগোষ্ঠীর কাছে হৃদয়গ্রাহী হয়ে উঠছে। তাদের ক্ষুদ্র সঞ্চয় ব্যাংকিং চ্যানেলে জমা হয়ে গড়ে উঠছে সম্ভাবনাময় অর্থনীতির এক শক্তিশালী ভিত্তি। প্রাণ সঞ্চারিত হচ্ছে গ্রামীন অর্থনীতিতে। প্রান্তিক কৃষক, ক্ষুদ্র উদ্যোক্তা সহ সকলে এজেন্ট ব্যাংকিং মোবাইল অ্যাপস-এর কল্যানে সহজেই ঋণ সুবিধা পাচ্ছে। জনগণের দোরগোড়ায় দ্রুত এ সেবা পৌঁছে দিতে সরকারি, বেসরকারী বিভিন্ন উন্নয়ন সংস্থা এজেন্ট ব্যাংকিং উদ্যোগের সাথে সম্পৃক্ত হয়েছে।</p>

                    <h3>WHERE WE ARE TODAY</h3>

                    <div className="Section_2_Left_Side_Box">৪,২৫০ + <br />সেভিং একাউন্ট</div>
                    <div className="Section_2_Left_Side_Box">১৫,০০ + <br /> ডিপিএস একাউন্ট</div>
                    <div className="Section_2_Left_Side_Box">১,০০০ + <br /> এফডিআর একাউন্ট</div>
                    <div className="Section_2_Left_Side_Box">৫০০ + <br /> কারেন্ট একাউন্ট</div>
                
                </div>


                <div className="Section_2_Right_Side  col-md-4">
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

                <div className="Section_2_Right_Side_Prosno">
                    <h3>আপনার প্রশ্ন আছে?</h3>
                    <p>আমাদের প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী পড়ুন</p>
                    <button className='Prosno_btn'>এখানে ক্লিক করুন ➲</button>
                </div>

                </div>



            </section>
            {/* end  section 2  */}


            <div className='Section_3'>

                <h3>আমাদের সেবাসমূহ</h3>
                {/* <div className="row"> */}
                    <p className="Section_3_Box">ক্যাশ ডিপোজিট</p>
                    <p className="Section_3_Box">নগদ টাকা উত্তোলন</p>
                    <p className="Section_3_Box">নগদ টাকা স্থানান্তর</p>
                    <p className="Section_3_Box">অভ্যন্তরীণ প্রেরিত অর্থ</p>
                    <p className="Section_3_Box">ইউটিলিটি বিল পেমেন্ট</p>
                    <p className="Section_3_Box">ইউটিলিটি বিল পেমেন্ট</p>
                {/* </p> */}
                
                {/* <p className="row"> */}
                    <p className="Section_3_Box">ব্যালেন্স ইনকয়েরি</p>
                    <p className="Section_3_Box">অ্যাকাউন্ট বিবৃতি (ক্ষুদ্র)</p>
                    <p className="Section_3_Box">বীমা প্রিমিয়াম সংগ্রহ</p>
                    <p className="Section_3_Box">এসএমই ঋণ প্রক্রিয়াকরণ</p>
                    <p className="Section_3_Box">কৃষি ঋণ প্রক্রিয়াকরণ</p>
                    <p className="Section_3_Box">ডেবিট / ক্রেডিট কার্ড কাগজ প্রক্রিয়াকরণ</p>
                {/* </div> */}

            </div>







        </div>
    );
};

export default Home;