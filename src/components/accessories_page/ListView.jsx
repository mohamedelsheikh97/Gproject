import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/accessories_page/listview.css";
import PriceFormat from "./PriceFormat";

const ListView = () => {
  return (
    <section>
      <div className="grid grid-two list-card">
        <figure>
          <img src="/car-acc-1.png" />
        </figure>
        <div className="list-card-right">
          <p className="list-card-name">Car Cover</p>
          <p className="card-price">
            <PriceFormat price="200" />
          </p>
          <p className="list-card-desc">
            Water Proof Cover <br />
            Brand : Other
            <br /> Type : Car Cover
            <br /> Are batteries needed to power the product or is this product
            a battery : 0 <br />
            Is this a Dangerous Good or a Hazardous Material, Substance or Waste
            that is regulated for transportation, storage, and/or disposal? : 0{" "}
          </p>
          <NavLink className="btn read-more-btn">ADD TO CART</NavLink>
        </div>
      </div>
      <div className="grid grid-two list-card">
        <figure>
          <img src="/car-acc-4.jpg" />
        </figure>
        <div className="list-card-right">
          <p className="list-card-name">Car Charger</p>
          <p className="card-price">
            <PriceFormat price="200" />
          </p>
          <p className="list-card-desc">
            1. Material: ABS + PC. <br />
            2. Output: USB 1 / 2: 18W (for QC / for FCP). Total output power
            18W.
            <br /> 3. Dual USB output, support for QC / for FCP / for AFC and
            other fast charging protocols.
            <br /> 4. Available set with 1m charging cable. <br />
            5. Sizes: 50*22mm. Weight: single charger – 13g, set with cable –
            37g
          </p>
          <NavLink className="btn read-more-btn">ADD TO CART</NavLink>
        </div>
      </div>
      <div className="grid grid-two list-card">
        <figure>
          <img src="/car-acc-5.jpg" />
        </figure>
        <div className="list-card-right">
          <p className="list-card-name">Steering Wheel</p>
          <p className="card-price">
            <PriceFormat price="200" />
          </p>
          <p className="list-card-desc">
            Premium Quality Material: This New Crystal Steering Wheel Cover made
            of durable microfiber leather with soft velvet, consisted hundreds
            of shiny rhinestones. Super Sparkly, Better Spotlight, Non-Dropping
            Diamond , and Comfortable Feelings, does not scratch hands, and has
            good anti-slip effect.
          </p>
          <NavLink className="btn read-more-btn">ADD TO CART</NavLink>
        </div>
      </div>
    </section>
  );
};

export default ListView;
