import Footer from "./Footer";
import Header from "./Header";
import { Badge } from 'react-bootstrap';

export default function Faq() {
    return (
        <div className="faq-container-container">
            <Header/>
            <div className="badge-container bg-dark">
                <h5 className="text-light">Tools used: </h5>
                <Badge bg="primary">Javascript</Badge> 
                <Badge bg="secondary">React</Badge>
                <Badge bg="success">Node</Badge> 
                <Badge bg="danger">MongoDB</Badge>
                <Badge bg="warning" text="dark">Express</Badge>
                <Badge bg="info">Bootstrap</Badge>
            </div>
            <Footer/>
        </div>
    )
}