import { Navbar, Nav } from 'react-bootstrap'

const MyNavBar = () => (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="#link">Menu</Nav.Link>
                <Nav.Link href="#link">Reservations</Nav.Link>
                <Nav.Link href="#link">Contact Us</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>

)

export default MyNavBar