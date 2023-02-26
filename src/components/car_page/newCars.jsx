import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../css/car_page/newcars.css";
import { NavLink } from "react-router-dom";

export default function NewCars() {
  let baseURL = "http://localhost:5000/newcars";
  let [cars, setcars] = useState([]);
  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setcars(response.data);
        console.log(response.data);
        console.log(response.data[0].image[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div class="container-fluid">
      <div class="container pt-1 pb-1">
        <h1 class="display-4 text-uppercase text-center mb-5">
          New Cars{" "}
          <button class="btn btn-warning m-2 px-2 cardet">
            {" "}
            <NavLink to="/newcars">Browse More </NavLink>
          </button>
        </h1>
        <div class="row">
          {cars.map((card) => {
            return (
              <div class="col-lg-4 col-md-6 mb-2">
                <div class="rent-item mb-4">
                  <img
                    class="img-fluid mb-4"
                    src={`http://localhost:5000/${card.image}`}
                    alt=""
                  />
                  <h4 class="text-uppercase mb-4">{`${card.name} ${card.model}`}</h4>
                  <div class="d-flex justify-content-center mb-4">
                    <div class="px-2">
                      <i class="fa fa-car text-warning mr-1"></i>
                      <span>{card.year}</span>
                    </div>
                    <div class="px-2 border-left">
                      <i class="fa fa-cogs text-warning mr-1"></i>
                      <span>${card.transmission}</span>
                    </div>
                    <div class="px-2 border-left">
                      <i class="fa fa-solid fa-credit-card text-warning mr-1"></i>
                      <span>EG {card.price}</span>
                    </div>
                  </div>
                  <a class="btn btn-warning px-3 car-d" href="">
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
