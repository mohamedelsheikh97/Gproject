import React, { useEffect, useState } from "react";
import "../../css/car_page/carCards.css";

const Car = [
  {
    category: "new",
    name: "MERCEDES BENZ R3",
    image: "/car-rent-1.png",
    year: "2020",
    transmission: "auto",
    price: "EG 850.000",
  },
  {
    category: "used",
    name: "BMW X5",
    image: "/car-rent-2.png",
    year: "2021",
    transmission: "auto",
    price: "EG 1.200.000",
  },
  {
    category: "new",
    name: "Audi R8",
    image: "/car-rent-3.png",
    year: "2023",
    transmission: "auto",
    price: "EG 1.100.000",
  },
  {
    category: "used",
    name: "Audi Q3",
    image: "/car-rent-4.png",
    year: "2022",
    transmission: "auto",
    price: "EG 1.300.000",
  },
  {
    category: "new",
    name: "MERCEDES R2",
    image: "/car-rent-5.png",
    year: "2017",
    transmission: "auto",
    price: "EG 1.750.000",
  },
  {
    category: "used",
    name: "Audi RS7",
    image: "/car-rent-6.png",
    year: "2018",
    transmission: "auto",
    price: "EG 1.950.000",
  },
];

export default function CarCards() {
  const [cars, setCars] = useState(Car);

  const filterItem = (categItem) => {
    const updatedItems = Car.filter((curElem) => {
      return curElem.category === categItem;
    });
    setCars(updatedItems);
  };
  return (
    <div class="container-fluid">
      <div class="container pt-1 pb-1">
        <h1 class="display-4 text-uppercase text-center mb-5">Find Your Car</h1>
        <div class="btns mt-1 mb-5 d-flex justify-content-center">
          <button class="btn btn-warning m-1 px-3" onClick={() => setCars(Car)}>
            All
          </button>
          <button
            class="btn btn-warning m-1 px-3"
            onClick={() => filterItem("new")}
          >
            New
          </button>
          <button
            class="btn btn-warning m-1 px-3"
            onClick={() => filterItem("used")}
          >
            Used
          </button>
        </div>
        <div class="row">
          {cars.map((item) => {
            const { name, image, year, transmission, price } = item;
            return (
              <div class="col-lg-4 col-md-6 mb-2">
                <div class="rent-item mb-4">
                  <img class="img-fluid mb-4" src={image} alt="" />
                  <h4 class="text-uppercase mb-4">{name}</h4>
                  <div class="d-flex justify-content-center mb-4">
                    <div class="px-2">
                      <i class="fa fa-car text-warning mr-1"></i>
                      <span>{year}</span>
                    </div>
                    <div class="px-2 border-left">
                      <i class="fa fa-cogs text-warning mr-1"></i>
                      <span>{transmission}</span>
                    </div>
                    <div class="px-2 border-left">
                      <i class="fa fa-solid fa-credit-card text-warning mr-1"></i>
                      <span>{price}</span>
                    </div>
                  </div>
                  <a class="btn btn-warning px-3" href="">
                    CAR DETAILS
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
