import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
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


    const myFunction =()=> {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
            // Active_Menu.className += " active"

        } else {
          x.className = "topnav";
        }
      }

    

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
                                <img className='img-fluid' src={Bank_Asia_Logo} alt="Bank Asia Logo" />
                            </a>
                        </div>
                    {/* </div>
                    <div className="col-md-8"> */}
                        <div className="Top_Title_Bar_Right_Side">
                            <a href="/">
                                <img className='Top_Title_Bar_Right_Side_Agent_Logo img-fluid' src={Bank_Asia_Logo_Agent} alt="Bank Asia Agent Logo" />
                            </a>
                            <a href="/">
                                <img className='Top_Title_Bar_Right_Side_Gore_Bose_Account_Khulun_Image img-fluid' src={Gore_Bose_Account_Khulun} alt="Gore Bose Account Khulun Image" />
                            </a>
                            <div className="Phon_Icon img-fluid">
                                <i class="fa fa-phone img-fluid"></i>
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
            {/* <div className="Top_Menu_bar">

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
                

            </div> */}
            {/* End Top Menu Bar  */}



            {/* Responsive menu start */}
            <div className="Responsive_Menu container">
                <div className="topnav " id="myTopnav">
                    {/* <a  href="#home" className="active">Home</a> */}
                    <a  href="/" className=" ">Home</a>
                    <a href="">Service</a>
                    <a href="">News</a>
                    <a href="act">Contact</a>
                    <a href="About">About</a>
                    <a id="Active" className=' icon' href="javascript:void(0);"  onClick={myFunction}>
                        <i className="fa fa-bars"></i>
                    </a>
                </div>
            </div>
            {/* Responsive menu end */}



        </div>
    );
};

export default Navbar_Nav;