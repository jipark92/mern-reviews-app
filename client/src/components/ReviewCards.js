import { Row, Col, Card, Button } from 'react-bootstrap';
import { AiFillDelete, AiOutlineEdit } from 'react-icons/ai';
import { useState } from 'react'
import Axios from 'axios'
import UpdateForm from './UpdateForm';

export default function ReviewCards(props) {

    const [showUpDForm, setShowUpDForm] = useState(false)

    const deleteProject = (id) => {
        console.log('project deleted')
        Axios.delete(`http://localhost:3001/deleteproject/${id}`)
    }

    const updateProject = () => {
        console.log('update project')
        setShowUpDForm(prevShowUpDForm => !prevShowUpDForm)
    }

    return (
        <Row xs={1} md={3} lg={4} className="review-cards-container g-4 text-light ">
            {props.information.map((info,i) => (
                <Col key={i}>
                    <Card className='bg-dark border-white'>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>{info.title}</Card.Title>
                            <Card.Text>{info.description}</Card.Text>
                        </Card.Body>
                        <div className='action-btn-container'>
                            <Button variant="outline-danger" onClick={(e)=>{
                                e.preventDefault()
                                deleteProject(info._id)
                                }}><AiFillDelete/>
                            </Button>
                            <Button variant="outline-success" onClick={(e)=>{
                                e.preventDefault()
                                updateProject()
                                }}><AiOutlineEdit/></Button>
                        </div>
                    </Card>
                </Col>
            ))}
            {!showUpDForm? "":<UpdateForm/>}
        </Row>
    )
}