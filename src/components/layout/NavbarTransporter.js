import React from 'react'
import PropTypes from 'prop-types'
import { Navbar, Container, Nav, NavDropdown, Button, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { Success } from 'utils/alert';

const NavbarTransporter = props => {
const navigate = useNavigate();

  const handleLogout = () =>{ 
      Success("You have been logout!")
      navigate('/')
    };
  const handleClickShipments = () => navigate('/transporter/shipments');
  const handleClickTrucks= () => navigate('/transporter/trucks');
  const handleClickDrivers = () => navigate('/transporter/drivers');
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">LMS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Button variant="outline-primary" onClick={handleClickShipments}>Shipments</Button>
              <Button variant="outline-primary ms-4" onClick={handleClickTrucks}>Trucks</Button>
              <Button variant="outline-primary ms-4" onClick={handleClickDrivers}>Drivers</Button>
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