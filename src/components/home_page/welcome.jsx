import React from "react";
import "../../css/home_page/welcome.css";
export default function Welcome() {
  return (
    <div className="container">
      <p className="text-center head">
        <span className="welcome">Welcome</span> to{" "}
        <span className="kalaks">Kalaks</span>
      </p>
      <p className="desc">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don’t look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn’t
        anything embarrassing hidden in the middle of text.
      </p>
      <div className="row gx-5">
        <div className="col">
          <div className="d-flex old">
            <div className="looking">
              <h4>
                <span>Looking</span> Old Car?
              </h4>
              <div>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque.
                </p>
              </div>
              <button className="button-5">View Listing</button>
            </div>

            <img src="/logo512.png" alt="" />
          </div>
        </div>
        <div className="col">
          <div className="d-flex old">
            <div className="looking">
              <h4>
                <span>Looking</span> New Car?
              </h4>
              <div>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque.
                </p>
              </div>
              <button className="button-5">View Listing</button>
            </div>

            <img src="/looking-new-car-1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
