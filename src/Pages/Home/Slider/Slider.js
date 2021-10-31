import React from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../../images/slider1.jpg";
import slider2 from "../../images/slider2.jpg";
import slider3 from "../../images/slider3.jpg";

const Slider = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={slider1} alt="First slide" />
          <Carousel.Caption>
            <h3>Escorted Tours Of Maldives</h3>
            <p>
              Average rating 5 out of 5 from 505 reviews for Escorted Tours of
              Maldives.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Escorted Tours Of Greece</h3>
            <p>
              For a full list of our escorted tours in Greece with dates and
              prices, please scroll down.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Escorted Tours Of Turkey</h3>
            <p>
              We offer a wide range of escorted tours in Turkey from family
              tours to walking vacations.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
