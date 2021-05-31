import React, { useState } from 'react'
import { Button, Modal, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {BiEdit } from "react-icons/bi";
import {MdDelete} from "react-icons/md";
import { useHistory } from 'react-router';

import { categoryIndex, removeCategory } from '../redux/categoryActions';


const Category = () =>{
    const categories=useSelector(state=>state.category.categories)
    const history = useHistory()
    const dispatch = useDispatch()
    const [modal,setmodal]= useState(false)


    return(
        <Table striped bordered hover variant="success" className="text-success display-7">
            <thead>
                <tr>
                <th>Category</th>
                <th>Created On</th>
                <th>Edit</th>
                <th>Delete</th> 
                </tr>
            </thead>

            <tbody>
            {categories.map(cate=><tr key={cate.index}>
                        <th>{cate.category}</th>
                        <th>{cate.joined}</th>
                        <th><BiEdit onClick={()=>(dispatch(categoryIndex(cate.index)),history.push("/dashboard/categoryEdit"))}/></th>
                        <th><MdDelete onClick={()=>setmodal(true) } /></th>

                        <Modal show={modal} onHide={() => setmodal(false)}>
                                    <Modal.Header >
                                        <Modal.Title>Confirm Action</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body> Are you sure you want to remove this category?</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="success" onClick={() => setmodal(false)}>
                                            Close
                                        </Button>
                                        <Button variant="danger" onClick={()=>{dispatch(removeCategory(cate.index)); setmodal(false)}}>
                                            Delete
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                    </tr>)}
            </tbody>
        </Table>
    )
}

export default Category