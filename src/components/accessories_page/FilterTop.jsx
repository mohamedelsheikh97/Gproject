import React from "react";
import { BsList } from "react-icons/bs";

const FilterTop = () => {
  return (
    <div className="filter-top">
      <div className="grid-list-btn">
        <button className="new">
          <BsList />
        </button>
      </div>
      <h1 className="text-dark text-uppercase font-weight-bold">
        Car Accessories
      </h1>
      <div className="dropdown">
        <form
          action="#
        "
        >
          <select name="sort" id="sort">
            <option value="lowest">Price (Lowest)</option>
            <option value="highest">Price (Highest)</option>
            <option value="a-z">Price (a-z)</option>
            <option value="z-a">Price (z-a)</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default FilterTop;
