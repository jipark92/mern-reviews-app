import { Row, Col, Card } from 'react-bootstrap';

export default function ReviewCards() {
    return (
        <div className="review-cards-container">
            {/* <article className="card">
                ReviewCards
            </article>

            <article className="card">
                ReviewCards
            </article>

            <article className="card">
                ReviewCards
            </article> */}

            <Row xs={1} md={2} className="g-4 text-light ">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                    <Card className='bg-dark border-white'>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}