import React from "react";
import { Button } from "react-bootstrap";
import picture from "../Images/IMG_1109-663x1024.jpg";
export default function Resume() {
  return (
    <section id="resume">
      <article data-aos="fade-right" className="resume__text">
        <h2 className="resume__heading"> Resume</h2>
        <ul className="resume__list">
          <li>Award won for ISTANBUL`s marathon 2018</li>
          <li>Award won for sky race 2018</li>
          <li>Done 1 of Kick Boxing and award won for National Fight 2010</li>
          <li>
            Honored of being National head of Inline Figure Skating Team 2018
          </li>
          <li>Award won for IRAN`s marathon 2019</li>
          <li>Awarded of gold medal in National gymnastics competition 2002</li>
          <li>
            Being an agent of enforcement in running one of the biggest
            international inline skatings in the freestyle section`s
            competition.
          </li>
          <li>Gymnast athlete for 5 years </li>
          <li>inline-skating athlete for 3 years </li>
          <li>volleyball athlete for 4 years </li>
          <li>Junior national swimming league champions</li>
        </ul>
        <Button
          target="blank"
          href="https://www.facebook.com/profile.php?id=100010673524514"
        >
          Facebook
        </Button>
      </article>
      <div data-aos="fade-left" style={{ padding: "2rem" }}>
        <img className="resume__img" src={picture} alt="" />
      </div>
    </section>
  );
}
