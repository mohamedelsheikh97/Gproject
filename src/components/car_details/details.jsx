import React from "react";
import "../../css/car_details/details.css";

export default function Details(props) {
  const { car } = props;
  console.log(car);
  console.log(car.owner?.location);
  const x = new Date().getFullYear();
  console.log(x);
  return (
    <div>
      <article class="card car-details label-primary new ">
        <div class="card-body  m">
          <div class="d-flex flex-md-row align-items-md-start align-items-center row">
            <div class="w-100">
              <br />
              <div class="container-fluid fs-5">
                <div class="row rows-cont">
                  <div class="col-8 ">
                    <ul>
                      <li>
                        <i class="fas fa-dollar-sign icon-car"></i>{" "}
                        <strong class="font-weight-bold text-uppercase fs-5">
                          Price:{" "}
                        </strong>{" "}
                        <span class="font-weight-bold text-uppercase fs-5">
                          {car.price} EGP
                        </span>
                      </li>
                      <br />
                      <li>
                        <i class="fas fa-users icon-car"></i>{" "}
                        <strong class="font-weight-bold text-uppercase fs-5">
                          Model:{" "}
                        </strong>{" "}
                        <span class="font-weight-bold text-uppercase fs-5">
                          {car.model}
                        </span>
                      </li>
                      <br />
                      <li>
                        <i class="fas fa-calendar icon-car"></i>{" "}
                        <strong class="font-weight-bold text-uppercase fs-5">
                          Transmission:{" "}
                        </strong>{" "}
                        <span class="font-weight-bold text-uppercase fs-5">
                          {car.transmission}{" "}
                        </span>
                      </li>
                      <br />
                      <li>
                        <i class="fas fa-info-circle icon-car"></i>{" "}
                        <strong class="font-weight-bold text-uppercase fs-5">
                          Motor:{" "}
                        </strong>{" "}
                        <span class="font-weight-bold text-uppercase fs-5">
                          {car.transmission}{" "}
                        </span>
                      </li>
                      <br />
                    </ul>
                  </div>

                  <div class="col-md-6 col-12">
                    <ul>
                      <li>
                        <i class="fas fa-info-circle icon-car"></i>{" "}
                        <strong class="font-weight-bold text-uppercase fs-5">
                          Color:{" "}
                        </strong>{" "}
                        <span class="font-weight-bold text-uppercase fs-5">
                          {car.color}{" "}
                        </span>
                      </li>
                      <br />
                      <li>
                        <i class="fas fa-info-circle icon-car"></i>{" "}
                        <strong class="font-weight-bold text-uppercase fs-5">
                          Year:{" "}
                        </strong>{" "}
                        <span class="font-weight-bold text-uppercase fs-5">
                          {car.year}
                        </span>
                      </li>

                      <div class="google-map"></div>
                    </ul>
                  </div>

                  <div className="col-12 ">
                    <div className="row cols-row">
                      <div class=" ">
                        <button class=" col-5  btn btn-warning bb   ">
                          <i class="fas fa-phone-alt"></i> Call
                        </button>

                        <a
                          className="col-6"
                          href={car.owner?.location}
                          target={"_blank"}
                        >
                          <button class="btn btn-secondary col-5 bb  ">
                            <i class="fas fa-location-arrow"></i>{" "}
                            <strong>Location</strong>{" "}
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
