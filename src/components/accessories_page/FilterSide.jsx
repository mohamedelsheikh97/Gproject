import React from "react";
import PriceFormat from "./PriceFormat";

const FilterSide = () => {
  return (
    <div className="filterside">
      <form>
        <input
          name="text"
          type="text"
          placeholder="search"
          className="filterside-input"
        />
      </form>
      <div className="category side-filter-cont">
        <h4>Category</h4>

        <button type="button" className="old" name="category">
          Internal
        </button>
        <button type="button" className="old" name="category">
          External
        </button>
      </div>
      <div className="company side-filter-cont">
        <h4>Company</h4>
        <select name="company" id="company">
          <option name="company">Play Store</option>
          <option name="company">Seif Store</option>
          <option name="company">Zizo Store</option>
        </select>
      </div>

      <div className="slider-filter side-filter-cont">
        <h4>Price</h4>
        <p>
          <PriceFormat price="600" />
        </p>
        <input name="price" type="range" className="slider" />
      </div>
      <div className="clear-filter side-filter-cont">
        <button className="clear-btn">clear filters</button>
      </div>
    </div>
  );
};

export default FilterSide;
