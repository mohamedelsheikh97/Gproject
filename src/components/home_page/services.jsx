import React from "react";
import "../../css/home_page/services.css";
import { Link } from "react-router-dom";

export default function Servives() {
  return (
    <section className="services" id="services">
      <div className="container">
        <h1 class="display-4 text-uppercase text-center">Our Services</h1>
        <div className="box-container row">
          <div className="box col-lg-3 mx-2">
            <div>
              <i className="fas fa-car"></i>
            </div>
            <h4>CAR SELLING</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Corporis, nisi.
            </p>
            <button className="button-5">
              <Link className="nav-link" to="/cars">
                Read More
              </Link>
            </button>
          </div>

          <div className="box col-lg-3 mx-2">
            <div>
              <i className="fas fa-tools"></i>
            </div>
            <h4>PARTS REPAIR </h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Corporis, nisi.
            </p>
            <button className="button-5">Read More</button>
          </div>
          <div className="box col-lg-3 mx-2">
            <div>
              <i className="fas fa-headset"></i>
            </div>
            <h4>24/7 SUPPORT</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Corporis, nisi.
            </p>
            <button className="button-5">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
}
