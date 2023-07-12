import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Trevor Hilimire </span>
            originally from <span className="purple"> Philadelphia, PA</span>
            <br />I am a junior pursuing IMSC in Maths and Computing in BIT
            Mesra.
            <br />
            <br />
            Apart from coding, here are some other activities that enjoy!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Building and Tinkering
            </li>
            <li className="about-activity">
              <ImPointRight /> Everything Outdoors
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            “You're never given a dream without also being given the power to make it true.”{" "}
          </p>
          <footer className="blockquote-footer">Richard Bach</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
