import React from "react";
import logo from "../Images/logo.jpeg";
export default function Contact() {
  return (
    <section id="contact">
      <div>
        <img className="contact__img" src={logo} alt="" />
      </div>
      <div className="contact__content">
        <div className="contact__icons">
          <a href="#" class="my-icon my-icon--facebook"></a>
          <a href="#" class="my-icon my-icon--telegram"></a>
          <a href="#" class="my-icon my-icon--whatsapp"></a>
          <a href="#" class="my-icon my-icon--instagram"></a>
          <a href="#" class="my-icon my-icon--linkedin"></a>
        </div>
        <div className="contact__details">
          <div>
            <a href="tel:+4917687857094">+49 176 87857094</a>
          </div>

          <div>
            <a href="mailto:info@paradisef.com">info@paradisef.com</a>
          </div>
        </div>
      </div>
    </section>
  );
}
