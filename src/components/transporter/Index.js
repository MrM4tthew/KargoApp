import React, { useState } from "react";
import PropTypes from "prop-types";
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

const Transporter = (props) => {
  return (
    <>
     {/* <Redirected /> */}
    </>
  );
};

Transporter.propTypes = {};

export default Transporter;
