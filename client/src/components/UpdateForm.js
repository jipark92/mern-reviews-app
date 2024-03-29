import { Form, Stack, Button } from 'react-bootstrap';
import { useState } from 'react'
import Axios from 'axios'

export default function UpdateForm(props) {

    const [newTitle, setNewTitle ] = useState()
    const [newImgUrl, setNewImgUrl] = useState()
    const [newDescription ,setNewDescription] = useState()
    const [newDate, setNewDate] = useState()

    const updateProject = (id) => {
        Axios.put('http://localhost:3001/updateproject',{
            id: id,
            newTitle: newTitle,
            newImgUrl: newImgUrl,
            newDescription: newDescription,
            newDate: newDate
        })
        alert('Update Success!')
        props.closeUpdate()
    }

    return (
        <div className="update-form-container">
            <Form >
                <legend className='text-light'>Update Project Form</legend>
                <Stack gap={2} className="col-md-15 mx-auto">
                    <Form.Label className='text-light'>Project Title</Form.Label>
                    <Form.Control type="text" placeholder="Title" defaultValue={props.projectInfo.title} onChange={(e)=>setNewTitle(e.target.value)}/>
                    
                    <Form.Label className='text-light'>Image URL</Form.Label>
                    <Form.Control type="text" placeholder=".com/mJe4ojw.png"   onChange={(e)=>setNewImgUrl(e.target.value)}/>
                    
                    <Form.Label className='text-light'>Project Description</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Description" defaultValue={props.projectInfo.description} onChange={(e)=>setNewDescription(e.target.value)}/>
                    
                    <Form.Label className='text-light'>Project Date</Form.Label>
                    <Form.Control type="date" onChange={(e)=>{setNewDate(e.target.value)}}/>
                    <Button variant="success" onClick={(e)=>{
                        e.preventDefault()
                        updateProject(props.projectInfo._id)
                    }}>Update</Button>
                    <Button variant="danger" onClick={props.closeUpdate}>Close</Button>
                </Stack>
            </Form>
        </div>
    )
}