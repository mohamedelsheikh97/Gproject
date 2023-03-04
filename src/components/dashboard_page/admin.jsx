import Card from "react-bootstrap/Card";
import React, { useEffect, useState } from "react";
import "../../css/dashboard_page/admin.css";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Admin() {
  let baseURL = "http://localhost:5000/newcars";
  let baseURL1 = "http://localhost:5000/usedcars";
  let [newcars, setnewcars] = useState([]);
  let [usedcars, setusedcars] = useState([]);
  let navigate = useNavigate();
  let { id } = useParams();
  // const filteredCars = newcars.filter((car) => {
  //   return car.owner._id === id;
  // });
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
    navigate(`/dashboard/${id}`);
  };

  const deleteCar = (carId) => {
    axios
      .delete(`${baseURL}/${carId}`)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });

    const restCars = newcars.filter((car) => {
      return car._id !== carId;
    });

    setnewcars(restCars);
  };

  const editCar = (carId) => {};

  let filteredCars = newcars.filter((car) => car.owner?._id === id);

  return (
    <section>
      <div class="container-xl">
        <div class="table-responsive">
          <div class="table-wrapper">
            <div class="table-title m-5">
              <div class="row">
                <div class="col-sm-10">
                  <h4>
                    <b>MANAGE CARS</b>
                  </h4>
                </div>
                <div class="col-sm-2">
                  <button class="button addd-btn" onClick={addCar}>
                    <strong> Add Car </strong>
                  </button>
                </div>
              </div>
            </div>
            {filteredCars !== [] && (
              <table class="table-fill mb-5">
                <thead>
                  <tr class="table-r">
                    <th className="wwww">IMAGE</th>
                    <th className="wwww">MODEL</th>
                    <th className="wwww">TRANSMISSION</th>
                    <th className="wwww">PRICE</th>
                    <th className="wwww">MOTOR</th>
                    <th className="wwww">COLOR</th>
                    <th className="wwww">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCars.map((car) => {
                    return (
                      <tr class="center-align car-row">
                        <td className="table-info">
                          <img src={`http://localhost:5000/${car.image}`} />
                        </td>
                        <td className="table-info">
                          {" "}
                          <strong className="car-var">{`${car.name} ${car.model}`}</strong>
                        </td>
                        <td className="table-info">
                          {" "}
                          <strong className="car-var">
                            {" "}
                            {car.transmission}{" "}
                          </strong>
                        </td>
                        <td className="table-info">
                          <strong className="car-var"> {car.price} </strong>
                        </td>
                        <td className="table-info">
                          <strong className="car-var">{car.motor} </strong>
                        </td>
                        <td className="table-info">
                          <strong className="car-var">{car.color} </strong>
                        </td>
                        <td className="table-info">
                          {/* <button
                            type="button"
                            class="btn"
                            onClick={() => editCar(car._id)}
                          >
                            <i class="fa fa-edit edit"></i>
                          </button> */}
                          <button
                            class="button cancel-btn"
                            onClick={() => deleteCar(car._id)}
                          >
                            <strong> Delete </strong>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
            {filteredCars === [] && <h2>You have no cars</h2>}
          </div>
        </div>
      </div>
    </section>
  );
}
