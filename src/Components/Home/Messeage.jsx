import React from "react";
import Button from "react-bootstrap/Button";

export default function Messeage() {
  return (
    <div id="messeage">
      <h2 style={{ color: "black" }}>SEND ME A MESSAGE</h2>

      <form
        action="https://formspree.io/f/xeqwgaak"
        method="POST"
        className="messeage__form"
      >
        <input
          name="name"
          placeholder="Your name"
          type="text"
          className="my-input"
        />
        <input
          name="email"
          placeholder="Your Email"
          type="text"
          className="my-input"
        />
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          className="my-input"
        />
        <textarea
          name="messeage"
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
