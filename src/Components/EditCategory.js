import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { updateCategory } from '../redux/categoryActions'

const EditCategory = () =>{
    const categories = useSelector(state=>state.category.categories)
    const index = useSelector(state=>state.category.currentIndex)
    const[category , setcategory] = useState(categories[index].category)
    const dispatch = useDispatch()
    const history = useHistory()

   

    return(
    <Container>
    <Row className=" pt-2 justify-content-center">
    <Col xs={10} lg={8}  className="p-0 mt-5">
    <Card border="success" className=" rounded-0" > 
        <Card.Body>
            <Card.Text className="text-success display-4">Edit Category</Card.Text>
            <Form className="px-4">
            <Form.Group as={Row} >
                <Form.Label column sm="12" className=" text-start text-success">
                Category Name :
                </Form.Label>
                <Col sm="12">
                <Form.Control type="text" placeholder="category" 
                value={category} onChange={e=>setcategory(e.target.value)} />
                </Col>
            </Form.Group>

            

            <Button disabled={!category}
            onClick={()=>(dispatch(updateCategory(category)),history.push("/dashboard/Category"))}
            variant="outline-success" className="m-4">Update category</Button>
            </Form>
        </Card.Body>
    </Card>
    </Col>
    </Row>
</Container>
    )
}

export default EditCategory