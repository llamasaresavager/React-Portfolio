import React from "react";
import Typewriter from "typewriter-effect";
import Carousel from 'react-bootstrap/Carousel';

function Type() {
  return (
    <div style={{height:100, width:"100%"}}>
      <span>
        Targeting technical position at a nonprofit with international reach!
      </span>

      <Carousel nextIcon="" nextLabel="" prevLabel="" prevIcon="" style={{height:100}}>
        <Carousel.Item interval={3000} style={{height:100}}>
          <Carousel.Caption>Developer - Web+IoT</Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={3000} style={{height:100}}>
          <Carousel.Caption>Data Analysis - SQL+NoSQL</Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={3000} style={{height:100}}>
          <Carousel.Caption>Online Marketing</Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Type;
