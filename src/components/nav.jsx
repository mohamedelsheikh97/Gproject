import React from 'react';
import { Navbar,Nav,Container } from 'react-bootstrap';
import '../css/Navs.css'
import { RxAvatar } from 'react-icons/rx';
import {IoCarSportSharp} from 'react-icons/io5'

const Navs = () => {
  return (
    <Navbar bg="light" expand="lg" sticky='top' fixed='top'>
      <Container>
        <Navbar.Brand href="#home" className='logoo'> <IoCarSportSharp  className='icon'/> Kalaks.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Cars</Nav.Link>
            <Nav.Link href="#link">Accessoires</Nav.Link>
            <Nav.Link href="#link">Schools</Nav.Link>
            <Nav.Link href="#link">Maintenance</Nav.Link>
            </Nav>
            <hr />
            <Nav>
            <Nav.Link id='lastnav'  href="#link">  SIGN UP</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navs;
