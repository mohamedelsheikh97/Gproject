import React from "react";
import CarListing from "./carListing";
import "../../css/car_page/car_page.css";
import CarCards from "./carCards";
import CarDrive from "./carDrive";
import NewCars from "./newCars";
import UsedCars from "./usedCars";

export default function Cars() {
  return (
    <>
      {/* <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names.." title="Type in a name"></input> */}
      {/* <section>
        <div id="main">
          <div id="d1"></div>
          <div id="d2"></div>
          <div id="d3"></div>
          <div id="d4"></div>
          <div id="d5"></div>
        </div>
      </section> */}
      <CarListing></CarListing>
      <CarCards></CarCards>
      {/* <NewCars></NewCars> */}
      {/* <UsedCars></UsedCars> */}
      <CarDrive></CarDrive>
      {/* <SearchBar></SearchBar> */}
    </>
  );
}
