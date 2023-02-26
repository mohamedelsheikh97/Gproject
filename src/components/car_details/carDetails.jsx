import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../css/car_details/carDetails.css";
import Details from "./details";
import { NavLink } from "react-router-dom";

export default function CarDetails() {
  const baseURL = "http://localhost:5000/newcars";
  const carsURL = "http://localhost:5000/newcars/";
  const id = "63f957883afcbccd71a5ef78";
  const [imgs, setimgs] = useState([]);
  const [car, setcar] = useState({});
  const [nextcars, setnextcars] = useState([]);
  const [wordData, setWordData] = useState("");
  const handleClick = (index) => {
    setWordData(imgs[index]);
  };

  useEffect(() => {
    axios.get(`${baseURL}/${id}`).then((res) => {
      setcar(res.data);
      setimgs(res.data.image);
    });
    axios
      .get(carsURL)
      .then((res) => {
        console.log(res.data);
        setnextcars(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setWordData(imgs[0]);
    console.log(car);
  }, [imgs]);
  return (
    <div className="container">
      <div className="d-flex flex-md-row flex-column justify-content-between mm ">
        {" "}
        <h3 class="">{car.name} </h3>
        <hr />
        <NavLink to="/carshop">
          {" "}
          <img
            src={`http://localhost:5000/${car.owner?.image}`}
            width={"150px"}
            className="d-flex "
          />
        </NavLink>
      </div>
      <div className="row">
        <div className="main col-7 no">
          <img src={`http://localhost:5000/${wordData}`} className="p" />
          <div className="flex_row">
            {imgs.map((data, i) => {
              return (
                <div className="thumbnail" key={i}>
                  <img
                    // className={wordData.id == i ? "clicked" : ""}
                    id="po"
                    src={`http://localhost:5000/${data}`}
                    onClick={() => handleClick(i)}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-5">
          <Details car={car}> </Details>
        </div>
        <h3 className="text-"> Related cars</h3>
      </div>
      <div class="row">
        {nextcars.map((car) => {
          return (
              <div className="col-4">
                <div class="wrapper  ">
                  <div class="card front-face">
                    <img
                    src={`http://localhost:5000/${car.image[0]}`}
                     
                     alt="Flip Card"
                    />
                  </div>
                  <div class="card back-face">
                    <img
                    src={`http://localhost:5000/${car.owner?.image}`}
                    
                    alt="Flip Card"
                    />
                    <div class="info">
                      <div class="title">{car.name}</div>
                      <h4> 2023 </h4> <br />
                      <br />
                    </div>
                    <button class="button accept-btn" >More Details</button>
                    <br /> <br />
                    <ul>
                      <a href="#">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-youtube"></i>
                      </a>
                    </ul>
                  </div>
                </div>
              </div>
          );
        })}
      </div>
    </div>
  );
}
