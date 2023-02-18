import React, { useEffect } from "react";
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
export default function Home() {
  useEffect(() => {
    document.title = "Home - Paradise";
  });
  return (
    <>
      <NavBar />
      <HeaderCarousel />
      <Program />
      <hr />
      <AboutMe />
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
      <Messeage />
      <div className="push" />

      <p className="m-2">copyright © 2022 Paradise</p>
    </>
  );
}
