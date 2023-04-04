import React from 'react';

import "./Home_Components.css"

import Agent_Outlet_Map from "../../Assets/Image/agent-outlet_map.jpg"
import new_account from "../../Assets/Image/new_account.jpg"
import we_create_new_jobs from "../../Assets/Image/we_create_new_jobs.jpg"


import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';
import Footer from '../../Footer/Footer';


  
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

                    <h3>আজ আমরা যেখানে</h3>

                    <div className="Section_2_Left_Side_Box">৩,৫০০ + <br />সেভিং একাউন্ট</div>
                    <div className="Section_2_Left_Side_Box">১,০০০ + <br /> ডিপিএস একাউন্ট</div>
                    <div className="Section_2_Left_Side_Box">৩০০ + <br /> এফডিআর একাউন্ট</div>
                    <div className="Section_2_Left_Side_Box">৭৫ + <br /> কারেন্ট একাউন্ট</div>
                
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

            {/* section 3 start  */}
            <section className='Section_3 container'>

                <h3>আমাদের সেবাসমূহ</h3>
                <div className="row justify-content-md-center">
                    <div className="col-md-2">
                        <a target="_blank" className='Section_3_Box ' href=""> 
                        <img src="https://www.bankasia-bd.com/agentassets/services-icon/pricesensetive.png" className="Section_3_Box_Img" alt="" /> <br /> 
                        ক্যাশ ডিপোজিট  
                        </a>   
                    </div>
                    
                    <div className="col-md-2">
                        <a target="_blank" className='Section_3_Box ' href=""> 
                        <img src="https://www.bankasia-bd.com/agentassets/services-icon/pricesensetive.png" className="Section_3_Box_Img" alt="" /> <br /> 
                        নগদ টাকা উত্তোলন  
                        </a>   
                    </div>
                    
                    <div className="col-md-2">
                        <a target="_blank" className='Section_3_Box ' href=""> 
                        <img src="https://www.bankasia-bd.com/agentassets/services-icon/taka-transfer.png" className="Section_3_Box_Img" alt="" /> <br /> 
                        নগদ টাকা স্থানান্তর  
                        </a>   
                    </div>
                    
                    <div className="col-md-2">
                        <a target="_blank" className='Section_3_Box ' href=""> 
                        <img src="https://www.bankasia-bd.com/agentassets/services-icon/foreign-remitance.png" className="Section_3_Box_Img" alt="" /> <br /> 
                        অভ্যন্তরীণ প্রেরিত অর্থ  
                        </a>   
                    </div>
                    
                    <div className="col-md-2">
                        <a target="_blank" className='Section_3_Box ' href=""> 
                        <img src="https://www.bankasia-bd.com/agentassets/services-icon/utility-bill.png" className="Section_3_Box_Img" alt="" /> <br /> 
                        ইউটিলিটি বিল পেমেন্ট  
                        </a>   
                    </div>
                    
                    <div className="col-md-2">
                        <a target="_blank" className='Section_3_Box ' href=""> 
                        <img src="https://www.bankasia-bd.com/agentassets/services-icon/mobile-banking.png" className="Section_3_Box_Img" alt="" /> <br /> 
                        ইউটিলিটি বিল পেমেন্ট  
                        </a>   
                    </div>
                

                </div>


                <div className="row justify-content-md-center">

                    <div className="col-md-2">
                        <a target="_blank" className='Section_3_Box ' href=""> 
                            <img src="https://www.bankasia-bd.com/agentassets/services-icon/mobile-banking.png" className="Section_3_Box_Img" alt="" /> <br /> 
                            ব্যালেন্স ইনকয়েরি  
                        </a>   
                    </div>
                    
                    <div className="col-md-2">
                        <a target="_blank" className='Section_3_Box ' href=""> 
                            <img src="https://www.bankasia-bd.com/agentassets/services-icon/account-statement.png" className="Section_3_Box_Img" alt="" /> <br /> 
                            অ্যাকাউন্ট বিবৃতি (ক্ষুদ্র)  
                        </a>   
                    </div>
                    
                    <div className="col-md-2">
                        <a target="_blank" className='Section_3_Box ' href=""> 
                            <img src="https://www.bankasia-bd.com/agentassets/services-icon/insuranche-premium.png" className="Section_3_Box_Img" alt="" /> <br /> 
                            বীমা প্রিমিয়াম সংগ্রহ  
                        </a>   
                    </div>
                    
                    <div className="col-md-2">
                        <a target="_blank" className='Section_3_Box ' href=""> 
                            <img src="https://www.bankasia-bd.com/agentassets/services-icon/sme.png" className="Section_3_Box_Img" alt="" /> <br /> 
                            এসএমই ঋণ প্রক্রিয়াকরণ  
                        </a>   
                    </div>
                    
                    <div className="col-md-2">
                        <a target="_blank" className='Section_3_Box ' href=""> 
                            <img src="https://www.bankasia-bd.com/agentassets/services-icon/agri-loan.png" className="Section_3_Box_Img" alt="" /> <br /> 
                            কৃষি ঋণ প্রক্রিয়াকরণ  
                        </a>   
                    </div>
                    
                    <div className="col-md-2">
                        <a target="_blank" className='Section_3_Box ' href=""> 
                            <img src="https://www.bankasia-bd.com/agentassets/services-icon/card_50x50.png" className="Section_3_Box_Img" alt="" /> <br /> 
                            ডেবিট / ক্রেডিট কার্ড কাগজ প্রক্রিয়াকরণ  
                        </a>   
                    </div>
                </div>

            </section>
            {/* section 3 end  */}



            {/* section 4 start  */}
            <section className='Section_4 row'>
                <h3>এজেন্ট আউটলেট অনুসন্ধান</h3>
                <div className="Section_4_Left_Side col-md-6">
                    <a className='' target="_blank" href="https://blue-number.carto.com/u/bluenumber/builder/9bc6dd79-12a8-4f6b-b0d2-fcbcf9942c3b/embed">
                        <img className='Section_4_Left_Side_Image' src={Agent_Outlet_Map} alt="" />
                    </a>
                </div>
                <div className="Section_4_Right_Side col-md-6">
                    <p>সারাদেশে আমাদের <br />
                    মোট এজেন্ট আউটলেটের সংখ্যা ৫,১২৯ টি</p>
                    <a href="https://blue-number.carto.com/u/bluenumber/builder/9bc6dd79-12a8-4f6b-b0d2-fcbcf9942c3b/embed" target="_blank">
                        <button className='Section_4_Right_Side_Button'>আমাদের এজেন্টগুলো খুঁজুন</button>
                    </a>
                </div>
            </section>
            {/* section 4 end  */}


            {/* section 5 start */}
            <section className='Section_5'>
                <h3>এসডিজি (টেকসই উন্নয়ন লক্ষ্যমাত্রা) অর্জন</h3>
                <div className="row justify-content-md-center">
                    <div className="col-md-3">
                        <div className="Section_5_Item">
                            <a href="" target="_blank">
                                <img src="https://www.bankasia-bd.com/agentassets/Acheive-icon/no-proverty.png" alt="" /> <br />
                                <p>দারিদ্রতা মুক্তি</p>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="Section_5_Item">
                            <a href="" target="_blank">
                                <img src="https://www.bankasia-bd.com/agentassets/Acheive-icon/good-health.png" alt="" /> <br />
                                <p>সুস্বাস্থ্য ও কল্যান</p>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="Section_5_Item">
                            <a href="" target="_blank">
                                <img src="https://www.bankasia-bd.com/agentassets/Acheive-icon/gender.png" alt="" /> <br />
                                <p>লিঙ্গ সমতা</p>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="Section_5_Item">
                            <a href="" target="_blank">
                                    <img src="https://www.bankasia-bd.com/agentassets/Acheive-icon/work-deff.png" alt="" /> <br />
                                    <p>সম্মানজনক কর্ম সংস্থান ও অর্থনৈতিকসমৃদ্ধি</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-md-4">
                        <div className="Section_5_Item">
                            <a href="" target="_blank">
                                <img src="https://www.bankasia-bd.com/agentassets/Acheive-icon/industry.png" alt="" /> <br />
                                <p>শিল্প, উদ্ভাবন ও অবকাঠামো</p>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="Section_5_Item">
                            <a href="" target="_blank">
                                <img src="https://www.bankasia-bd.com/agentassets/Acheive-icon/reudce-inquality.png" alt="" /> <br />
                                <p>বৈষম্য হ্রাস</p>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="Section_5_Item">
                            <a href="" target="_blank">
                                <img src="https://www.bankasia-bd.com/agentassets/Acheive-icon/participition.png" alt="" /> <br />
                                <p>অংশীদারিত্ব</p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* section 5 end  */}




            {/* Section 6 start  */}
            <section className='Section_6'>


                <div className="Section_6_Top">
                    <img className='img-fluid' src={new_account} alt="" />
                </div>
                <div className="Section_6_Bottom">
                    <img className='img-fluid' src={we_create_new_jobs} alt="" />
                </div>


            </section>
            {/* Section 6 end  */}


            <Footer />


        </div>
    );
};

export default Home;