import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/NavBar'

function BookNavBar(){
    return (
        <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">EpiBook</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Browser</Nav.Link>
            
            
              
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default BookNavBar