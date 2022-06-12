import { Form, Button, Stack } from 'react-bootstrap';
import { useState } from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function UploadForm() {

    const navigate = useNavigate()

    const [title, setTitle] = useState()
    const [description, setDescription] = useState()

    const uploadProject = () => {
        Axios.post('http://localhost:3001/newproject',{
            title: title,
            description: description
        })
        alert('project added')
    }

    return (
        <div className='upload-form-container bg-dark'>
            <Form className='upload-form'>
                <legend className='text-light'>Upload Project Form</legend>
                <Stack gap={2} className="col-md-15 mx-auto">
                    <Form.Label className='text-light'>Project Title</Form.Label>
                    <Form.Control type="text" placeholder="Title" onChange={(e)=>setTitle(e.target.value)}/>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label className='text-light'>Project Picture</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                    <Form.Label className='text-light'>Project Description</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Description" onChange={(e)=>{setDescription(e.target.value)}}/>
                    <Button variant="success" onClick={(e)=>{
                        e.preventDefault()
                        uploadProject()
                        navigate('/')
                    }}>Upload</Button>
                </Stack>
            </Form>
        </div>
    )
}