import React from "react";
import { FaTrash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import PriceFormat from "../accessories_page/PriceFormat";
import Amount from "./Amount";
import "../../css/totalCart_page/cart.css";

export default function Cart() {
  return (
    <section className="cart-section">
      <div className="container cart-cont">
        <div className="cart-user-profile">
          <h4 className="cart-username text-uppercase">Accessories Listing </h4>
        </div>
        <div className="flex-around grid grid-six cart-top">
          <p>Item</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
          <p>Status</p>
          <p>Remove</p>
        </div>
        <hr />
        <div className="flex-around grid grid-six cart-mid">
          <div className="cart-name-color">
            <img src="/car-acc-5.jpg" />
            <div>
              <p className="cart-name">Car Charger</p>
            </div>
          </div>
          <p>
            <PriceFormat price="200" />
          </p>
          <Amount amount="1" setDec="+" setInc="-" />
          <p>
            <PriceFormat price="200" />
          </p>
          <p className="cart-name">Pending</p>
          <p>
            <FaTrash className="trash" />
          </p>
        </div>
        <hr />
        <div className="flex-between cart-btns">
          <NavLink to="/accessories">
            <button className="btn ship-btn">Continue Shopping</button>
          </NavLink>
          <button className="clear-btn">Clear Cart</button>
        </div>
        <div className="cart-price-cont">
          <div className="cart-price">
            <p>
              Subtotal:{" "}
              <span>
                <PriceFormat price="200" />
              </span>
            </p>
            <p>
              Shipping Fee:{" "}
              <span>
                <PriceFormat price="50" />
              </span>
            </p>
            <hr />
            <p className="total-price">
              Order Total:{" "}
              <span>
                <PriceFormat price="250" />
              </span>
            </p>
            <button className="btn paybtn ship-btn">Pay Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}
