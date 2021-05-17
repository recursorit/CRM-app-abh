import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { addUser } from '../redux/actions'
//import CryptoJS from 'crypto-js'

const EditUser =()=> {
    const userList = useSelector(state=>state.users.users)
    const index = useSelector(state=>state.index.currentuser)
    const userData = userList[index]
    

    const [firstname,setFirstname] = useState(userData.firstname)
    const [lastname,setLastname] = useState(userData.lastname)
    const [email,setEmail] = useState(userData.email)
    const [password,setPassword] = useState(userData.password)
    const [emailvalid,setEmailvalid] = useState(false)
    const [passwordvalid,setPasswordvalid] = useState(false)

    //const enpass = CryptoJS.AES.encrypt(password,'1').toString()
    

    const history = useHistory()
    const dispatch = useDispatch()
    const add =()=> dispatch(addUser({
        email:email,
        password:password,
        firstname:firstname,
        lastname:lastname
    }))
    const addUsers = ()=>{
        return email.includes("@" && ".com") ? (setEmailvalid(false),(password.length > 7) ?
        (add(),
        history.push('/')) : setPasswordvalid(true)) : setEmailvalid(true)
    }
    return(
        <Container>
            <Row className="my-5 px-4 pt-5 justify-content-center">
            <Col xs={10} lg={8}  className="p-0 mt-5">
            <Card border="success" className=" rounded-0" > 
                <Card.Body>
                    <Card.Text className="text-success display-4">Edit details</Card.Text>
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
                        <Form.Control isInvalid={emailvalid}
                        // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        type="text" placeholder="email"
                        value={email} onChange={e=>setEmail(e.target.value)} />
                        {emailvalid ?  <Card.Text className="text-danger text-start display-7 mb-0" >
                        enter correct email id
                        </Card.Text>: null  }
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm="12" className=" text-start text-success">
                        Password :
                        </Form.Label>
                        <Col sm="12">
                        <Form.Control
                        isInvalid={passwordvalid}
                        type="password" placeholder="Password"
                        value={password} onChange={e=>setPassword(e.target.value)} />
                        {passwordvalid ?  <Card.Text className="text-danger text-start display-7 mb-0" >
                        password should have atleast 8 letters
                        </Card.Text>: null  }
                        </Col>
                    </Form.Group>
                    <Button disabled={!email || !password || !firstname || !lastname}
                    onClick={()=>addUsers()}
                    variant="outline-success" className="m-4">Update Details</Button>
                    </Form>
                </Card.Body>
            </Card>
            </Col>
            </Row>
        </Container>
    )
}

export default EditUser