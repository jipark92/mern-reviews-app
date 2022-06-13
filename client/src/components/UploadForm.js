import { Form, Button, Stack } from 'react-bootstrap';
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {useAuth0} from '@auth0/auth0-react'
import Axios from 'axios'

export default function UploadForm() {

    const {isAuthenticated} = useAuth0()

    const navigate = useNavigate()

    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [imgUrl, setImgUrl] = useState()
    const [date, setDate] = useState()

    const uploadProject = () => {
        Axios.post('http://localhost:3001/newproject',{
            title: title,
            imageURL: imgUrl,
            description: description,
            date: date
        })
        alert('project added')
    }

    if(!isAuthenticated) return <div className='upload-form-container bg-dark text-light'><h3 style={{"color":"yellow"}}>PLEASE LOGIN TO UPLOAD</h3></div>

    return (isAuthenticated && (
        <div className='upload-form-container bg-dark'>
            <Form className='upload-form' encType='multipart/form-data'>
                <legend className='text-light'>Upload Project Form</legend>
                <Stack gap={2} className="col-md-20 mx-auto">
                    <Form.Label className='text-light' >Project Title</Form.Label>
                    <Form.Control type="text" placeholder="Title" onChange={(e)=>setTitle(e.target.value)}/>
                    
                    <Form.Label className='text-light'>Image URL</Form.Label>
                    <Form.Control type="text" placeholder=".com/mJe4ojw.png" onChange={(e)=>setImgUrl(e.target.value)}/>
                    
                    <Form.Label className='text-light'>Project Description</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Description" onChange={(e)=>{setDescription(e.target.value)}}/>
                    
                    <Form.Label className='text-light'>Project Date</Form.Label>
                    <Form.Control type="date" onChange={(e)=>{setDate(e.target.value)}}/>

                    <Button variant="success" onClick={(e)=>{
                        e.preventDefault()
                        uploadProject()
                        navigate('/')
                    }}>Upload</Button>
                    <Link to='/' className='d-grid'>
                        <Button variant="danger">Cancel</Button>
                    </Link>
                </Stack>
            </Form>
        </div>)
    )
}