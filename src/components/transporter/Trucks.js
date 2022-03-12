import PropTypes from 'prop-types'
import React, { useEffect, useState } from "react";
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
import getTruck from 'redux/actions/trucks';
import { useDispatch } from 'react-redux';

const Trucks = props => {
    const [isOpen, setOpenModal] = useState(false);
    const [detailModal, setDetailModal] = useState(null)
    const [detailShow, setDetailShow] = useState(false)
    const [truck, settruck] = useState(null)

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getTruck())
    }, [truck, dispatch])

    const newArr = map(trucks.data, "truck_type_name");
    const optionTruckTypes = newArr.map((el) => ({
      value: el.toLowerCase(),
      label: el,
    }));
    const handleShow = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
    
    const handleDetail = (rowData) => {
        setDetailShow(true)
        setDetailModal(rowData)
      }
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
                    <Form.Control
                      type="text"
                      placeholder="Select License Type"
                    />
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
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Default file input example</Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Default file input example</Form.Label>
                    <Form.Control type="file" />
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
                      Save Unit
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </Modal.Body>
        </Modal>
        {/* <Modal show={detailModal} onHide={detailShow} detailModal={detailModal}>
          <Modal.Header closeButton>
            <Modal.Title>Detail</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              {detailModal}
            </div>
          </Modal.Body>
        </Modal> */}
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
                title="List of Trucks"
                columns={[
                  {
                    title: "License Number",
                    field: "license_number",
                    render: (rowData) => (
                      <a onClick={rowData => setOpenModal(true)} className="text-decoration-none">
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
}

Trucks.propTypes = {}

export default Trucks