import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <header className="border-bottom mb-4">
      <Navbar expand="md" className="py-3">
        <Container className="d-flex flex-wrap justify-content-center">
          <Navbar.Brand href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
            <span className="fs-4 fw-bold">LOGO</span>
          </Navbar.Brand>
          <Nav className="nav-pills">
            <Nav.Item>
              <Nav.Link href="#">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="active text-light">Our People</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;