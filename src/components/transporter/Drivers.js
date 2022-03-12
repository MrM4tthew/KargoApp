import PropTypes from "prop-types";
import React, { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  Form,
  Modal
} from "react-bootstrap";
import MaterialTable from "material-table";
import { drivers } from "mock/drivers";
import Select from "react-select";
import { map } from "lodash";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NavbarTransporter from "components/layout/NavbarTransporter";

const Drivers = (props) => {
  const [isOpen, setOpenModal] = useState(false);

  const handleShow = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <>
      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Driver</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <form>
              <div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Driver Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Driver Name"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="text" placeholder="Enter Phone Number" />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Truck Type</Form.Label>
                  <Form.Control type="text" placeholder="Select Truck Type" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Production Year</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Production Year"
                  />
                </Form.Group> */}
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
                    Save Driver
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
            {/* <Select options={optionTruckTypes} placeholder="Truck Type" /> */}
          </div>
          <div className="transporter-table-container">
            <MaterialTable
              title="List of Drivers"
              columns={[
                {
                  title: "Driver Name",
                  field: "driver_name",
                  render: (rowData) => (
                    <a href={""} className="text-decoration-none">
                      {rowData.driver_name}
                    </a>
                  ),
                },
                { title: "Phone Number", field: "phone_number" },
                { title: "Created At", field: "created_at" },
                { title: "Status", field: "status" },
              ]}
              data={drivers.data}
              actions={[
                {
                  icon: "edit",
                  tooltip: "Update Unit",
                  // onClick: (event, rowData) => setOpenModal(true),
                },
                {
                  icon: "add",
                  tooltip: "Add New Unit",
                  isFreeAction: true,
                  onClick: (event, rowData) => setOpenModal(true),
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
