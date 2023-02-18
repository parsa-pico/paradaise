import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import picture1 from "../Images/IMG_0352-1242x750.jpg";
import picture2 from "../Images/family-workout.jpeg";
import picture3 from "../Images/e-fit1-1024x539.jpeg";
import picture4 from "../Images/athlete-traning.jpeg";
export default function Services() {
  return (
    <section id="services">
      <h1 className="text-black">My Services</h1>
      <div className="card-wrapper">
        <Card className="services__card">
          <Card.Img variant="top" src={picture1} />
          <Card.Body style={{ color: "black" }}>
            <Card.Title className="services__card-title">
              private traning at gym
            </Card.Title>
            <Button className="services__card-btn" variant="primary">
              More
            </Button>
          </Card.Body>
        </Card>
        <Card className="services__card">
          <Card.Img variant="top" src={picture2} />
          <Card.Body style={{ color: "black" }}>
            <Card.Title className="services__card-title">
              Home Training
            </Card.Title>
            <Card.Body>(GROUP/FAMILY FITNESS)</Card.Body>
            <Button className="services__card-btn" variant="primary">
              More
            </Button>
          </Card.Body>
        </Card>
        <Card className="services__card">
          <Card.Img variant="top" src={picture3} />
          <Card.Body style={{ color: "black" }}>
            <Card.Title className="services__card-title">
              Online Training
            </Card.Title>
            <Button className="services__card-btn" variant="primary">
              More
            </Button>
          </Card.Body>
        </Card>
        <Card className="services__card">
          <Card.Img variant="top" src={picture4} />
          <Card.Body style={{ color: "black" }}>
            <Card.Title className="services__card-title">
              Athletes Training
            </Card.Title>
            <Button className="services__card-btn" variant="primary">
              More
            </Button>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
}
