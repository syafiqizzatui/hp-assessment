import React, {useState} from "react";
import {Container, Navbar, Nav, Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <header className="border-bottom mb-4">
      <Navbar expand="md" className="py-3">
        <Container className="flex-grow-1">
          <Navbar.Brand href="/" className="mb-md-3 mb-0 mb-md-0 me-auto text-decoration-none">
            <span className="fs-4 fw-bold">LOGO</span>
          </Navbar.Brand>
          <Button className="navbar-toggler border-0 bg-transparent" type="button" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" onClick={handleNavCollapse}>
            <span className="navbar-toggler-icon"></span>
          </Button>
          <div className="nav-wrapper">
            <Nav className={`${isNavCollapsed ? "collapse" : "hidden"} navbar-collapse`}>
              <Nav.Item>
                <NavLink to="/" className={({ isActive }) => (isActive ? "active active px-3" : "nav-link text-light px-3")} onClick={handleNavCollapse}>Home</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/team" className={({ isActive }) => (isActive ? "active active px-3" : "nav-link text-light px-3")} onClick={handleNavCollapse}>Our People</NavLink>
              </Nav.Item>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
