import { Navbar, Nav,NavDropdown, Form, FormControl, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import {useAuth0} from '@auth0/auth0-react'

export default function Header() {

    const { loginWithRedirect, logout, isAuthenticated, user , isLoading} = useAuth0()

    // if(isLoading) return <div>Loading...</div>

    return (
        <Navbar className='py-3 px-3' expand="lg" bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand>Reviews App</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                <Link to='/'>
                    <Nav.Link className='text-light' disabled>Home</Nav.Link>
                </Link>
                    {/* <Nav.Link>Refresh</Nav.Link> */}
                    <NavDropdown title="Action" id="navbarScrollingDropdown">
                        <Link to='/newproject'>
                            <NavDropdown.Item className='text-dark' disabled>Upload</NavDropdown.Item>
                        </Link>
                        <Link to='/contact'>
                            <NavDropdown.Item className='text-dark' disabled>Contact</NavDropdown.Item>
                        </Link>
                        <NavDropdown.Divider />
                        <Link to='/faq'>
                            <NavDropdown.Item className='text-dark' disabled>FAQ</NavDropdown.Item>
                        </Link>
                    </NavDropdown>
                </Nav>
                <Form className="d-flex" >
                    {isAuthenticated && (<div className='profile-info'><p>{user.name}</p><img src={user.picture} alt={user.name} className="profile-pic"/></div> )}
                    {isAuthenticated && (<Button className='mx-2' onClick={()=>logout()}>Logout</Button>) || (<Button onClick={()=>loginWithRedirect()}>Login</Button>)}
                    {/* <p className='text-light'>{JSON.stringify(user,null,2)}</p> */}
                    {/* <FormControl
                    type="search"
                    placeholder="DISABLED. FILTER FUNCTION"
                    className="me-2"
                    aria-label="Search"
                    disabled
                    />
                    <Button variant="outline-success">Search</Button> */}
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}