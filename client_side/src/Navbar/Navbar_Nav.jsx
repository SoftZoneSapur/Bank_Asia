import React from 'react';
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Bank_Asia_Logo from "../Image/bank_asia_logo.jpg"
import Bank_Asia_Logo_Agent from "../Image/agent-banking2.png"
import Gore_Bose_Account_Khulun from "../Image/Gore-bose-hisab-icon-w.png"




// Navbar 
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// Navbar 







const Navbar_Nav = () => {



    return (
        <div>
            {/* Top Navbar  */}
            <div className="Top_Navbar">
                <div className="Top_Navbar_Left_Side">
                    <span> <i class="fa  fa-envelope"></i> </span> || <span> <i class="fa fa-facebook"></i>  </span>
                </div>
                <div className="Top_Navbar_Right_Side">
                    <span><i class="fa fa-phone"></i> 01711055368</span>
                </div>
            </div>
            {/* End Top Navbar  */}

            {/* Top Title Bar */}
            <div className="Top_Title_Bar">
                {/* <div className="row">
                    <div className="col-md-4"> */}
                        <div className="Top_Title_Bar_Left_Side">
                            <a href="/">
                                <img src={Bank_Asia_Logo} alt="Bank Asia Logo" />
                            </a>
                        </div>
                    {/* </div>
                    <div className="col-md-8"> */}
                        <div className="Top_Title_Bar_Right_Side">
                            <a href="/">
                                <img className='Top_Title_Bar_Right_Side_Agent_Logo' src={Bank_Asia_Logo_Agent} alt="Bank Asia Agent Logo" />
                            </a>
                            <a href="/">
                                <img className='Top_Title_Bar_Right_Side_Gore_Bose_Account_Khulun_Image' src={Gore_Bose_Account_Khulun} alt="Gore Bose Account Khulun Image" />
                            </a>
                            <div className="Phon_Icon">
                                <i class="fa fa-phone"></i>
                            </div>
                            <div className="Call_16205">
                                <span className='Call_16205_Css'>16205</span> <br /> <span>Help Line</span>
                            </div>
                        </div>
                    {/* </div>
                </div> */}
            </div>
            {/* End Top Title Bar */}



            {/* Top Menu Bar  */}
            <div className="Top_Menu_bar">
                
                {/* <ul className='Top_Menu_bar_ul'>
                    <li className='Top_Menu_bar_ul_li'><a className='Top_Menu_bar_ul_li_a' href="#home">Home</a></li>
                    <li className='Top_Menu_bar_ul_li'><a className='Top_Menu_bar_ul_li_a' href="#news">News</a></li>
                    
                    <li  className='Top_Menu_bar_ul_li dropdown'>

                        <a href="javascript:void(0)" className="Top_Menu_bar_ul_li_a dropbtn">Dropdown ⮟</a>
                        
                        <div className="dropdown-content">
                        <a className='Top_Menu_bar_ul_li_a' href="#">Link 1 🢒</a>
                        <a className='Top_Menu_bar_ul_li_a' href="#">Link 2 🢒</a>
                        <a className='Top_Menu_bar_ul_li_a' href="#">Link 3 🢒</a>
                        </div>
                        
                    </li>
                </ul> */}



                <Navbar bg="primary" variant="dark" expand="lg" >
                    <Container fluid>
                        <Navbar.Brand href="/">Bank Asia || Shahapur Agent Bank</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/About">About</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Another action
                                    </NavDropdown.Item>
                                <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/">
                                Link
                            </Nav.Link>
                            <Nav.Link href="/">
                                Link
                            </Nav.Link>
                            <Nav.Link href="/">
                                Link
                            </Nav.Link>
                            <Nav.Link href="/" disabled>
                                Link
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                

            </div>
            {/* End Top Menu Bar  */}




        </div>
    );
};

export default Navbar_Nav;