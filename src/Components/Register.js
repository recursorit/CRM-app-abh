import React from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'

const Register =()=> {
    return(
        <Container>
            <Row className="my-5 px-4 pt-5 justify-content-center">
            <Col xs={10}  className="p-0 mt-5">
            <Card border="success" className=" rounded-0" > 
                <Card.Body>
                    <Card.Text className="text-success display-4">Register</Card.Text>
                    <Form className="px-4">
                    <Form.Group as={Row}>
                        <Form.Label column sm="12" className=" text-start text-success">
                        Email :
                        </Form.Label>
                        <Col sm="12">
                        <Form.Control type="text" placeholder="emial" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} >
                        <Form.Label column sm="12" className=" text-start text-success">
                        Username :
                        </Form.Label>
                        <Col sm="12">
                        <Form.Control type="text" placeholder="emial" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm="12" className=" text-start text-success">
                        Password :
                        </Form.Label>
                        <Col sm="12">
                        <Form.Control type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                    <Button variant="outline-success" className="m-4">Sign up</Button>
                    </Form>
                </Card.Body>
            </Card>
            </Col>
            </Row>
        </Container>
    )
}

export default Register