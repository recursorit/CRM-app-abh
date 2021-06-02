import React, { useEffect, useState } from 'react'
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

    const userList = useSelector(state=>state.users.users)
    const index = useSelector(state=>state.index.currentuser)
    const userData = userList[index]

    const [modalDR,setmodalDR]= useState(false)
    const deleteRequest =localStorage.getItem("deleteproject")
    const deleteid =localStorage.getItem("deleteid")

    useEffect(()=>{
        
        return userData.role === "admin" ? deleteRequest === "true" ? setmodalDR(true) : null :null
        // eslint-disable-next-line
    },[])

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
            {projects.map(pro=> userData.role === "admin"?
                    <tr key={pro.index}>
                        <th>{pro.project}</th>
                        <th>{pro.created}</th>
                        <th>{pro.developer}</th>
                        <th>{pro.category}</th>
                       
                        <th><BiEdit
                         // eslint-disable-next-line
                         onClick={()=>(dispatch(projectIndex(pro.index)),history.push("/dashboard/editProject"))}/></th>
        
                        {userData.role !== "admin" ? <th><MdDelete
                        // eslint-disable-next-line
                        onClick={()=>{setmodal(true),localStorage.setItem("deleteproject",true),localStorage.setItem("deleteid",pro.index)} } /></th>:
                        <th><MdDelete onClick={()=>setmodal(true) } /></th>}

                        <Modal show={modal} onHide={() => setmodal(false)}>
                                    <Modal.Header >
                                        <Modal.Title>Confirm Action</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body> {userData.role !== "admin" ? "your delete request is sent to admin":
                                    "Are you sure you want to remove this Project?"}</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="success" onClick={() => setmodal(false)}>
                                            Close
                                        </Button>
                                        {userData.role !== "admin" ? null :
                                        <Button variant="danger" onClick={()=>{dispatch(removeProject(pro.index)); setmodal(false)}}>
                                        Delete
                                        </Button>}
                                    </Modal.Footer>
                                </Modal>


                                <Modal show={modalDR} onHide={() => setmodalDR(false)}>
                                    <Modal.Header >
                                        <Modal.Title>Confirm Action</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                    A user Requested to delete a Poject</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="success" onClick={() => setmodalDR(false)}>
                                            Close
                                        </Button>
                                        
                                        <Button variant="danger" onClick={()=>{dispatch(removeProject(parseInt(deleteid))); setmodalDR(false);localStorage.setItem("deleteproject",false)}}>
                                        Delete
                                        </Button>
                                    </Modal.Footer>
                                </Modal>        
                    </tr>:
                    pro.developer === userData.firstname ?
                    <tr key={pro.index}>
                        <th>{pro.project}</th>
                        <th>{pro.created}</th>
                        <th>{pro.developer}</th>
                        <th>{pro.category}</th>
                       
                        <th><BiEdit
                         // eslint-disable-next-line
                         onClick={()=>(dispatch(projectIndex(pro.index)),history.push("/dashboard/editProject"))}/></th>
        
                        {userData.role !== "admin" ? <th><MdDelete
                        // eslint-disable-next-line
                        onClick={()=>{setmodal(true),localStorage.setItem("deleteproject",true),localStorage.setItem("deleteid",pro.index)} } /></th>:
                        <th><MdDelete onClick={()=>setmodal(true) } /></th>}

                        <Modal show={modal} onHide={() => setmodal(false)}>
                                    <Modal.Header >
                                        <Modal.Title>Confirm Action</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body> {userData.role !== "admin" ? "your delete request is sent to admin":
                                    "Are you sure you want to remove this Project?"}</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="success" onClick={() => setmodal(false)}>
                                            Close
                                        </Button>
                                        {userData.role !== "admin" ? null :
                                        <Button variant="danger" onClick={()=>{dispatch(removeProject(pro.index)); setmodal(false)}}>
                                        Delete
                                        </Button>}
                                    </Modal.Footer>
                                </Modal>


                                <Modal show={modalDR} onHide={() => setmodalDR(false)}>
                                    <Modal.Header >
                                        <Modal.Title>Confirm Action</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                    A user Requested to delete a Poject</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="success" onClick={() => setmodalDR(false)}>
                                            Close
                                        </Button>
                                        
                                        <Button variant="danger" onClick={()=>{dispatch(removeProject(parseInt(deleteid))); setmodalDR(false);localStorage.setItem("deleteproject",false)}}>
                                        Delete
                                        </Button>
                                    </Modal.Footer>
                                </Modal>        
                    </tr> :null
                    )}
            </tbody>
        </Table>
    )
}

export default Projects