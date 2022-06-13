import { Row, Col, Card, Button } from 'react-bootstrap';
import { AiFillDelete, AiOutlineEdit } from 'react-icons/ai';
import { FaRegThumbsDown, FaRegThumbsUp } from 'react-icons/fa';
import { useState, useEffect } from 'react'
import {useAuth0} from '@auth0/auth0-react'
import Axios from 'axios'
import UpdateForm from './UpdateForm';

export default function ReviewCards(props) {

    const {isAuthenticated} = useAuth0()

    const [showUpDForm, setShowUpDForm] = useState(false)
    const [reviewData, setReviewData] = useState([])
    const [singleRData, setSingleRData] = useState([])
    const [counter, setCounter] = useState(0)

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

    const voteUp = () => {
        console.log('vote up')
        setCounter(prevCount=> prevCount + 1)
    }

    const voteDown = () => {
        console.log('vote down')
        setCounter(prevCount=> prevCount - 1)
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
                        
                        {!isAuthenticated?<p className='pls-login' style={{"color":"yellow"}}>PLEASE LOGIN TO EDIT/DELETE POST</p>:""}

                        <div className='action-btn-container'>
                            <div className='vote-container'>
                                <Button variant="outline-warning" onClick={voteDown}><FaRegThumbsDown/></Button>
                                <p>{counter}</p>      {/*{info.counter} */}
                                <Button variant="outline-primary" onClick={voteUp}><FaRegThumbsUp/></Button>
                            </div>
                            
                            {isAuthenticated &&(
                            <div className='edit-del-container'>
                                <Button variant="outline-danger" onClick={(e)=>{
                                    e.preventDefault()
                                    deleteProject(info._id)
                                    }}><AiFillDelete/>
                                </Button>
                                <Button variant="outline-success" onClick={(e)=>{
                                    e.preventDefault()
                                    setSingleRData(info)
                                    openUpdateForm()
                                    }}><AiOutlineEdit/>
                                </Button>
                            </div>)}
                            
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