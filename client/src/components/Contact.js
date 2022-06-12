import Footer from "./Footer";
import Header from "./Header";
import { FloatingLabel, Form, Button} from 'react-bootstrap';

export default function Contact() {
    return (
        <div>
            <Header/>
                <form className="contact-form-container bg-dark ">
                    <div className="col-md-5 mx-auto">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingTextarea2" label="Comments">
                            <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                            />
                        </FloatingLabel>

                        <div className="d-grid">
                            <Button variant="success" size="md">Submit</Button>
                        </div>
                    </div> 
                </form>
            <Footer/>
        </div>
    )
}