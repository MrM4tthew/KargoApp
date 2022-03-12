import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "styles/css/login.scss";

const Login = (props) => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(value === "shipper") {
       navigate("/shipper")
    } else {
       navigate("/transporter")
    }
  };

  return (
    <Container fluid className="login-container p-0">
      <div className="form-container">
        <h2 className="text-center" id="title">
          Welcome to Kargo Apps
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mt-5">
            <p className="text-center">Please select your role before login:</p>
            <div className="d-flex justify-content-center">
              <div>
                <input
                  type="radio"
                  id="transporter"
                  name="role-position"
                  value="transporter"
                  onChange={handleChange}
                  checked={value === "transporter"}
                />
                <label className="ms-1" for="transporter">
                  Transporter
                </label>
              </div>
              <div className="ms-2">
                <input
                  type="radio"
                  id="shipper"
                  name="role-position"
                  value="shipper"
                  onChange={handleChange}
                  checked={value === "shipper"}
                />
                <label className="ms-1" for="shipper">
                  Shipper
                </label>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-2">
              <Button type="submit">Login</Button>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
};

Login.propTypes = {};

export default Login;
