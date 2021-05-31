import React, { useState } from 'react'
import { Button, Modal, Table } from 'react-bootstrap'
import {BiEdit } from "react-icons/bi";
import {MdDelete} from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { projectIndex, removeProject } from '../redux/projectActions'

const Projects = () =>{
    const projects=useSelector(state=>state.project.projects)
    const history = useHistory()
    const dispatch = useDispatch()
    const [modal,setmodal]= useState(false)


    return(
        <Table striped bordered hover variant="success" className="text-success display-7">
            <thead>
                <tr>
                <th>Project</th>
                <th>Created On</th>
                <th>Developer</th>
                <th>Category</th>
                <th>Edit</th>
                <th>Delete</th> 
                </tr>
            </thead>

            <tbody>
            {projects.map(pro=><tr key={pro.index}>
                        <th>{pro.project}</th>
                        <th>{pro.created}</th>
                        <th>{pro.developer}</th>
                        <th>{pro.category}</th>
                       
                        <th><BiEdit
                         // eslint-disable-next-line
                         onClick={()=>(dispatch(projectIndex(pro.index)),history.push("/dashboard/editProject"))}/></th>
                        <th><MdDelete onClick={()=>setmodal(true) } /></th>

                        <Modal show={modal} onHide={() => setmodal(false)}>
                                    <Modal.Header >
                                        <Modal.Title>Confirm Action</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body> Are you sure you want to remove this Project?</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="success" onClick={() => setmodal(false)}>
                                            Close
                                        </Button>
                                        <Button variant="danger" onClick={()=>{dispatch(removeProject(pro.index)); setmodal(false)}}>
                                            Delete
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                    </tr>)}
            </tbody>
        </Table>
    )
}

export default Projects