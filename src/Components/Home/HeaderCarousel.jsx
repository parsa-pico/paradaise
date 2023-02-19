import React, { useState, useEffect } from "react";
import { Button, Carousel } from "react-bootstrap";
import item1 from "../Images/IMG_7231.jpg";
import item2 from "../Images/JSK_9399-scaled.jpg";
export default function HeaderCarousel() {
  const [index, setIndex] = useState(0);
  // IMPORTANT: if you added new pics,update this number
  const lastPictureIndex = 1;
  useEffect(() => {
    setTimeout(() => {
      if (index === lastPictureIndex) setIndex(0);
      else setIndex(index + 1);
    }, 3000);
  }, [index]);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div id="header-carousel">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="relative"
        fade
        interval={null}
      >
        <Carousel.Item>
          <img
            className="d-block w-100 header__img"
            src={item1}
            alt="First slide"
          />
          <Carousel.Caption className=" header__caption">
            <h1>
              personal <br /> traning with <br /> paradise <br />
              <Button className="header__btn">READ MORE</Button>
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 header__img"
            src={item2}
            alt="second slide"
          />
          <Carousel.Caption className="absolute header__caption header__caption--second">
            <h1>
              personal <br /> traning with <br /> paradise
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
