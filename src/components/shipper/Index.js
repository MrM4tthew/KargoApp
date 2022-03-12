import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  Form,
  Modal,
  DropdownButton,
  Dropdown
} from "react-bootstrap";
import MaterialTable from "material-table";
import { shippments } from "mock/shippments";
import Select from 'react-select';
import {map} from 'lodash'
import { Link } from "react-router-dom";
import NavbarShipper from "components/layout/NavbarShipper";
import { useDispatch, useSelector } from "react-redux";
import {useEffect} from 'react'
import getShipments from "redux/actions/shipments";

const Shipper = (props) => {
  const [isOpen, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const {shipments} = useSelector((state) => state.shipments) ?? [];

  console.log('shipments', shipments)

  const handleShow = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  
  useEffect(() => {
    const fetch = async () => {
      await dispatch(getShipments());

    }
    fetch();
  }, [])

  return (
    <>
    <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Shipment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <form>
              <div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Origin</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Search district here"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Destination</Form.Label>
                  <Form.Control type="text" placeholder="Search district here" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Loading Date</Form.Label>
                  <Form.Control type="date" placeholder="08/27/2021" />
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
                    Save
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
      <NavbarShipper>
        <Container className="my-5">
          <div>
            <h2>Transporter Menu</h2>
          </div>
          <div className="transporter-table-container">
            <MaterialTable
              title="Shippments"
              columns={[
                { title: "Shippment", field: "shippment_number" },
                { title: "License", field: "license_number" },
                { title: "Driver's Name", field: "driver_name" },
                { title: "Origin", field: "origin" },
                { title: "Surabaya", field: "destination" },
                { title: "Loading Date", field: "loading_date" },
                { title: "Status", field: "status" },
                {
                  title: "Action",
                  render: (rowData) => (
                    <>
                      <DropdownButton
                        id="dropdown-basic-button"
                        title="Actions"
                      >
                        <Dropdown.Item href="#/action-1">
                          Alocated Shipments
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          On going to Origin
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          At Going
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-4">
                          On going to Destination
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-5">
                          At Destination
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-6">
                          Completed
                        </Dropdown.Item>
                      </DropdownButton>
                    </>
                  ),
                },
              ]}
              data={shippments.data}
              actions={[
                {
                  icon: "add",
                  tooltip: "Add Shipment",
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
      </NavbarShipper>
    </>
  );
}

export default Shipper