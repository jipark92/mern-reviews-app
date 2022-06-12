import { Row, Col, Card } from 'react-bootstrap';

export default function ReviewCards(props) {

    return (
        <Row xs={1} md={2} className="review-cards-container g-4 text-light ">
            {props.information.map((info,i) => (
                <Col key={i}>
                    <Card className='bg-dark border-white'>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>{info.title}</Card.Title>
                            <Card.Text>{info.description}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}