import Card from "react-bootstrap/Card";
import React, { useEffect, useState } from "react";
// import "../../css/dashboard_page/admin.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Admin() {
  let baseURL = "http://localhost:5000/newcars";
  let baseURL1 = "http://localhost:5000/usedcars";
  let [newcars, setnewcars] = useState([]);
  let [usedcars, setusedcars] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setnewcars(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get(baseURL1)
      .then((response) => {
        setusedcars(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addCar = () => {
    navigate("/dashboard");
  };

  const deleteCar = (carId) => {
    axios
      .delete(`${baseURL}/${carId}`)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section>
      <div class="container-xl">
        <div class="table-responsive">
          <div class="table-wrapper">
            <div class="table-title">
              <div class="row">
                <div class="col-sm-6">
                  <h4>
                    <b>Manage Cars</b>
                  </h4>
                </div>
                <div class="col-sm-6">
                  <button class="btn btn-success" onClick={addCar}>
                    <i class="fas fa-plus-circle"></i>
                    <span>Add Product</span>
                  </button>
                </div>
              </div>
            </div>
            <table class="table table-striped table-hover table-bordered table-content">
              <thead>
                <tr class="center-align">
                  <th>Image</th>
                  <th>Name</th>
                  <th>transmission</th>
                  <th>Price</th>
                  <th>motor</th>
                  <th>color</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {newcars.map((car) => {
                  return (
                    <tr class="center-align car-row">
                      <td>
                        <img src={`http://localhost:5000/${car.image}`} />
                      </td>
                      <td>{`${car.name} ${car.model}`}</td>
                      <td>{car.transmission}</td>
                      <td>{car.price}</td>
                      <td>{car.motor}</td>
                      <td>{car.color}</td>
                      <td>
                        <a href="#" class="btn">
                          <i class="fa fa-edit edit"></i>
                        </a>
                        <button
                          type="button"
                          class="btn"
                          onClick={deleteCar(car._id)}
                        >
                          <i class="fas fa-trash-alt delete"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
