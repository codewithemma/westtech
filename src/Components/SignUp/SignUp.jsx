import React, { useRef, useState } from "react";
import { Row, Col, Container, Form, Button, InputGroup } from "react-bootstrap";
import { FaAt, FaLock, FaUser } from "react-icons/fa";
import "../../Components/SignUp/SignUp.css";
import Nav from "../Navbar/Navbar";
// import sidepic from "../../img/sidepic.png";
import facebook from "../../img/facebook.png";
import google from "../../img/google.png";
import { useNavigate, Link } from "react-router-dom";
import Modals from "../Modal/Modal";
import { useModal } from "react-simple-hook-modal";
const SignUp = () => {
  const initialValue = {
    name: "codewithemma",
    email: "",
    password: "",
    checkBox: true,
  };
  const navigate = useNavigate();
  const { openModal } = useModal();

  const [userData, setUserData] = useState(initialValue);
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setUserData({ ...userData, [name]: type === "checkbox" ? checked : value });
    console.log(userData);
  };
  const checkRef = useRef(null);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    const user = JSON.stringify(userData);
    sessionStorage.getItem("user") === null &&
      sessionStorage.setItem("user", user);
    <Modals />;
    alert("Account created successfully");
    navigate("/");
  };
  const [show, setShow] = useState(true);
  const [validated, setValidated] = useState(false);
  return (
    <div className="sign-up">
      <Container fluid>
        <Row>
          <Col lg="6" md="6">
            <div>
              <Nav />
            </div>
            <div className="fw-bold text-white mt-3 d-none d-sm-block">
              <p
                className="
              "
              >
                Join the Platform to get more <br /> exciting features
              </p>
            </div>
            {/* <div className="mx-auto me-5">
              <img src={sidepic} alt="illustration" className="img-fluid" />
            </div> */}
          </Col>
          <Col lg="6" md="6" className="bg-white">
            <div className="my-4">
              <h2 className="text-start fw-bold my-5 d-none d-sm-block">
                Create Account
              </h2>
              <h2 className="text-start fw-bold my-5 	d-block d-sm-none">
                SignUp
              </h2>
              <Row>
                <Col lg="6" className="mx-auto">
                  <Form onSubmit={handleSubmit} validated={validated}>
                    <InputGroup className="mb-3" hasValidation>
                      <InputGroup.Text id="name">
                        <FaUser />
                      </InputGroup.Text>
                      <Form.Control
                        name="name"
                        type="text"
                        placeholder="Full Name"
                        value={userData.name}
                        onChange={handleChange}
                        required
                        isValid
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </InputGroup>
                    <InputGroup className="mb-2" hasValidation>
                      <InputGroup.Text id="password">
                        <FaAt />
                      </InputGroup.Text>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={userData.email}
                        onChange={handleChange}
                        required
                        isInvalid
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter Email
                      </Form.Control.Feedback>
                    </InputGroup>
                    <InputGroup className="mb-2" hasValidation>
                      <InputGroup.Text id="password">
                        <FaLock />
                      </InputGroup.Text>
                      <Form.Control
                        name="password"
                        placeholder="password"
                        type={show ? "password" : "text"}
                        value={userData.password}
                        onChange={handleChange}
                        required
                        isInvalid
                      />
                      <Form.Control.Feedback type="invalid">
                        Password must not be less than 8 char
                      </Form.Control.Feedback>
                    </InputGroup>
                    <Form.Check
                      type="switch"
                      id="switch"
                      label="Show Password"
                      onClick={() => {
                        setShow((prev) => !prev);
                      }}
                    />
                    <Form.Check
                      className="mb-4"
                      type="checkbox"
                      onChange={handleChange}
                      label="I agree with Terms and Privacy"
                      ref={checkRef}
                    />
                    <Button
                      className="form-control bg-green mb-3"
                      type="submit"
                    >
                      Sign Up
                    </Button>
                  </Form>
                  <div>
                    <Button
                      className="form-control mb-3"
                      variant="outline-secondary"
                    >
                      {" "}
                      <img src={google} alt="google" className="me-2" />
                      Sign Up with Google
                    </Button>
                    <Button
                      className="form-control mb-3"
                      variant="outline-secondary"
                    >
                      <img src={facebook} alt="facebook" className="me-2" />
                      Sign Up with Facebook
                    </Button>
                  </div>
                  <div className="my-2 text-center">
                    <p className="text-leadn mb-3">
                      Already have an account?{" "}
                      <Link to={"/"} style={{ textDecoration: "none" }}>
                        <span
                          style={{
                            color: "#0b4654",
                          }}
                        >
                          Login
                        </span>
                      </Link>
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <button onClick={openModal}>rrrrrrrrrr</button>
    </div>
  );
};

export default SignUp;
