import React from "react";
import "../css/cars.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";

const settings = {
  fade: true,
  speed: 2000,
  autoplaySpeed: 3000,
  infinite: true,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: false,
};

export default function CarSlider() {
  return (
    <section className="p-0 hero__slider-section">
      <Slider {...settings} className="hero__slider">
        <div className="slider__item slider__item-01 mt0">
          <Container>
            <div className="slider__content ">
              <h4 className="text-light mb-3">Are You a Classic Driver?</h4>
              <h1 className="text-light mb-4">Buy Your Dream Vehicle Now</h1>
              <button className="btn reserve__btn mt-4">
                <Link to="/cars">Shop Now</Link>
              </button>
            </div>
          </Container>
        </div>
        <div className="slider__item slider__item-02 mt0">
          <Container>
            <div className="slider__content ">
              <h4 className="text-light mb-3">Are You a Classic Driver?</h4>
              <h1 className="text-light mb-4">Buy Your Dream Vehicle Now</h1>
              <button className="btn reserve__btn mt-4">
                <Link to="/cars">Shop Now</Link>
              </button>
            </div>
          </Container>
        </div>
        <div className="slider__item slider__item-03 mt0">
          <Container>
            <div className="slider__content ">
              <h4 className="text-light mb-3">Are You a Classic Driver?</h4>
              <h1 className="text-light mb-4">Buy Your Dream Vehicle Now</h1>
              <button className="btn reserve__btn mt-4">
                <Link to="/cars">Shop Now</Link>
              </button>
            </div>
          </Container>
        </div>
      </Slider>
    </section>
  );
}
