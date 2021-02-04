import React from "react";
import { Navbar, Nav } from "react-bootstrap"

const Appbar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">          
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="/profile">
              Profile
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Appbar;
