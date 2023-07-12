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
            originally from <span className="purple"> Philadelphia, PA.</span>
            <br />
            <br />I am a junior Full Stack Developer with a focus on Large Language Model utilization and integration.
            <br />
            <br />
            My preferred Languages are:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Pythong- 3+ years
            </li>
            <li className="about-activity">
              <ImPointRight /> JavaScript- 2+ years
            </li>
            <li className="about-activity">
              <ImPointRight /> C# ~1 year
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", maxWidth: "480px" }}>
            “You're never given a dream without also being given the power to make it true.”{" "}
          </p>
          <footer className="blockquote-footer">Richard Bach</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
