import React from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from "../../img/logo.png";
const Nav = () => {
  return (
    <Navbar variant="light" className="fw-bold nav-text">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          <h2 className="d-inline fw-bold" style={{ color: "#01f2128" }}>
            WestTech
          </h2>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Nav;
