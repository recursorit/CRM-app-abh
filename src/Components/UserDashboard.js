import React from 'react'
import { Col, Container, Dropdown, Nav, Navbar, Row,Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import '../dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router';
import {BiPencil } from "react-icons/bi";
import { withRouter } from "react-router";


const Userdashboard = ()=>{
    const userList = useSelector(state=>state.users.users)
    const index = useSelector(state=>state.index.currentuser)
    const userData = userList[index]

    const history = useHistory()

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
                                     onClick={()=>history.push(`/login/${userData.email}/edit`)}>
                                         {userData.email}   <BiPencil className="mb-1" color="green"/>
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={()=>history.push("/")} className="text-success">Log Out</Dropdown.Item>
                                    
                                </Dropdown.Menu>
                                </Dropdown>
                </Navbar.Text>
            </Navbar.Collapse>
            </Container>
            </Navbar>
            
            <Row>
            <Col sm={0} md={2} className="p-0 xs-display-none" >      
            <Nav  className="flex-column sidenav">
            
            <Nav.Link className="link-success" >Users</Nav.Link>
            <Nav.Link className="link-success">Projects</Nav.Link>
            <Nav.Link className="link-success">Options</Nav.Link>

            
            </Nav>     
            </Col>
            <Col xs={12} md={10}  className="p-0">  
            <Container >
                <p className="display-4 text-success mt-3 text-start px-4">Users</p>
                <Table striped bordered hover variant="success" className="text-dark display-7">
                <thead >
                    <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Joined</th>
                    <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map(user=><tr>
                        <th className="text-success">{user.firstname}</th>
                        <th className="text-success">{user.lastname}</th>
                        <th className="text-success">{user.email}</th>
                        <th className="text-success">{user.joined}</th>
                        <th className="text-success">{user.role}</th>
                    </tr>)}
                </tbody>
                </Table>
            </Container>
            </Col>
            </Row>
        </Container>
    )
}

const UserDashboard = withRouter(Userdashboard)

  export default UserDashboard

