import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { updateProject } from '../redux/projectActions'

const EditProject = () =>{
    const userList = useSelector(state=>state.users.users)
    const categories=useSelector(state=>state.category.categories)

    const projects = useSelector(state=>state.project.projects)
    const index = useSelector(state=>state.project.currentIndex)
    const[project , setproject] = useState(projects[index].project)
    const[developer , setdeveloper] = useState(projects[index].developer)
    const[category , setcategory] = useState(projects[index].category)
    const dispatch = useDispatch()
    const history = useHistory()

   

    return(
        <Container>
        <Row className=" pt-2 justify-content-center">
        <Col xs={10} lg={8}  className="p-0 mt-5">
        <Card border="success" className=" rounded-0" > 
            <Card.Body>
                <Card.Text className="text-success display-4">Edit Project</Card.Text>
                <Form className="px-4">
                <Form.Group as={Row} >
                    <Form.Label column sm="12" className=" text-start text-success">
                    Project Name :
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control type="text" placeholder="project" 
                    value={project} onChange={e=>setproject(e.target.value)} />
                    </Col>
                </Form.Group>
    
                <Form.Group as={Row} >
                    <Form.Label column sm="12" className=" text-start text-success">
                    Developer :
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control as="select"  
                        value={developer} onChange={e=>setdeveloper(e.target.value)} >
                            {userList.map(user=>
                                <option key={user.index} defaultValue={user.firstname}>{user.firstname}</option>)}
                        </Form.Control>
                    </Col>
                </Form.Group>
    
                <Form.Group as={Row} >
                    <Form.Label column sm="12" className=" text-start text-success">
                    Category :
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control as="select"  
                        value={category} onChange={e=>setcategory(e.target.value)} >
                            {categories.map(cate=>
                                <option key={cate.index}  defaultValue={cate.category}>{cate.category}</option>)}
                        </Form.Control>
                    </Col>
                </Form.Group>
    
                <Button disabled={!category || !project || !developer }
                onClick={()=>(dispatch(updateProject({
                    project:project,
                    developer:developer,
                    category:category
                })),history.push("/dashboard/projects"))}
                variant="outline-success" className="m-4">Update Project</Button>
                </Form>
            </Card.Body>
        </Card>
        </Col>
        </Row>
    </Container>
    )
}

export default EditProject