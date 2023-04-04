import React from 'react';

import "./Footer.css"

import bottom_line from "../Assets/Image/bottom_line.jpg"

const Footer = () => {
    return (
        <div>
            
        {/* Footer_Section_1 start  */}
        <div className="Footer_Section_1">
            <img className='Footer_Section_1' src={bottom_line} alt="" />
        </div>
        {/* Footer_Section_1 end  */}


        {/* Footer_Section_2 start  */}
        <section className="Footer_Section_2">
        <div className="row">
            <div className="col-md-3">
                <div className="Footer_Section_2_Box">
                    <h3>ব্যাংক এশিয়া সম্পর্কে</h3>
                    <hr />
                    <ul class="footer_link_1">
                        <li><a href="https://www.bankasia-bd.com/about/mission"> মিশন, ভিশন ও মূল্যবোধ </a></li>
                        <li><a href="https://www.bankasia-bd.com/about/milestones"> কর্পোরেট মাইলস্টোন </a></li>
                        <li><a href="https://www.bankasia-bd.com/about/achievements">পুরস্কার এবং অর্জন</a></li>
                        <li><a href="https://www.bankasia-bd.com/about/csr">কর্পোরেট সামাজিক দায়িত্ব</a></li>
                        <li><a href="https://www.bankasia-bd.com/about/greenbanking">গ্রীন ব্যাংকিং</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-md-3">
                <div className="Footer_Section_2_Box">
                    <h3>আমাদের ব্যবসা</h3>
                    <hr />
                    <ul class="footer_link_1">
                        <li><a href="https://www.bankasia-bd.com/retail/deposits">রিটেল ব্যাংকিং</a></li>
                        <li><a href="https://www.bankasia-bd.com/corporate/corporateBanking">কর্পোরেট ব্যাংকিং</a></li>
                        <li><a href="https://www.bankasia-bd.com/islamic/product/Bank-Asia-Islamic-Banking">ইসলামিক ব্যাংকিং</a></li>
                        <li><a href="https://www.bankasia-bd.com/sme/smesecured">এসএমই ব্যাংকিং</a></li>
                        <li><a href="https://www.bankasia-bd.com/other/capital/Bank-Asia-Securities-Ltd">ক্যাপিটাল মার্কেট</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-md-3">
                <div className="Footer_Section_2_Box">
                    <h3>গুরুত্বপূর্ণ লিঙ্ক</h3>
                    <hr />
                    <ul class="footer_link_1">
                        <li><a href="https://www.bankasia-bd.com/other/downloads">ফর্ম এবং ডাউনলোড</a></li>
                        <li><a href="https://www.bankasia-bd.com/other/charges">ফি ও চার্জ সূচি</a></li>
                        <li><a href="https://www.bankasia-bd.com/other/charges">সুদের হার</a></li>
                        <li><a href="https://www.bankasia-bd.com/other/charges">বৈদেশিক মুদ্রার বিনিময় হার</a></li>
                        <li><a href="https://www.bankasia-bd.com/other/charges"> দাবী দারহীন জমা</a></li>

                    </ul>
                </div>
            </div>
            <div className="col-md-3">
                <div className="Footer_Section_2_Box">
                    <h3>অন্যান্য</h3>
                    <hr />
                    <ul class="footer_link_1 p-b-20">
                        <li><a href="https://www.bankasia-bd.com/about/sustainability_report">সাস্টেনিবিলিটি রিপোর্ট</a></li>
                    </ul>
                    <img className='img-fluid' src="https://www.bankasia-bd.com/style/images/Materialiry-Disclosure-2019.jpg" alt="" />
                </div>
            </div>
        </div>

        <hr />


            <div className="row">
                <div className="col-md-9">
                    <ul class="Footer_Section_2_footer_link">
                        <li><a href="https://www.bankasia-bd.com/">হোম </a></li>
                        <li><a href="https://www.bankasia-bd.com/about/newsletter">নিউজলেটার</a></li>
                        <li><a href="https://mail.bankasia-bd.com/owa">ওয়েব মেইল</a></li>
                        <li><a href="https://www.bankasia-bd.com/home/sitemap">সাইট ম্যাপ</a></li>
                        <li><a href="https://www.bankasia-bd.com/about/contact">যোগাযোগ </a></li>
                        <li><a href="http://www.bankasia-bd.com/old/">পুরানো ওয়েব সাইট	</a></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <div className="Footer_Section_2_social">
                        <span> <i class="fa  fa-envelope Footer_Section_2_social_link"></i> </span>
                        <span> <i class="fa  fa-facebook Footer_Section_2_social_link"></i> </span>
                        <span> <i class="fa  fa-twitter Footer_Section_2_social_link"></i> </span>
                        <span> <i class="fa  fa-youtube Footer_Section_2_social_link"></i> </span>
                    </div>
                </div>
            </div>

            <hr />



            <div className="Footer_Section_2_Copy_Right_Site">
                <p>© ২০১৮ ব্যাংক এশিয়া লিমিটেড - সাহাপুর ব্যাংক এশিয়া(এজেন্ট ব্যাংকিং)। সর্বস্বত্ব সংরক্ষিত. <br />
                Development <a href="">Rasal Hossain </a></p>
            </div>



        </section>
        {/* Footer_Section_2 end  */}


        


        </div>
    );
};

export default Footer;