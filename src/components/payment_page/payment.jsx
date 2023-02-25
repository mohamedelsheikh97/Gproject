import React from "react";
import "../../css/payment_page/payment.css";

export default function Payment() {
  return (
    <div>
      <div className="container payment">
        <form action="">
          <div className="row">
            <div className="col">
              <h3 className="title">Billing Address</h3>

              <div className="inputBox">
                <span>Full Name :</span>
                <input type="text" placeholder="enter your name" />
              </div>
              <div className="inputBox">
                <span>Email :</span>
                <input type="email" placeholder="example@example.com" />
              </div>
              <div className="inputBox">
                <span>Address :</span>
                <input type="text" placeholder="room - street - locality" />
              </div>
              <div className="inputBox">
                <span>City :</span>
                <input type="text" placeholder="Cairo" />
              </div>

              <div className="flex">
                <div className="inputBox">
                  <span>State :</span>
                  <input type="text" placeholder="Egypt" />
                </div>
                <div className="inputBox">
                  <span>Zip Code :</span>
                  <input type="text" placeholder="123" />
                </div>
              </div>
            </div>

            <div className="col">
              <h3 className="title">Payment</h3>

              <div className="inputBox">
                <span>Cards accepted :</span>
                <img
                  src="https://w7.pngwing.com/pngs/32/363/png-transparent-visa-master-card-and-american-express-mastercard-payment-visa-credit-card-emv-credit-card-visa-and-master-card-background-text-display-advertising-logo-thumbnail.png"
                  alt=""
                />
              </div>
              <div className="inputBox">
                <span>Name On Card :</span>
                <input type="text" placeholder="mr. john henry" />
              </div>
              <div className="inputBox">
                <span>Credit Card Number :</span>
                <input type="number" placeholder="1111-2222-3333-4444" />
              </div>
              <div className="inputBox">
                <span>Exp Month :</span>
                <input type="text" placeholder="january" />
              </div>

              <div className="flex">
                <div className="inputBox">
                  <span>Exp Year :</span>
                  <input type="number" placeholder="2024" />
                </div>
                <div className="inputBox">
                  <span>CVV :</span>
                  <input type="text" placeholder="1234" />
                </div>
              </div>
            </div>
          </div>

          <input
            type="submit"
            value="Submit To Checkout"
            className="submit-btn"
          />
        </form>
      </div>
    </div>
  );
}
