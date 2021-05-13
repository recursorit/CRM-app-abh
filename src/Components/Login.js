import React from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'

const Login =()=> {
    return(
        <Container>
            <Row className="my-5 px-4 pt-5">
            <Col xs={12} md={6} className="p-0 ">
            <Card border="success" className="Card rounded-0" > 
                <Card.Body>
                    <Card.Text className="text-success display-4">Login</Card.Text>
                    <Form className="px-4">
                    <Form.Group as={Row} >
                        <Form.Label column sm="12" className=" text-start text-success">
                        Email :
                        </Form.Label>
                        <Col sm="12">
                        <Form.Control type="text" placeholder="emial" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} >
                        <Form.Label column sm="12" className=" text-start text-success">
                        Password :
                        </Form.Label>
                        <Col sm="12">
                        <Form.Control type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                    <Button variant="outline-success" className="m-4">Log In</Button>
                    </Form>
                </Card.Body>
            </Card>
            </Col>
            <Col xs={12} md={6} className="p-0 ">
            <Card  bg="success" className="Card rounded-0" >
                <Card.Body>
                <Card.Text className="display-4 text-light">Sign Up</Card.Text>    
                <Card.Title className="display-6 pt-4 text-light">To Register as a new user please click on the button below </Card.Title>
                <Button variant="outline-light" className="m-4">Register</Button>
                </Card.Body>
            </Card>
            </Col>
            </Row>
        </Container>
    )
}

export default Login