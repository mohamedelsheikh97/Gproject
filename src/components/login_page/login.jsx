import axios from "axios";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../css/login_page/login.css";

export default function Login() {
  const baseURL="http://localhost:5000/users/login";

  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const [errorValue, seterrorValue] = useState({
    email: "",
    password: "",
  });

  const getFormValues = (e) => {
        
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value); 
  
};
const gologin=(e)=>{
  console.log(formValue);
  axios.post(baseURL,formValue).then(res=>
    {
      // alert(res.data.errors)
     // seterrorValue(res.data.errors)
      console.log(res.data);
    }).catch(err=>{console.log(err);});
  
}
  return (
    <div class="login-container">
      <div class="row login-row">
        <div class="col-md-6 offset-md-3">
          <div class="card my-2">
            <div class="card-body cardbody-color p-lg-5">
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
                  name="email"
                  type="text"
                  class="form-control"
                  id="Username"
                  aria-describedby="emailHelp"
                  placeholder="User Name"
                  onChange={getFormValues}
                />
              </div>
              <div class="mb-3 input-1">
                <input
                  name="password"
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="password"
                  onChange={getFormValues}
                />
              </div>
              <div class="text-center input-1">
                <button onClick={gologin} class="btn btn-color px-5 mb-5 w-100">
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
              {/* <div className="text-danger text-center">{errorValue.email + errorValue.password}</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
