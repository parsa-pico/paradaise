import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../Images/logo.jpeg";
export default function NavBar() {
  const [show, setShow] = useState(false);
  const expand = "md";
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="my-nav">
      <Navbar variant="dark" expand={expand}>
        <Container fluid>
          <Navbar.Brand href="#">
            <img className="logo" src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                className="upper-case"
                id={`offcanvasNavbarLabel-expand-${expand}`}
              >
                menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="my-nav">
              <Nav className="justify-content-end flex-grow-1 pe-3  upper-case">
                <Nav.Link className="nav-link" href="#action1">
                  start
                </Nav.Link>
                <Nav.Link className="nav-link" href="#action2">
                  training
                </Nav.Link>
                <Nav.Link className="nav-link" href="#action2">
                  about me
                </Nav.Link>
                <Nav.Link className="nav-link" href="#action2">
                  my services
                </Nav.Link>
                <Nav.Link className="nav-link" href="#action2">
                  gallery
                </Nav.Link>
                <Nav.Link className="nav-link" href="#action2">
                  weblog
                </Nav.Link>
                <Nav.Link className="nav-link" href="#action2">
                  contact
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}
