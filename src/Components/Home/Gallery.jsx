import React from "react";
import Carousel from "react-multi-carousel";
import picture1 from "../Images/gallery/1.jpg";
import picture2 from "../Images/gallery/2.jpg";
import picture3 from "../Images/gallery/3.jpg";
import picture4 from "../Images/gallery/4.jpg";
import picture5 from "../Images/gallery/5.jpg";
import picture6 from "../Images/gallery/6.jpg";
import picture7 from "../Images/gallery/7.jpg";
import picture8 from "../Images/gallery/8.jpg";
import picture9 from "../Images/gallery/9.jpg";
import picture10 from "../Images/gallery/10.jpg";
export default function Gallery() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section id="gallery">
      <h1 className="gallery__heading">Gallery</h1>
      <Carousel infinite responsive={responsive}>
        <div>
          <img className="img-fluid gallery_img" src={picture1} alt="" />
        </div>
        <div>
          <img className="img-fluid gallery_img" src={picture2} alt="" />
        </div>
        <div>
          <img className="img-fluid gallery_img" src={picture3} alt="" />
        </div>
        <div>
          <img className="img-fluid gallery_img" src={picture4} alt="" />
        </div>
        <div>
          <img className="img-fluid gallery_img" src={picture5} alt="" />
        </div>
        <div>
          <img className="img-fluid gallery_img" src={picture6} alt="" />
        </div>
        <div>
          <img className="img-fluid gallery_img" src={picture7} alt="" />
        </div>
        <div>
          <img className="img-fluid gallery_img" src={picture8} alt="" />
        </div>
        <div>
          <img className="img-fluid gallery_img" src={picture9} alt="" />
        </div>
      </Carousel>
    </section>
  );
}
