import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navb(){
    return(
      <div className="navb">
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#about">Computer</Nav.Link>
            <Nav.Link href="#Laptop">Laptop</Nav.Link>
            <Nav.Link href="#Products">Products</Nav.Link>
            <Nav.Link href="#ContactUs">Contact Us</Nav.Link>
            <Nav.Link href="#Login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    )
}
export default Navb