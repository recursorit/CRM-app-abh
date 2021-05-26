import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { updateUser } from '../redux/actions'
import { withRouter } from "react-router";


const Adminedit =()=> {

    const history = useHistory()
    const dispatch = useDispatch()

    const logged =localStorage.getItem("loggedIn")
    if(logged === "false"){
        history.push(`/`)
    }

    const userList = useSelector(state=>state.users.users)
    const index = useSelector(state=>state.adminEdit.index)
    const userData = userList[index]
    

    const [firstname,setFirstname] = useState(userData.firstname)
    const [lastname,setLastname] = useState(userData.lastname)
    const [email,setEmail] = useState(userData.email)
    const [password,setPassword] = useState(atob(userData.password))
    const [emailvalid,setEmailvalid] = useState(false)
    const [passwordvalid,setPasswordvalid] = useState(false)
    const [role,setrole] = useState(userData.role)
    const [status,setstatus] = useState(userData.status)

    const [cpassword,setcPassword] = useState(atob(userData.password))
    const [passwordvalidC,setPasswordvalidC] = useState(false)

    useEffect(()=>{
        if(cpassword !== password){
            setPasswordvalidC(true)
        }
        else setPasswordvalidC(false)
        // eslint-disable-next-line
    },[cpassword])
    

    const add =()=> dispatch(updateUser({
        index:index,
        email:email,
        password:btoa(password),
        firstname:firstname,
        lastname:lastname,
        role:role,
        status:status
    }))
    const addUsers = ()=>{
        return email.includes("@" && ".com") ? (setEmailvalid(false),(password.length > 7) ?
        (add(),
        history.push(`/dashboard`)) : setPasswordvalid(true)) : setEmailvalid(true)
    }
    return(
        <Container>
            <Row className="  pt-3 justify-content-center">
            <Col xs={10} lg={8}  className="p-0 mt-5">
            <Card border="success" className=" rounded-0" > 
                <Card.Body>
                    <Card.Text className="text-success display-4">Edit {userData.email}</Card.Text>
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

                    <Form.Group as={Row}>
                        <Form.Label column sm="12" className=" text-start text-success">
                        confirm Password :
                        </Form.Label>
                        <Col sm="12">
                        <Form.Control
                        isInvalid={passwordvalidC}
                        type="password" placeholder="Password"
                        value={cpassword} onChange={e=>setcPassword(e.target.value)} />
                        {passwordvalidC ?  <Card.Text className="text-danger text-start display-7 mb-0" >
                        password doesn't match
                        </Card.Text>: null  }
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} >
                        <Form.Label column sm="12" className=" text-start text-success">
                        Role :
                        </Form.Label>
                        <Col sm="12">
                        <Form.Control as="select"  
                        value={role} onChange={e=>setrole(e.target.value)} >
                            <option>admin</option>
                            <option>user</option>
                        </Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} >
                        <Form.Label column sm="12" className=" text-start text-success">
                        Status :
                        </Form.Label>
                        <Col sm="12" className="text-start">
                        
                        <Form.Check inline label="Active" name="group1" type="radio" id={`inline-radio-1`} checked={status==="active"}
                        value={status} onChange={()=>setstatus("active")} />
                        <Form.Check inline label="Inactive" name="group1" type="radio" id={`inline-radio-2`} checked={status==="inactive"}
                        value={status} onChange={()=>setstatus("inactive")} />         
                        </Col>
                    </Form.Group>
                    <Button disabled={!email || !password || !firstname || !lastname || !status || !role}
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

const AdminEdit = withRouter(Adminedit)

export default AdminEdit