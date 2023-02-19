import React from "react";
import { Button, Image } from "react-bootstrap";
import picture1 from "../Images/IMG_6881-square.jpg";
import picture2 from "../Images/IMG_9742.jpg";
export default function AboutMe() {
  return (
    <div id="about-me-wrapper">
      <section className="about-me ">
        <article className="about-me__text ">
          <h2 className="about-me__heading">Über mich</h2>
          <p className="about-me__caption">
            Seit ich 4 Jahre alt bin, bin ich ein Athlet und habe in so vielen
            verschiedenen Sportarten an Wettkämpfen teilgenommen. Ich habe jede
            einzelne Sportart ausprobiert, die man sich vorstellen kann. Nach 10
            Jahren Tätigkeit als Coach musste ich für mich eine große
            Entscheidung treffen: Ich beschloss, mein Leben der Aufgabe zu
            widmen, Menschen zu unterrichten, ihnen Hilfestellungen für eine
            bewusste Ernährung zu geben und sie stärker zu machen. Als ich mich
            auf diesen neuen Weg voller Herausforderungen begab, wurde mir
            erstmals klar, wo meine sportlichen Defizite im Vergleich zu meinen
            Kommilitonen lagen, die fast alle aus dem Leistungssport kamen. Dies
            war eine großartige Gelegenheit, um zu erkennen, wo ich jetzt bin
            und wo ich sein möchte. Ich konzentriere mich auf das, was ich kann,
            und arbeite an meinen Schwächen. Durch meinen Werdegang und meine
            Erfahrung kann ich besonders nachdrücklich auf die Ziele meiner
            Mandanten eingehen und unter Berücksichtigung ihrer Lebensumstände
            die bestmögliche Lösung finden. Denn Personal Training ist so viel
            mehr als die richtige Form beim Kniebeugen (die übrigens nicht
            vernachlässigt werden sollte 😉
            <br />
            In einer Serie gibt es eine Arztfigur namens :Max, die immer fragt:
            <b> Wie kann ich helfen?</b>
          </p>
          <br />
          <h2 className="about-me__last-heading">
            So,Wie kann ich dir helfen?
          </h2>
          <Button
            href="http://www.instagram.com/paradiseforoozmand"
            target="blank"
            className="about-me__btn"
          >
            Instagram
          </Button>
        </article>
        <div>
          <img className=" about-me__img" src={picture1} alt="" />
        </div>
      </section>
      <section className="about-me bg-white  ">
        <article
          style={{ paddingTop: "2rem" }}
          className="about-me__text  text-black my-order-1  "
        >
          <h2 className="about-me__heading">About Me</h2>
          <p className="about-me__caption">
            Since I was 4 years old I have been an athlete and competing in so
            many different sports. I have tried every single sport that you can
            imagine. After 10 years of working as a coach, I had to make a big
            decision for myself: I decided to devote my life to teach people,
            giving them some help for conscious nutrition and making them
            stronger. When I embarked on this new path full of challenges, it
            became clear to me for the first time where my sporting deficits lay
            compared to my fellow students, almost all of whom came from
            competitive sports. This was a great opportunity to realize where I
            am now and where I want to be. Focusing on what I can do and working
            on my weaknesses. Through my career and experience, I can respond
            particularly emphatically to the goals of my clients and find the
            best possible solution, taking their living conditions into account.
            Because personal training is so much more than the right form when
            squatting (which, by the way, shouldn’t be neglected 😉
            <br />
            there is a doctor character in a series, called :Max and ask always
            :<b> How can i help</b>
          </p>
          <br />
          <h2 className="about-me__last-heading">So How can I help?</h2>
          <Button
            href="http://www.instagram.com/paradiseforoozmand"
            target="blank"
            className="about-me__btn"
          >
            Instagram
          </Button>
        </article>
        <div>
          <img className=" about-me__img" src={picture2} alt="" />
        </div>
      </section>
    </div>
  );
}
