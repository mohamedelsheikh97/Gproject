import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/login_page/login.css";

export default function Login() {
  return (
    <div class="login-container">
      <div class="row login-row">
        <div class="col-md-6 offset-md-3">
          <div class="card my-2">
            <form class="card-body cardbody-color p-lg-5">
              <div class="text-center">
                <img
                  src="/login.png"
                  class="img-fluid profile-image-pic img-thumbnail rounded-circle my-2"
                  width="200px"
                  alt="profile"
                />
              </div>

              <div class="mb-3 input-1">
                <input
                  type="text"
                  class="form-control"
                  id="Username"
                  aria-describedby="emailHelp"
                  placeholder="User Name"
                />
              </div>
              <div class="mb-3 input-1">
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="password"
                />
              </div>
              <div class="text-center input-1">
                <button type="submit" class="btn btn-color px-5 mb-5 w-100">
                  Login
                </button>
              </div>
              <div id="emailHelp" class="form-text text-center mb-5 text-dark">
                Not Registered?{" "}
                <a class="text-dark fw-bold">
                  {" "}
                  <NavLink class="c-a" to="/register">
                    Create an Account
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
