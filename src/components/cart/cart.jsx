import React, { useEffect, useState } from "react";
import "../../css/home_page/cards.css";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import { useNavigate, Navigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "../../css/cart/cart.css";
import { BsArrowLeft } from "react-icons/bs";

export function Cart() {
  let baseURL = "http://localhost:5000/cart";
  let [mycart, setmycart] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setmycart(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const removeFromCart = (cartId) => {
    axios
      .delete(`${baseURL}/${cartId}`)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });

    const restCarts = mycart.filter((cart) => {
      return cart._id !== cartId;
    });

    setmycart(restCarts);
    window.location.reload();
  };

  const checkout = () => {
    navigate("/payment");
  };
  return (
    <div className="myCart">
      <h3 className="text-center">Your Products</h3>
      <div className="d-flex">
        <div>
          {mycart.map((mycart) => {
            return (
              <Card className="productCard">
                <Card.Header>{mycart.name}</Card.Header>
                <Card.Body>
                  <div className="d-flex">
                    <div className="mx-3 ">
                      <img
                        src={`http://localhost:5000/${mycart.image}`}
                        alt=""
                      />
                    </div>
                    <div className="cartDetails d-flex flex-column mb-3 mx-3 justify-content-around">
                      <Card.Title>{mycart.name}</Card.Title>
                      <Card.Text>{mycart.desc}</Card.Text>
                      <div className="d-flex justify-content-between">
                        <Button
                          variant="primary"
                          onClick={() => removeFromCart(mycart._id)}
                        >
                          Remove
                        </Button>
                        <h4>{mycart.price}</h4>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
        </div>

        <div className="Total">
          <h4 className="text-center">your cart ({mycart.length})</h4>
          <div>
            <div className="details">
              {mycart.map((mycart) => {
                return (
                  <div className="d-flex align-items-center justify-content-between mb-2 ">
                    <div className="d-flex align-items-center  ">
                      <img
                        src={`http://localhost:5000/${mycart.image}`}
                        alt=""
                        className="mr-3"
                      />
                      <p>{mycart.name}</p>
                    </div>
                    <p className="price">
                      ${parseFloat(mycart.price).toFixed(2)}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div>
                <p>Delivery:</p>
              </div>
              <p className="price">${parseFloat("5").toFixed(2)}</p>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-2 Taxes">
              <div>
                <p>Taxes:</p>
              </div>
              <p className="price">${parseFloat("2").toFixed(2)}</p>
            </div>

            <div className="d-flex align-items-center justify-content-between mb-2">
              <div>
                <p>Total:</p>
              </div>
              <p className="price">
                $
                {parseFloat(
                  mycart.reduce((partialSum, a) => partialSum + a.price, 0) +
                    5 +
                    2
                ).toFixed(2)}
              </p>
            </div>
            <div className="text-center">
              <button onClick={() => checkout()}>Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
