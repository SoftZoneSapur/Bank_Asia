import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import "./About.css"

const About_Components = () => {
    return (
        <div>
        


        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://media.licdn.com/dms/image/D4E03AQHg9Su2yM0DHA/profile-displayphoto-shrink_200_200/0/1665068469774?e=1683158400&v=beta&t=5vH6Oo8XsC1a7QvzmRRCk2uzRvhgycDvM6j34y0LCkQ" />
        <Card.Body>
            <Card.Title>Rasel Hossain</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
        </Card>




        </div>
    );
};

export default About_Components;