import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Login/Login.css";
import Nav from "../Navbar/Navbar";
const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const registerData = sessionStorage.getItem("user");
    console.log(registerData);
    // const userInfo = JSON.parse(registerData);
    // setUserData(userInfo);
  }, []);
  console.log(userData);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (userData?.userEmail === userEmail && userData?.password === password) {
      alert("welcome");
    } else {
      alert("Incorrect login details");
    }
  };
  return (
    <div className="login">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="mx-auto">
              <div className="my-5">
                <Nav />
              </div>
              <Card className="shadow" style={{ width: "25rem" }}>
                <Card.Body>
                  <div className="mb-2">
                    {" "}
                    <Form.Label htmlFor="email">Email</Form.Label>
                    <Form.Control
                      type="Email"
                      id="email"
                      value={userEmail}
                      onChange={(event) => setUserEmail(event.target.value)}
                    />
                  </div>
                  <div className="mb-2">
                    <Form.Label htmlFor="password">Password</Form.Label>
                    <Form.Control
                      type="password"
                      id="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </div>
                  <div className="mt-2">
                    <Button
                      className="form-control bg-green mb-3"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Login
                    </Button>
                  </div>
                  <div
                    className="mb-2 d-flex justify-content-between
"
                  >
                    {" "}
                    <Form.Check
                      className="mb-4"
                      type="checkbox"
                      // onChange={handleChange}
                      label="Remember Me"
                      // ref={checkRef}
                    />
                    <Link style={{ textDecoration: "none" }}>
                      <span
                        style={{
                          color: "#769CC1",
                        }}
                      >
                        Forgot Password?
                      </span>
                    </Link>
                  </div>
                  <div className="border"></div>
                  <div className="text-center mt-3">
                    <Link
                      to={"/Signup"}
                      style={{ textDecoration: "none", color: "#769CC1" }}
                    >
                      Register New User?
                    </Link>
                  </div>
                </Card.Body>
              </Card>
              <div className="mt-5">
                <p className="privacy ms-4">
                  &copy; 2022 WestTech, Inc. All rights reserved.|{"  "}
                  <Link className="text-dark">Privacy Policy</Link>
                </p>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <Row>
              <Col>
                <div className="margin-all">
                  {" "}
                  <div className="text-light d-none d-sm-block ">
                    <p className="random-te">
                      Welcome to <span className="fw-bold">WestTech</span>
                    </p>
                    <div className="border"></div>
                    <p className="text">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Adipisci natus sed fuga, doloribus, incidunt sunt tempora
                      eos aperiam, ratione dolore quisquam. Odit dolores labore
                      numquam?
                    </p>
                    <Button variant="outline-light" onClick={handleSubmit}>
                      Read more &rarr;
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
