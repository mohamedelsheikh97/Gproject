import React, { useEffect } from "react";
import FilterTop from "./FilterTop";
import FilterSide from "./FilterSide";
import "../../css/accessories_page/allproducts.css";
import { Container } from "reactstrap";
import Store from "./Store";

export default function Accessories() {
  return (
    <section className="products-page">
      <section className="common__section mb-5">
        <Container className="text-center">
          <h1 class="display-4 text-uppercase text-center text-light">
            ACCESSORIES LISTING
          </h1>
        </Container>
      </section>
      <div className="products-cont container grid grid-one-two">
        {/* <FilterSide /> */}
        <div>
          <FilterTop />
          <div className="list-cards-cont">
            <Store />
          </div>
        </div>
      </div>
    </section>
  );
}
