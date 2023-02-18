import React from "react";
import { Carousel } from "react-bootstrap";
import item1 from "../Images/IMG_7231.jpg";
import item2 from "../Images/JSK_9399-scaled.jpg";
export default function HeaderCarousel() {
  return (
    <div id="header-carousel">
      <Carousel className="relative" fade>
        <Carousel.Item>
          <img
            className="d-block w-100 header__img"
            src={item1}
            alt="First slide"
          />
          <Carousel.Caption className="absolute header__caption">
            <h1>personal traning with paradise</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 header__img"
            src={item2}
            alt="second slide"
          />
          <Carousel.Caption className="absolute header__caption header__caption--second">
            <h1>personal traning with paradise</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
