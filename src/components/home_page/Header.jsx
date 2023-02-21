import React from "react";
import "../../css/home_page/Header.css";
import CarSlider from "./carSlider";
import { Brands } from "./brands";
import Welcome from "./welcome";
import { Cards } from "./cards";

const Header = () => {
  return (
    <header>
      <CarSlider></CarSlider>
      <Brands></Brands>
      <Welcome></Welcome>
      <Cards></Cards>
    </header>
  );
};

export default Header;
