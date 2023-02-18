import React, { useEffect } from "react";
import HeaderCarousel from "./HeaderCarousel";
import NavBar from "./NavBar";
import Program from "./Program";

export default function Home() {
  useEffect(() => {
    document.title = "Home - Paradise";
  });
  return (
    <>
      <NavBar />
      <HeaderCarousel />
      <Program />
    </>
  );
}
