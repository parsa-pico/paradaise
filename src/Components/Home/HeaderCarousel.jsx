import React from "react";
import { Carousel } from "react-bootstrap";
import item1 from "../Images/IMG_7232-960x720.jpg";
import item2 from "../Images/IMG_6898-960x720.jpg";
export default function HeaderCarousel() {
  return (
    <div>
      <Carousel className="relative" fade>
        <Carousel.Item>
          <img className="d-block w-100" src={item1} alt="First slide" />
          <Carousel.Caption className="absolute header__caption">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={item2} alt="second slide" />
          <Carousel.Caption className="absolute header__caption">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
