import React from "react";
import "../css/cars.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import CarSlider from "./carSlider";
import CarListing from "./carListing";
import CarCard from "./carCard";

export default function Cars() {
  return (
    <>
      <CarListing></CarListing>
      <CarCard></CarCard>
    </>
  );
}
