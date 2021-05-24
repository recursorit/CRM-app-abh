
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Form, Row,Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { adminAddUser } from '../redux/actions'

const AddUser =()=> {
    const [firstname,setFirstname] = useState("")
    const [lastname,setLastname] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [emailvalid,setEmailvalid] = useState(false)
    const [passwordvalid,setPasswordvalid] = useState(false)
    const [role,setrole] = useState("")
    const [status,setstatus] = useState("")

    const [cpassword,setcPassword] = useState("")
    const [passwordvalidC,setPasswordvalidC] = useState(false)

    useEffect(()=>{
        if(cpassword !== password){
            setPasswordvalidC(true)
        }
        else setPasswordvalidC(false)
        // eslint-disable-next-line
    },[cpassword])

    const history = useHistory()
    const dispatch = useDispatch()
    const add =()=> dispatch(adminAddUser({
        email:email,
        password:btoa(password),
        firstname:firstname,
        lastname:lastname,
        role:role,
        status:status,
    }))
    const addUsers = ()=>{
        return ((email.includes("@" && ".")) && (email.indexOf(".") < (email.length-2))) ? (setEmailvalid(false),(password.length > 7) ?
        (add(),
        history.push('/login')) : setPasswordvalid(true)) : setEmailvalid(true)
    }

    useEffect(()=>{
        const logged = localStorage.getItem("loggedIn")
    if(logged === "false"){
        history.push(`/`)
    } 
    },[history])
 return(
    <Container>
    <Row className=" pt-2 justify-content-center">
    <Col xs={10} lg={8}  className="p-0 mt-5">
    <Card border="success" className=" rounded-0" > 
        <Card.Body>
            <Card.Text className="text-success display-4">Add User</Card.Text>
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
                        type="password" placeholder="Confirm Password"
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

            <Button disabled={!email || !password || !firstname || !lastname || passwordvalidC || !role || !status}
            onClick={()=>addUsers()}
            variant="outline-success" className="m-4">Add</Button>
            </Form>
        </Card.Body>
    </Card>
    </Col>
    </Row>
</Container>
 )   
}

export default AddUser