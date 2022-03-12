import React, { useState } from "react";
import PropTypes from "prop-types";
import { Navbar, Container, Nav, DropdownButton, Dropdown,  Button } from "react-bootstrap";
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
  const dispatch = useDispatch()
  const {shipments} = useSelector((state) => state.shipments) ?? [];
  
  useEffect(() => {
    dispatch(getShipments());
  }, [])

  console.log('shipments', shipments)

  return (
    <>
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
      </NavbarShipper>
    </>
  );
}

export default Shipper