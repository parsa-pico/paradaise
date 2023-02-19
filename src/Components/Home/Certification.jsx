import React from "react";
import { Button } from "react-bootstrap";
import picture from "../Images/IMG_7610-768x1024.jpg";
export default function Certification() {
  return (
    <section id="certification">
      <article className="certification__content">
        <h1 className="certification__heading">Certifications</h1>
        <ul className="certification__list">
          <li className="certification__list-item">
            CrossFit Kids Certificate Seminar{" "}
          </li>
          <li className="certification__list-item">
            Inline skating national and International coaching certification
            (Iran & UK)
          </li>
          <li className="certification__list-item">
            Functional Training Certification{" "}
          </li>
          <li className="certification__list-item">
            Certified personal trainer (A-Lizenz)
          </li>
          <li className="certification__list-item">
            Acro-yoga workshop Attendance certificate
          </li>
        </ul>
        <Button
          target="blank"
          href="https://profis.check24.de/profil/pardis-foroozmand/qjjwgq"
          className="certification__btn"
        >
          Check24
        </Button>
      </article>
      <div>
        <img className="certification__img" src={picture} alt="" />
      </div>
    </section>
  );
}
