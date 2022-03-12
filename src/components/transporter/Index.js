import React, { useState } from "react";
import PropTypes from "prop-types";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import MaterialTable from "material-table";
import { trucks } from "mock/trucks";
import Select from 'react-select';
import {map} from 'lodash'
import { Link } from "react-router-dom";

const Transporter = (props) => {
  const [isOpen, setOpenModal] = useState(false);

  const newArr = map(trucks.data, "truck_type_name")
  const optionTruckTypes = newArr.map((el) => ({value: el.toLowerCase(), label: el}))

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
          <Button>Logout</Button>
        </Container>
      </Navbar>
      <Container className="my-5">
        <div>
          <h2>Transporter Menu</h2>
        </div>
        <div className="d-flex justify-content-between my-5">
          <Select options={optionTruckTypes} placeholder="Truck Type" />
        </div>
        <div className="transporter-table-container">
          <MaterialTable
            title="List of Trucks"
            columns={[
              { title: "License Number", field: "license_number", render: rowData => <a href={""} className="text-decoration-none">{rowData.license_number}</a> },
              { title: "Truck Type", field: "truck_type_name" },
              { title: "Plate Type", field: "plate_type_name" },
              { title: "Production Year", field: "production_year" },
              { title: "Status", field: "status" },
            ]}
            data={trucks.data}
            actions={[
              {
                icon: "edit",
                tooltip: "Update Unit",
                onClick: (event, rowData) => alert("You saved " + rowData.name),
              },
              {
                icon: "add",
                tooltip: "Add New Unit",
                isFreeAction: true,
                onClick: (event) => alert("You want to add a new row"),
              },
            ]}
            options={{
              actionsColumnIndex: -1,
            }}
          />
        </div>
      </Container>
    </>
  );
};

Transporter.propTypes = {};

export default Transporter;
