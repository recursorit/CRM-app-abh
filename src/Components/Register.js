import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { addUser } from '../redux/actions'


const Register =()=> {
    const [firstname,setFirstname] = useState("")
    const [lastname,setLastname] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")


    const history = useHistory()
    const dispatch = useDispatch()
    const add =()=> dispatch(addUser({
        email:email,
        password:password,
        firstname:firstname,
        lastname:lastname
    }))
    const addUsers = ()=>{
        add();
        history.push('/')
    }
    return(
        <Container>
            <Row className="my-5 px-4 pt-5 justify-content-center">
            <Col xs={10} lg={8}  className="p-0 mt-5">
            <Card border="success" className=" rounded-0" > 
                <Card.Body>
                    <Card.Text className="text-success display-4">Register</Card.Text>
                    <Form className="px-4">
                    <Form.Group as={Row} >
                        <Form.Label column sm="12" className=" text-start text-success">
                        First Name :
                        </Form.Label>
                        <Col sm="12">
                        <Form.Control type="text" placeholder="firstname" 
                        value={firstname} onChange={e=>setFirstname(e.target.value)} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} >
                        <Form.Label column sm="12" className=" text-start text-success">
                        Last Name :
                        </Form.Label>
                        <Col sm="12">
                        <Form.Control type="text" placeholder="lastname"
                        value={lastname} onChange={e=>setLastname(e.target.value)} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm="12" className=" text-start text-success">
                        Email :
                        </Form.Label>
                        <Col sm="12">
                        <Form.Control type="text" placeholder="email"
                        value={email} onChange={e=>setEmail(e.target.value)} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm="12" className=" text-start text-success">
                        Password :
                        </Form.Label>
                        <Col sm="12">
                        <Form.Control type="password" placeholder="Password"
                        value={password} onChange={e=>setPassword(e.target.value)} />
                        </Col>
                    </Form.Group>
                    <Button disabled={!email || !password || !firstname || !lastname}
                    onClick={()=>addUsers()}
                    variant="outline-success" className="m-4">Sign up</Button>
                    </Form>
                </Card.Body>
            </Card>
            </Col>
            </Row>
        </Container>
    )
}

export default Register