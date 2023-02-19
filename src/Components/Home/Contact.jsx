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
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100010673524514"
            className="my-icon my-icon--facebook"
          ></a>
          <a
            target="_blank"
            href="https://t.me/pardisforooz"
            className="my-icon my-icon--telegram"
          ></a>
          <a
            target="_blank"
            href="https://wa.me/49176%2087857094"
            className="my-icon my-icon--whatsapp"
          ></a>
          <a
            href="https://instagram.com/paradiseforoozmand/"
            className="my-icon my-icon--instagram"
            target="_blank"
          ></a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/pardis-foroozmand-338ab0105/"
            className="my-icon my-icon--linkedin"
          ></a>
        </div>
        <div className="contact__details">
          <div>
            <a href="tel:+4917687857094">+49 176 87857094</a>
          </div>

          <div>
            <a href="mailto:pardis_foroozmand@yahoo.com">
              pardis_foroozmand@yahoo.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
