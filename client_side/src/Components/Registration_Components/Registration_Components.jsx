import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import "./Registration_Components.css"
import "../../Assets/Css/Css.css"

import Agent_Logo from "../../Assets/Image/Agent_Logo.jpg"


const Registration_Components = () => {
    return (
        <div className=''>

            {/* Registration_Components start  */}
            <div className="Registration_Components Background_Image">
                <div className="Registration_Components_Background">
                    <div className="Registration_Components_Main_Box">
                        <h3>Bank Asia(Agent Banking) Admin Registration</h3>

                        

                        <Form>
                        <   Form.Group className="mb-3" >
                                <Form.Label>Registration Code</Form.Label>
                                <Form.Control type='password' placeholder="Registration Code" />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} >
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="First Name" />
                                </Form.Group>

                                <Form.Group as={Col} >
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Last Name" />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} >
                                <Form.Label>Father Name</Form.Label>
                                <Form.Control type="text" placeholder="Father Name" />
                                </Form.Group>

                                <Form.Group as={Col} >
                                <Form.Label>Mother Name</Form.Label>
                                <Form.Control type="text" placeholder="Mother Name" />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" >
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="Address" />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} >
                                <Form.Label>Phon Number 1</Form.Label>
                                <Form.Control type="number" placeholder="Phon Number 1" />
                                </Form.Group>

                                <Form.Group as={Col} >
                                <Form.Label>Phon Number 2</Form.Label>
                                <Form.Control type="number" placeholder="Phon Number 2" />
                                </Form.Group>
                            </Row>
                            
                            <Row className="mb-3">
                                <Form.Group as={Col} >
                                <Form.Label>Email Address 1</Form.Label>
                                <Form.Control type="email" placeholder="Email Address 1" />
                                </Form.Group>

                                <Form.Group as={Col} >
                                <Form.Label>Email Address 2</Form.Label>
                                <Form.Control type="email" placeholder="Email Address 2" />
                                </Form.Group>
                            </Row>


                            <Row className="mb-3">
                                <Form.Group as={Col} >
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                                <Form.Group as={Col} >
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Confirm Password" />
                                </Form.Group>
                            </Row>


                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="file" size="lg" placeholder="Address" />
                            </Form.Group>


                            <Button size="lg" className='Registration_Btn' variant="primary" type="submit">
                                Submit
                            </Button>


                            <Row className="mb-3 mt-3">
                                <Form.Group as={Col} >
                                    <a href="Office_Login">
                                        <Button className='btn btn-info Registration_Btn_Width'>Login</Button>
                                    </a>
                                </Form.Group>

                                <Form.Group as={Col} >
                                    <a href="Forgot_Password">
                                        <Button className='btn btn-info Registration_Btn_Width'>Forgate Password</Button>
                                    </a>
                                </Form.Group>
                            </Row>

                        </Form>
                    </div>

                </div>
            </div>
            {/* Registration_Components end  */}



        </div>
    );
};

export default Registration_Components;