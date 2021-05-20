import React, { useState } from 'react'
import { Accordion, Button, Card, Col, Container, Dropdown, Modal, Nav, Navbar, Row,Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import '../dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, useHistory } from 'react-router';
import {BiPencil,BiEdit } from "react-icons/bi";
import { withRouter } from "react-router";
import { adminEditIndex, loggedOut, removeUser } from '../redux/actions';
import {GiHamburgerMenu } from "react-icons/gi";
import {MdCancel, MdDelete} from "react-icons/md";

const Userdashboard = ()=>{

    const history = useHistory()
    const logged = useSelector(state=>state.logged.loggedIn)
    if(logged === false){
        history.push(`/`)
    }

    const [modal,setmodal]= useState(false)
    const userList = useSelector(state=>state.users.users)
    const index = useSelector(state=>state.index.currentuser)
    const userData = userList[index]
    const dispatch = useDispatch()

    

    return(
        <Container fluid className="p-0 m-0">
            <Navbar bg="success" className="sidebar-nav" >
            <Container>
            <Navbar.Brand className="text-light">Welcome</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text className="text-light">
                                <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    {userData.firstname}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item  className="text-success"
                                     onClick={()=>history.push(`/edit`)}>
                                         {userData.email}   <BiPencil className="mb-1" color="green"/>
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={()=>{history.push("/");dispatch(loggedOut())}} className="text-success">Log Out</Dropdown.Item>
                                    
                                </Dropdown.Menu>
                                </Dropdown>
                </Navbar.Text>
            </Navbar.Collapse>
            </Container>
            </Navbar>
            
            <Row >
            <Col sm={0} md={2} className="p-0 xs-display-none" >      
            <Nav  className="flex-column sidenav">
            
            <Nav.Link className="link-success activ active sidelink" onClick={()=>history.push(`/login/${userData.email}`)} >Users</Nav.Link>
            <Nav.Link className="link-success activ sidelink" onClick={()=>history.push(`/login/${userData.email}/projects`)}>Projects</Nav.Link>
            <Nav.Link className="link-success activ sidelink" onClick={()=>history.push(`/login/${userData.email}/options`)}>Options</Nav.Link>

            <Accordion className="accord">
            
                <Accordion.Toggle as={Button} border="success" variant="link-success" eventKey="0">
                    <GiHamburgerMenu size="32" color="#007E33" />
                </Accordion.Toggle>
                
                <Accordion.Collapse eventKey="0">
                <Container fluid>
                <Nav.Link className="link-success active" onClick={()=>history.push(`/login/${userData.email}`)} >Users</Nav.Link>
                <Nav.Link className="link-success active" onClick={()=>history.push(`/login/${userData.email}/projects`)}>Projects</Nav.Link>
                <Nav.Link className="link-success active" onClick={()=>history.push(`/login/${userData.email}/options`)}>Options</Nav.Link>

                </Container>
                </Accordion.Collapse>
        
            </Accordion>
            </Nav>     
            </Col>
            <Col xs={12} md={10}  className="p-0">  
            <Container >
            <Row className="pt-4">    
            <Col xs={12} md={4}>
            <Card className="m-2" border="success">
                    <Card.Body>
                    <Card.Title className="text-success">Users</Card.Title>
                    <Card.Text>
                        No. of users - {userList.length}
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={4}>
            <Card className="m-2" border="success">
                    <Card.Body>
                    <Card.Title className="text-success">Projects</Card.Title>
                    <Card.Text>
                        No. of Projects - 0
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={4}>
            <Card className="m-2" border="success">
                    <Card.Body>
                    <Card.Title className="text-success">Options</Card.Title>
                    <Card.Text>
                        No. of options - 0
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            </Row>

            <Switch>
                <Route exact path="/login/:username">
                <p className="display-4 text-success mt-3 text-start px-4">Users</p>
                <Table striped bordered hover variant="success" className="text-dark display-7 Utable">
                <thead >
                    <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    {/* <th>Joined</th> */}
                    <th>Role</th>
                    <th>Status</th>
                    {userData.role === "admin" ? <th>Edit</th> : null}
                    {userData.role === "admin" ? <th>Delete</th> : null}
                    </tr>
                </thead>
                <tbody>
                    {userList.map(user=><tr key={user.index}>
                        <th className="text-success">{user.firstname}</th>
                        <th className="text-success">{user.lastname}</th>
                        <th className="text-success">{user.email}</th>
                        {/* <th className="text-success">{user.joined}</th> */}
                        <th className="text-success">{user.role}</th>
                        <th className="text-success">{user.status}</th>
                        {userData.role === "admin" ?
                         <th><BiEdit color="#007E33" onClick={
                             ()=>{ return (history.push(`/AdminEdit`),
                                 dispatch(adminEditIndex(user.index)))}   
                            } /></th>
                         : null}

                        {userData.role === "admin" ?
                         <th>{user.index===index ? <MdCancel color="#007E33"/> : <MdDelete color="#007E33" onClick={()=>setmodal(true)}  />}</th>
                         : null} 


                                <Modal show={modal} onHide={() => setmodal(false)}>
                                    <Modal.Header >
                                        <Modal.Title>Confirm Action</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Are you sure you want to remove this user?</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="success" onClick={() => setmodal(false)}>
                                            Close
                                    </Button>
                                        <Button variant="danger" onClick={()=>{dispatch(removeUser(user.index)); setmodal(false)}}>
                                            Delete
                                    </Button>
                                    </Modal.Footer>
                                </Modal>


                    </tr>)}
                            
                   
                    
                </tbody>
                </Table>

                </Route>

                <Route path="/login/:username/projects">
                <p className="display-4 text-success mt-3 text-start px-4">Projects</p>
                </Route>

                <Route path="/login/:username/options">
                <p className="display-4 text-success mt-3 text-start px-4">Options</p>
                </Route>
            </Switch>

                
            </Container>
            </Col>
            </Row>
        </Container>
    )
}

const UserDashboard = withRouter(Userdashboard)

  export default UserDashboard

