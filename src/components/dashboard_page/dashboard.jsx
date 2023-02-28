import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "../../css/dashboard_page/dashboard.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  let [Formname, setname] = useState("");
  let [status, setStatus] = useState("New");
  const [image, setImage] = useState([]);
  let ourimages = [];

  let baseUrl = "http://localhost:5000/newcars";
  let baseUrl1 = "http://localhost:5000/usedcars";
  let navigate = useNavigate();
  let formData = new FormData();
  const [formValue, setFormValue] = useState({
    name: "",
    model: "",
    transmission: "",
    motor: 0,
    color: "",
    price: 0,
    year: 0,
    distance: 0,
  });

  const getFormValues = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const nameInputChangeHandler = (event) => {
    setname(event.target.value);
  };

  const handleChange = (e) => {
    console.log(e.target.files);
    for (let i = 0; i < e.target.files.length; i++) {
      formData.append("image", e.target.files[i]);
      console.log(e.target.files[i]);
    }
  };
  const statusHandler = (event) => {
    setStatus(event.target.value);
  };

  const formSubissionHandler = (event) => {
    event.preventDefault();

    if (status === "New") {
      formData.append("name", formValue.name);
      formData.append("model", formValue.model);
      formData.append("transmission", formValue.transmission);
      formData.append("motor", formValue.motor);
      formData.append("color", formValue.color);
      formData.append("price", formValue.price);

      axios
        .post(baseUrl, formData)
        .then((res) => {})
        .catch((err) => {
          console.log(err);
        });
      for (var key of formData.entries()) {
        console.log(key[0] + ", " + key[1]);
      }
      // navigate("/admin");
    }
    if (status === "Used") {
      formData.append("name", formValue.name);
      formData.append("model", formValue.model);
      formData.append("transmission", formValue.transmission);
      formData.append("motor", formValue.motor);
      formData.append("color", formValue.color);
      formData.append("price", formValue.price);
      formData.append("year", formValue.year);
      formData.append("distance", formValue.distance);
      axios
        .post(baseUrl1, formData)
        .then((res) => {})
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <div className="container">
        <div className="carForm">
          <form onSubmit={formSubissionHandler}>
            <div className="form-control">
              <input
                type="file"
                name="image"
                onChange={handleChange}
                multiple
              />
              <label htmlFor="newUsed">Status :</label>
              <select name="newUsed" id="newUsed" onChange={statusHandler}>
                <option value="New">New</option>
                <option value="Used">Used</option>
              </select>
              {/* -----------------------NAME---------------------------- */}

              <div>
                <label htmlFor="name">Brand :</label>
                <select
                  name="name"
                  id="selection"
                  onChange={getFormValues}
                  onClick={nameInputChangeHandler}
                >
                  <option value="bmw">BMW</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="hyundai">hundayi</option>
                </select>
                {/* -------------------------MODEL------------------------------ */}
                {Formname === "bmw" && <label htmlFor="name">Model :</label>}
                {Formname === "bmw" && (
                  <select name="model" id="selection" onChange={getFormValues}>
                    <option value="x7">X5</option>
                    <option value="x6">X6</option>
                    <option value="x5">x5</option>
                  </select>
                )}
                {Formname === "mercedes" && (
                  <label htmlFor="name">Model :</label>
                )}
                {Formname === "mercedes" && (
                  <select name="model" id="selection" onChange={getFormValues}>
                    <option value="A-CLASS">A-CLASS</option>
                    <option value="C-CLASS">C-CLASS</option>
                    <option value="E-CLASS">E-CLASS</option>
                  </select>
                )}
                {Formname === "hyundai" && (
                  <label htmlFor="name">Model :</label>
                )}
                {Formname === "hyundai" && (
                  <select name="model" id="selection" onChange={getFormValues}>
                    <option value="Elantra">Elantra</option>
                    <option value="Tocsan">Tocsan</option>
                    <option value="Sonata">Sonata</option>
                  </select>
                )}
                {/* ----------------------------TRANSMISSION------------------------ */}
                <label htmlFor="transmission">Transmission :</label>
                <select
                  name="transmission"
                  id="transmission"
                  onChange={getFormValues}
                >
                  <option value="manual">Manual</option>
                  <option value="Automatic">Automatic</option>
                </select>
                {/* -----------------------------MOTOR--------------------------------- */}
                <label htmlFor="motor">Motor :</label>
                <select name="motor" id="motor" onChange={getFormValues}>
                  <option value="1000">1000</option>
                  <option value="2000">1100</option>
                  <option value="2000">1200</option>
                  <option value="2000">1300</option>
                  <option value="2000">1400</option>
                  <option value="2000">1500</option>
                  <option value="2000">1600</option>
                  <option value="2000">1700</option>
                  <option value="2000">1800</option>
                  <option value="2000">1900</option>
                  <option value="2000">2000</option>
                </select>
                {/* -----------------------------COLOR------------------------------------ */}
                <label htmlFor="color">Color :</label>
                <input type="text" name="color" onChange={getFormValues} />
                {/* --------------------------------PRICE------------------------------------- */}
                <label htmlFor="price">price :</label>
                <input type="text" name="price" onChange={getFormValues} />
              </div>

              {status === "Used" && (
                <div>
                  {/* -----------------------------year------------------------------------ */}
                  <label htmlFor="year">Model Year :</label>
                  <input type="text" name="year" onChange={getFormValues} />

                  {/* -----------------------------kilometers------------------------------------ */}
                  <label htmlFor="Kilometers">Kilometers :</label>
                  <input type="text" name="distance" onChange={getFormValues} />
                </div>
              )}
              <div className="form-actions">
                <button>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
