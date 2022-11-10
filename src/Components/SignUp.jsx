import React, { useState } from "react";
import {
  Row,
  Col,
  Container,
  Form,
  Button,
  Card,
  InputGroup,
} from "react-bootstrap";
import { FaAt, FaFacebook, FaGoogle, FaLock, FaUser } from "react-icons/fa";
import "../App.css";
const SignUp = () => {
  const initialValue = {
    name: "",
    email: "",
    password: "",
    checkBox: true,
  };
  const [userData, setUserData] = useState(initialValue);
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setUserData({ ...userData, [name]: type === "checkbox" ? checked : value });
    console.log(userData);
  };
  return (
    <Container fluid>
      <Row>
        <Col lg="6"></Col>
        <Col lg="6">
          <Card style={{}} className="rounded-start-card">
            <Card.Body>
              <div className="my-4">d</div>
              <div className="mb-5">d</div>
              <div className="mt-5">
                <h2 className="text-center fw-bold mb-3">
                  Welcome to WestTech
                </h2>
                <Row>
                  <Col lg="6" className="mx-auto">
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="password">
                        <FaUser />
                      </InputGroup.Text>{" "}
                      <Form.Control
                        name="name"
                        type="text"
                        placeholder="Full Name"
                        value={userData.name}
                        onChange={handleChange}
                      ></Form.Control>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="password">
                        <FaAt />
                      </InputGroup.Text>{" "}
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={userData.email}
                        onChange={handleChange}
                      ></Form.Control>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="password">
                        <FaLock />
                      </InputGroup.Text>
                      <Form.Control
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={userData.password}
                        onChange={handleChange}
                      ></Form.Control>
                    </InputGroup>
                    <Form.Check
                      className="mb-4"
                      type="checkbox"
                      label="I agree with Terms and Privacy"
                      onChange={handleChange}
                    ></Form.Check>
                    <div>
                      <Button className="form-control bg-green mb-3">
                        Sign Up
                      </Button>
                      <Button
                        className="form-control mb-3"
                        variant="outline-secondary"
                      >
                        <FaGoogle />
                        Sign Up with Google
                      </Button>
                      <Button
                        className="form-control mb-3"
                        variant="outline-secondary"
                      >
                        <FaFacebook />
                        Sign Up with Facebook
                      </Button>
                    </div>
                    <div className="my-2 text-center">
                      <p className="text-leadn mb-5">
                        Already have an account? Log In
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
