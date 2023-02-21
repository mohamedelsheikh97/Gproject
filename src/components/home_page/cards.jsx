import Card from "react-bootstrap/Card";
import React, { useEffect, useState } from "react";
import "../../css/home_page/cards.css";
import axios from "axios";

export function Cards() {
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
    <div className="featured mt-5">
      <div className="container">
        <h5> Featured cars</h5>
        <div className="row ">
          {cars.map((card) => {
            return (
              <Card className="cardItem col-lg-4 col-mg-6 col-sm-12 g-2 mx-2">
                <Card.Img
                  variant="top"
                  src={`http://localhost:5000/${card.image}`}
                />
                <Card.Body>
                  <Card.Title>{`${card.name} ${card.model}`}</Card.Title>
                  <div className="provider d-flex align-items-center">
                    <img
                      src={`http://localhost:5000/${card.owner.image}`}
                      alt=""
                    />
                    <div className="m-2">
                      <p className="m-0">{card.owner.name}</p>
                      <span>seller</span>
                    </div>
                  </div>
                  <div className=" d-flex align-items-center justify-content-between">
                    <p className="m-0">${card.price}</p>
                    <button className="button-5">Details</button>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
