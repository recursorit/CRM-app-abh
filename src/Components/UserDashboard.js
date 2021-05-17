import React from 'react'
import { Col, Container, Dropdown, Nav, Navbar, Row,Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import '../dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router';



const UserDashboard = ()=>{
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
                                    <Dropdown.Item href={`/login/${userData.email}/edit`} onClick={()=>history.push(`/login/${userData.email}/edit`)}>{userData.email}</Dropdown.Item>
                                    <Dropdown.Item href="/">Log Out</Dropdown.Item>
                                    
                                </Dropdown.Menu>
                                </Dropdown>
                </Navbar.Text>
            </Navbar.Collapse>
            </Container>
            </Navbar>
            
            <Row>
            <Col xs={2} className="p-0" >      
            <Nav  className="flex-column sidenav">
            <Nav.Link className="link-success" href="/#">Users</Nav.Link>
            <Nav.Link className="link-success">Projects</Nav.Link>
            <Nav.Link className="link-success">Options</Nav.Link>

            
            </Nav>     
            </Col>
            <Col xs={10} className="p-0">  
            <Container >
                <p className="display-4 text-success mt-3 text-start px-4">Users</p>
                <Table striped bordered hover variant="success">
                <thead>
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
                        <th>{user.firstname}</th>
                        <th>{user.lastname}</th>
                        <th>{user.email}</th>
                        <th>{user.joined}</th>
                        <th>{user.role}</th>
                    </tr>)}
                </tbody>
                </Table>
            </Container>
            </Col>
            </Row>
        </Container>
    )
}

export default UserDashboard



