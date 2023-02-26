import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/login_page/login.css";

export default function Login() {
  return (
    <section className="register-section flex-center">
      <div className="register-container flex-center">
        <h1 class="display-4 text-uppercase text-center">Login </h1>
        <form className="register-form">
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
          <button type="submit" className="btn form-btn">
            Sign In
          </button>
        </form>
        <p>
          Not a user?{" "}
          <NavLink className="login-link" to={"/register"}>
            Register
          </NavLink>
        </p>
      </div>
    </section>
  );
}
