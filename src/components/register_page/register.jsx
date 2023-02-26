import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/register_page/register.css";

export default function Register() {
  return (
    <section className="register-section1 flex-center">
      <div className="register-container flex-center">
        <h1 class="display-4 text-uppercase text-center">Sign Up</h1>
        <form className="register-form">
          <input
            type="text"
            name="first-name"
            className="form-input"
            placeholder="Enter Your First Name"
          />
          <input
            type="text"
            name="last-name"
            className="form-input"
            placeholder="Enter Your Last Name"
          />
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter Your Email"
          />
          <input
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter Your Password"
          />
          <input
            type="text"
            name="mobile"
            className="form-input"
            placeholder="Enter Your Mobile Number"
          />
          <input
            type="text"
            name="address"
            className="form-input"
            placeholder="Enter Your Address"
          />
          <button type="submit" className="btn form-btn">
            Sign Up
          </button>
        </form>
        <p>
          Already a user?{" "}
          <NavLink className="login-link" to={"/login"}>
            Log in
          </NavLink>
        </p>
      </div>
    </section>
  );
}
