import Footer from "./Footer";
import Header from "./Header";
import Axios from 'axios'
import { FloatingLabel, Form, Button} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Contact() {

    const navigate = useNavigate()

    const [email, setEmail] = useState()
    const [comment, setComment] = useState()
    const [name, setName] = useState()
    const [date, setDate] = useState()

    const submitContact = () => {
        console.log('contact submitted')
        Axios.post('http://localhost:3001/contact',{
            email: email,
            comment: comment,
            name: name,
            date: date
        })
        alert('contact sent!')
    }

    return (
        <div>
            <Header/>
                <form className="contact-form-container bg-dark ">
                    <div className="col-md-5 mx-auto">
                        <legend className='text-light'>Send Contact Form</legend>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Full Name"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="full name" onChange={(e)=>setName(e.target.value)}/>
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control type="email" placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)}/>
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingTextarea2" label="Comments">
                            <Form.Control
                            as="textarea"
                            onChange={(e)=>setComment(e.target.value)}
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                            />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="date"
                            className="mb-3"
                        >
                            <Form.Control type="date" onChange={(e)=>setDate(e.target.value)}/>
                        </FloatingLabel>

                        <div className="d-grid gap-2">
                            <Button variant="success" size="md" onClick={()=>{
                                submitContact()
                                navigate('/')
                                }}>Submit</Button>
                            <Link to='/' className="d-grid">
                                <Button variant="danger">Cancel</Button>
                            </Link>
                        </div>
                    </div> 
                </form>
            <Footer/>
        </div>
    )
}