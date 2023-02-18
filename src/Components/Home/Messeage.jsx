import React from "react";
import Button from "react-bootstrap/Button";

export default function Messeage() {
  return (
    <div id="messeage">
      <h2 style={{ color: "black" }}>SEND ME A MESSAGE</h2>

      <form className="messeage__form">
        <input placeholder="Your name" type="text" className="my-input" />
        <input placeholder="Your Email" type="text" className="my-input" />
        <input placeholder="Subject" type="text" className="my-input" />
        <textarea
          name=""
          placeholder="Messeage"
          className="my-input"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <Button type="submit">Send your messeage</Button>
      </form>
    </div>
  );
}
