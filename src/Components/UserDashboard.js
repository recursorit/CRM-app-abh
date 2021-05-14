import React from 'react'
import { Container, Navbar, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const UserDashboard = ()=>{
    const userList = useSelector(state=>state.users.users)
    const index = useSelector(state=>state.index.currentuser)
    const userData = userList[index]

    return(
        <Container fluid className="p-0">
            <Row>
            <Navbar bg="success">
            <Container>
            <Navbar.Brand className="text-light">Welcome</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text className="text-light">
                Signed in as: {userData.firstname}
                </Navbar.Text>
            </Navbar.Collapse>
            </Container>
            </Navbar>
            </Row>
        </Container>
    )
}

export default UserDashboard



