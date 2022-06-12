import { Form, Stack, Button } from 'react-bootstrap';

export default function UpdateForm() {
    return (
        <div className="update-form-container">
            <Form className='upload-form'>
                <legend className='text-light'>Update Project Form</legend>
                <Stack gap={2} className="col-md-15 mx-auto">
                    <Form.Label className='text-light'>Project Title</Form.Label>
                    <Form.Control type="text" placeholder="Title" />
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label className='text-light'>Project Picture</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                    <Form.Label className='text-light'>Project Description</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Description"/>
                    <Button variant="success" onClick={(e)=>{
                        e.preventDefault()
                    }}>Upload</Button>
                </Stack>
            </Form>
        </div>
    )
}