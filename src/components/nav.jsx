import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../css/Navs.css";
import { RxAvatar } from "react-icons/rx";
import { IoCarSportSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navs = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top" fixed="top">
      <Container>
        <Navbar.Brand href="#home" className="logoo">
          {" "}
          <IoCarSportSharp className="icon" /> Kalaks.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/cars">
              Cars
            </NavLink>
            <NavLink className="nav-link" to="/accessories">
              Accessories
            </NavLink>
            <NavLink className="nav-link" to="/schools">
              Schools
            </NavLink>
            <NavLink className="nav-link" to="/maintenance">
              Maintenance
            </NavLink>
          </Nav>
          <hr />
          <Nav>
            <Nav.Link id="lastnav" href="#link">
              {" "}
              SIGN UP
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navs;
