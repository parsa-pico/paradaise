import React from "react";
import video from "../Videos/traning.mp4";
import videoCompressed from "../Videos/traning-compressed.mp4";
export default function MyServicesContent() {
  return (
    <section id="my-services-content">
      <div>
        <TimeTable />
        <div className="my-services-content-text">
          <h1 style={{ marginBottom: "2rem" }}>I’d Like to Hear From You</h1>
          <p className="my-services-content-caption">
            Got something to share or see something that doesn’t adhere to our
            standards? I want to know! I’m always working to improve my site and
            appreciate feedback.
          </p>
          <a
            className="my-services__email"
            href="mailto:pardis_foroozmand@yahoo.com"
          >
            pardis_foroozmand@yahoo.com
          </a>
        </div>
      </div>
      <div>
        <video className="myservices-content__video" muted autoPlay loop>
          <source src={video} type="video/mp4" />
          <source src={videoCompressed} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
function TimeTable() {
  return (
    <div className="time-table">
      <h4 className="time-table__heading">Time Table</h4>
      <div>
        <p className="time-table__day">Monday - Friday</p>
        <p className="time-table__time">8am - 4pm</p>
        <hr style={{ color: "black" }} />
        <p className="time-table__day">Saturday</p>
        <p className="time-table__time">10am - 2pm</p>
      </div>
    </div>
  );
}
