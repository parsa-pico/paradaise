import React, { useEffect } from "react";
import MyServicesContent from "./MyServicesContent";
import Plans from "./Plans";

export default function MyServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <h1>MY SERVICES</h1>
      <Plans />
      <MyServicesContent />
    </div>
  );
}
