import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../Images/logo.jpeg";
import { useLocation, useNavigate } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
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
  function navigateTo(hash) {
    if (location.pathname === "/") {
      const element = document.getElementById(hash);

      element.scrollIntoView({ block: "start" });
    } else navigate(`/#${hash}`);
    setTimeout(() => {
      setShow(false);
    }, 1000);
  }
  return (
    <div className="my-nav">
      <Navbar variant="dark" expanded={show} expand={expand}>
        <Container fluid>
          <Navbar.Brand href="#">
            <img id="logo" src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={() => setShow(!show)}
            aria-controls={`offcanvasNavbar-expand-${expand}`}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body className="my-nav">
              <Nav className="justify-content-end flex-grow-1 pe-3  upper-case">
                <Nav.Link
                  className="nav-link "
                  onClick={() => navigateTo("header-carousel")}
                >
                  start
                </Nav.Link>
                <Nav.Link
                  className="nav-link"
                  onClick={() => navigateTo("program")}
                >
                  training
                </Nav.Link>
                <Nav.Link
                  className="nav-link"
                  onClick={() => navigateTo("about-me-wrapper")}
                >
                  about me
                </Nav.Link>
                <Nav.Link
                  className="nav-link"
                  onClick={() => navigateTo("services")}
                >
                  my services
                </Nav.Link>
                <Nav.Link
                  className="nav-link"
                  onClick={() => navigateTo("gallery")}
                >
                  gallery
                </Nav.Link>
                {/* <Nav.Link className="nav-link" href="#action2">
                    weblog
                  </Nav.Link> */}
                <Nav.Link
                  className="nav-link"
                  onClick={() => navigateTo("contact")}
                >
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
