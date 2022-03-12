import React from 'react'
import PropTypes from 'prop-types'
import { Navbar, Container, Nav, NavDropdown, Button, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const NavbarTransporter = props => {
const navigate = useNavigate();

  const handleLogout = (props) => navigate('/');
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">LMS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Shipments</Nav.Link>
              <Nav.Link href="#link">Trucks</Nav.Link>
              <Nav.Link href="#link">Drivers</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Button onClick={handleLogout}>Logout</Button>
        </Container>
      </Navbar>
      {props.children}
    </>
  );
}

NavbarTransporter.propTypes = {}

export default NavbarTransporter