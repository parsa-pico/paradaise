import React, { useEffect } from "react";
import MyServicesContent from "./MyServicesContent";
import Plans from "./Plans";

export default function MyServices() {
  useEffect(() => {
    document.title = "My services - Paradise";
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="my-services-page">
      <h1>MY SERVICES</h1>
      <Plans />
      <MyServicesContent />
    </div>
  );
}
