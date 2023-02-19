import React, { useEffect, useState } from "react";
import AboutMe from "./AboutMe";
import HeaderCarousel from "./HeaderCarousel";
import NavBar from "./NavBar";
import Program from "./Program";
import customhHr from "../Images/custom-hr.png";
import Services from "./Services";
import Resume from "./Resume";
import Adidas from "./Adidas";
import Nutrition from "./Nutrition";
import Certification from "./Certification";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Messeage from "./Messeage";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { useLocation } from "react-router-dom";
export default function Home() {
  const location = useLocation();

  useEffect(() => {
    document.title = "Home - Paradise";
    const hash = location.hash.replace("#", "");
    if (hash) {
      const element = document.getElementById(hash);
      if (element) element.scrollIntoView({ block: "start" });
    }
  }, []);
  return (
    <div style={{ overflowX: "hidden" }}>
      <HeaderCarousel />
      <Program data-aos="fade-right" />
      <AboutMe data-aos="fade-down" />
      <div className="custom-hr"></div>
      <Services />
      <div className="custom-hr"></div>
      <Resume />
      <Adidas />

      <Nutrition />
      <div className="custom-hr"></div>
      <Certification />
      <Gallery />
      <Contact />
    </div>
  );
}
function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas
        style={{ backgroundColor: "#12111b" }}
        restoreFocus={false}
        scroll
        show={show}
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="nav-mobile upper-case">
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
            </Nav.Link>{" "}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
