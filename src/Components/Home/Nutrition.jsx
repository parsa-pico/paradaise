import React from "react";
import { Button } from "react-bootstrap";
import food from "../Images/food.jpg";
export default function Nutrition() {
  return (
    <div id="nutrition">
      <h1>Ernährung ( Nutrition)</h1>
      <section className="nutrition__content">
        <p className="nutrition__caption">
          Regardless of your fitness level or ultimate goal, this guide will
          teach you how to fill your plate with the right food so that you’ll be
          able to hit the ground running again tomorrow.
        </p>
        <img className=" nutrition__img" src={food} alt="" />
        <p className="nutrition__caption">
          Optimizing your nutrition for fitness may seem complicated (and
          sometimes it is), but learning the basics is surprisingly simple and
          worth your time. What you eat and when you eat it can make an
          unbelievable difference in all aspects of your physical performance.
        </p>
      </section>
      {/* <Button className="mt-5">WEBLOG</Button> */}
    </div>
  );
}
