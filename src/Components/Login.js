import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { userIndex } from '../redux/actions'

const Login =()=> {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    
    const history = useHistory()
    const dispatch = useDispatch()

    const userList = useSelector(state=>state.users.users)
    const userindex = userList.findIndex((obj=>obj.email === email) &&( obj=>obj.password === password) )

    const updateIndex = () => dispatch(userIndex(userindex))

    const LoginCompare = () => { 
        return userList.some((obj=>obj.email === email) && (obj=>obj.password === password)) ? 
        (updateIndex(),
        history.push(`/login/${email}`)):
        console.log(false);
    }

    return(
        <Container>
            <Row className="my-5 px-4 pt-5 justify-content-center">
            <Col xs={12} md={6} lg={5} className="p-0 ">
            <Card border="success" className="Card rounded-0" > 
                <Card.Body>
                    <Card.Text className="text-success display-4">Login</Card.Text>
                    <Form className="px-4">
                    <Form.Group as={Row} >
                        <Form.Label column sm="12" className=" text-start text-success">
                        Email :
                        </Form.Label>
                        <Col sm="12">
                        <Form.Control type="text" placeholder="email"
                        value={email} onChange={e=>setEmail(e.target.value)} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} >
                        <Form.Label column sm="12" className=" text-start text-success">
                        Password :
                        </Form.Label>
                        <Col sm="12">
                        <Form.Control type="password" placeholder="Password"
                        value={password} onChange={e=>setPassword(e.target.value)} />
                        </Col>
                    </Form.Group>

                    <Button onClick={()=>LoginCompare()}
                    disabled={!email || !password}
                    variant="outline-success" className="m-4"> Log In
                    </Button>

                    </Form>
                </Card.Body>
            </Card>
            </Col>
            <Col xs={12} md={6} lg={5} className="p-0 ">
            <Card  bg="success" className="Card rounded-0" >
                <Card.Body>
                <Card.Text className="display-4 text-light">Sign Up</Card.Text>    
                <Card.Title className="display-6 pt-2 text-light">To Register as a new user please click on the button below </Card.Title>
                <Link to="/register">
                <Button variant="outline-light" className="m-4">Register</Button>
                </Link>
                </Card.Body>
            </Card>
            </Col>
            </Row>
        </Container>
    )
}

export default Login