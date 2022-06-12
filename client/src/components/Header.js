import { Navbar, Nav,NavDropdown, Form, FormControl, Container, Button } from 'react-bootstrap';

export default function Header() {
    return (
        <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
            <Container fluid>
                <Navbar.Brand>Reviews App</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#action1">Home</Nav.Link>
                    {/* <Nav.Link href="#action2">Link</Nav.Link> */}
                    <NavDropdown title="Action" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Upload</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Contact</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">FAQ</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}