import React from 'react'
import PropTypes from 'prop-types'
import { Navbar, Container, Nav, NavDropdown, Button, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { Success } from 'utils/alert';

const NavbarShipper = props => {
const navigate = useNavigate();

  const handleLogout = () =>{ 
      Success("You have been logout!")
      navigate('/')
    };

  const handleClickShipments = () => navigate('/shipper');

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand >LMS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Button variant="outline-primary" onClick={handleClickShipments}>Shipments</Button>
            </Nav>
          </Navbar.Collapse>
          <Button onClick={handleLogout}>Logout</Button>
        </Container>
      </Navbar>
      {props.children}
    </>
  );
}

NavbarShipper.propTypes = {}

export default NavbarShipper