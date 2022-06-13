import { Row, Col, Card, Button } from 'react-bootstrap';
import { AiFillDelete, AiOutlineEdit } from 'react-icons/ai';
import { useState, useEffect } from 'react'
import Axios from 'axios'
import UpdateForm from './UpdateForm';

export default function ReviewCards(props) {

    const [showUpDForm, setShowUpDForm] = useState(false)
    const [reviewData, setReviewData] = useState([])
    const [singleRData, setSingleRData] = useState([])

    useEffect(()=>{
        getData()
    })

    const getData = async () =>{
        const url = await fetch('http://localhost:3001/')
        const data = await url.json()
        setReviewData(data)
    }

    const deleteProject = (id) => {
        Axios.delete(`http://localhost:3001/deleteproject/${id}`)
    }

    const openUpdateForm = () => {
        setShowUpDForm(true)
    }

    const closeUpdateForm = () => {
        setShowUpDForm(false)
    }

    return (
        <Row xs={1} md={3} lg={4} className="review-cards-container g-4 text-light ">
            {reviewData.map((info,i) => (
                <Col key={i}>
                    <Card className='cards bg-dark border-white'>
                        <Card.Img className='project-img' variant="top" src={info.imageURL} />
                        <Card.Body>
                            <Card.Title>Title: {info.title}({info.date})</Card.Title>
                            <Card.Text>Description: {info.description}</Card.Text>
                        </Card.Body>
                        <div className='action-btn-container'>
                            <Button variant="outline-danger" onClick={(e)=>{
                                e.preventDefault()
                                deleteProject(info._id)
                                }}><AiFillDelete/>
                            </Button>
                            <Button variant="outline-success" onClick={(e)=>{
                                e.preventDefault()
                                setSingleRData(info)
                                openUpdateForm()
                                }}><AiOutlineEdit/></Button>
                        </div>
                    </Card>
                    {!showUpDForm? "":<UpdateForm
                        projectInfo={singleRData}
                        closeUpdate={closeUpdateForm}
                    />}
                </Col>
            ))}
        </Row>
    )
}