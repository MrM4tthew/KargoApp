import PropTypes from "prop-types";
import React, { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  Form,
} from "react-bootstrap";
import MaterialTable from "material-table";
import { trucks } from "mock/trucks";
import Select from "react-select";
import { map } from "lodash";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavbarTransporter from "components/layout/NavbarTransporter";

const Drivers = (props) => {
  const [isOpen, setOpenModal] = useState(false);
  const newArr = map(trucks.data, "truck_type_name");
  const optionTruckTypes = newArr.map((el) => ({
    value: el.toLowerCase(),
    label: el,
  }));
  const handleShow = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <>
      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Unit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <form>
              <div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>License Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter License Number"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>License Type</Form.Label>
                  <Form.Control type="text" placeholder="Select License Type" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Truck Type</Form.Label>
                  <Form.Control type="text" placeholder="Select Truck Type" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Production Year</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Production Year"
                  />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>License Number</Form.Label>
                  <Form.Control type="text" placeholder="Enter License Number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>License Number</Form.Label>
                  <Form.Control type="text" placeholder="Enter License Number" />
                </Form.Group> */}
                <div className="d-flex justify-content-end">
                  <Button
                    variant="secondary"
                    className="me-3"
                    onClick={handleClose}
                  >
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
      <NavbarTransporter>
        <Container className="my-5">
          <div>
            <h2>Transporter Menu</h2>
          </div>
          <div className="d-flex justify-content-between my-5">
            <Select options={optionTruckTypes} placeholder="Truck Type" />
          </div>
          <div className="transporter-table-container">
            <MaterialTable
              title="List of Drivers"
              columns={[
                {
                  title: "License Number",
                  field: "license_number",
                  render: (rowData) => (
                    <a href={""} className="text-decoration-none">
                      {rowData.license_number}
                    </a>
                  ),
                },
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
                  onClick: (event, rowData) => setOpenModal(true),
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
      </NavbarTransporter>
    </>
  );
};

Drivers.propTypes = {};

export default Drivers;
