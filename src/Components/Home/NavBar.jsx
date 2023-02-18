import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    function updatePosition() {
      if (window.scrollY > 100 && window.innerWidth > 1024) {
        document.getElementById("logo").style.height = "50px";
      } else if (window.scrollY > 100 && window.innerWidth < 1024) {
        document.getElementById("logo").style.height = "30px";
      } else if (window.scrollY < 5 && window.innerWidth > 1024)
        document.getElementById("logo").style.height = "150px";
      else if (window.scrollY < 5 && window.innerWidth < 1024)
        document.getElementById("logo").style.height = "50px";
    }

    window.addEventListener("scroll", updatePosition);
    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return (
    <div className="my-nav">
      <Navbar variant="dark" expand={expand}>
        <Container fluid>
          <Navbar.Brand href="#">
            <img id="logo" src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              {/* <Offcanvas.Title
                className="upper-case"
                id={`offcanvasNavbarLabel-expand-${expand}`}
                style={{ color: "black" }}
              >
                menu
              </Offcanvas.Title> */}
            </Offcanvas.Header>
            <Offcanvas.Body className="my-nav">
              <Nav className="justify-content-end flex-grow-1 pe-3  upper-case">
                <Nav.Link className="nav-link " href="#top">
                  start
                </Nav.Link>
                <Nav.Link className="nav-link" href="#program">
                  training
                </Nav.Link>
                <Nav.Link className="nav-link" href="#about-me-wrapper">
                  about me
                </Nav.Link>
                <Nav.Link className="nav-link" href="#services">
                  my services
                </Nav.Link>
                <Nav.Link className="nav-link" href="#gallery">
                  gallery
                </Nav.Link>
                {/* <Nav.Link className="nav-link" href="#action2">
                  weblog
                </Nav.Link> */}
                <Nav.Link className="nav-link" href="#contact">
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
