import React from "react";
import { Button } from "react-bootstrap";

export default function Plans() {
  return (
    <section id="my-services">
      <div className="big-plan">
        <h4>Private Training at Gym</h4>
        <p>
          1-on-1 personal training is just You and ME. This is the classically
          thought of personal training. I offer 30-minute, 45-minute, and
          60-minute sessions.
        </p>
        <br />
        <p>I would evaluate your :</p>
        <ul style={{ listStyleType: "none", fontSize: "1rem", paddingLeft: 0 }}>
          <li>Evaluating customers’ physical needs</li>
          <li>Assigning appropriate exercise activities</li>
          <li>Track customers’ fitness progress</li>
        </ul>
        <Button>GET INFO</Button>
      </div>
      <div className="small-plan-wrapper">
        <div className="small-plan">
          <h4 className="small-plan__heading">Athletes Training</h4>
          <p>
            A designed platform for the athletes to perform better in their
            specific sports. The program is structured to enhance the endurance
            and the strength in the players in most sports fields, such as :
            boxing, kick boxing, football, basketball, volleyball, roller
            skating, running, ect… .
          </p>
          <Button className="small-plan__btn">GET INFO</Button>
        </div>
        <div className="small-plan small-plan--primary">
          <h4 className="small-plan__heading">Online Training</h4>
          <p>
            Online, in-home personal training is here! You can now work with ME
            through Zoom (similar to Skype) to be able to see and hear your
            trainer and vice versa. The setup is super simple and the software
            works great!
          </p>
          <Button className="small-plan__btn">GET INFO</Button>
        </div>
        <div className="small-plan">
          <h4 className="small-plan__heading">Home Training</h4>
          <h6>(GROUP/FAMILY FITNESS)</h6>
          <p>
            Personal Trainers at Home teaches large and small group fitness! In
            private parties, each individual pays per class. If you are a local
            company wanting to provide classes for your employees or residents,
            I would charge a flat rate based on class length.
          </p>
          <Button className="small-plan__btn">GET INFO</Button>
        </div>
      </div>
    </section>
  );
}
