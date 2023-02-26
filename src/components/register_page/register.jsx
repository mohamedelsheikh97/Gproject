import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/register_page/register.css";

export default function Register() {
  return (
    <div class="login-container">
      <div class="row login-row">
        <div class="col-md-6 offset-md-3">
          <div class="card my-2">
            <form class="card-body cardbody-color p-lg-5">
              <div class="text-center">
                <img
                  src="/sign.png"
                  class="img-fluid profile-image-pic img-thumbnail rounded-circle my-2"
                  width="200px"
                  alt="profile"
                />
              </div>

              <div class="mb-3 input-1">
                <input
                  type="text"
                  class="form-control"
                  id="FirstName"
                  aria-describedby="emailHelp"
                  placeholder="First Name"
                />
              </div>
              <div class="mb-3 input-1">
                <input
                  type="text"
                  class="form-control"
                  id="LastName"
                  placeholder="Last Name"
                />
              </div>
              <div class="mb-3 input-1">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div class="mb-3 input-1">
                <input
                  type="text"
                  class="form-control"
                  id="Address"
                  placeholder="Address"
                />
              </div>
              <div class="mb-3 input-1">
                <input
                  type="text"
                  class="form-control"
                  id="phone"
                  placeholder="Phone Number"
                />
              </div>
              <div class="text-center input-1">
                <button type="submit" class="btn btn-color px-5 mb-5 w-100">
                  Register
                </button>
              </div>
              <div id="emailHelp" class="form-text text-center mb-5 text-dark">
                Have Account?{" "}
                <a href="#" class="text-dark fw-bold">
                  {" "}
                  <NavLink class="c-a" to="/login">
                    Login
                  </NavLink>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
