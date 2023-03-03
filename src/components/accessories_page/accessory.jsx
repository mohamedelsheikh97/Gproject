import React, { useEffect, useState } from "react";
import "./accessories.css";
import axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";
import { Container } from "reactstrap";

import { Link, NavLink } from "react-router-dom";

export default function Accessory() {
  let baseURL = "http://localhost:5000/accessories";
  let [accessories, setaccessories] = useState([]);
  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setaccessories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  let navigate = useNavigate();
  const sliderClick = (accessoryID) => {
    navigate(`/accessorydetails/${accessoryID}`);
  };

  return (
    <div className="featured mt-1">
      <section className="common__section ">
        <Container className="text-center">
          <h1 class="display-4 text-uppercase text-center text-light">
            Accessories Listing
          </h1>
        </Container>
      </section>
      <div className="container">
        <div className="filter-top">
          <div className="grid-list-btn"></div>
          <h1 className="text-dark text-uppercase font-weight-bold">
            Featured Accessories
          </h1>
          <div className="dropdown">
            <form
              action="#
        "
            >
              <select name="sort" id="sort">
                <option value="lowest">External</option>
                <option value="highest">Internal</option>
              </select>
            </form>
          </div>
        </div>
        <div className="row ">
          {accessories.map((card) => {
            return (
              <div class="col-lg-4 col-md-6 mb-2">
                <div class="rent-item1 mb-4">
                  <img
                    class="img-fluid mb-4"
                    src={`http://localhost:5000/${card.image}`}
                    alt=""
                  />
                  <h4 class="text-uppercase mb-4">{`${card.name}`}</h4>
                  <hr className="line" />
                  <h5 class="text-uppercase mb-4">{`${card.desc}`}</h5>
                  <hr className="line" />
                  <div class="d-flex justify-content-center mb-4">
                    <div class="card-price px-2">
                      <i class="fa fa-solid fa-credit-card text-warning mr-1"></i>
                      <span class="font-weight-bold">${card.price}</span>
                    </div>
                  </div>
                  <div class="card-color px-2">
                    <i class="fa fa-solid fa fa-usd text-warning mr-1"></i>
                    <span className="acc-color">Color: </span>
                    <span class="font-weight-bold">{card.color}</span>
                  </div>
                  {/* <div className="m-2">
                    <p className="card-name m-0 font-weight-bold">
                      {card.owner?.name}
                    </p>

                    <img
                      src={`http://localhost:5000/${card.owner?.image}`}
                      alt=""
                      width="50px"
                      class="owner-img"
                    />
                  </div> */}
                  <a
                    class="btn btn-warning font-weight-bold"
                    onClick={() => sliderClick(card._id)}
                  >
                    Accessory Details
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
