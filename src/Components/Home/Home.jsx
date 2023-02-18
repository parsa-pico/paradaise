import React, { useEffect } from "react";
import AboutMe from "./AboutMe";
import HeaderCarousel from "./HeaderCarousel";
import NavBar from "./NavBar";
import Program from "./Program";
import customhHr from "../Images/custom-hr.png";
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
    </>
  );
}
