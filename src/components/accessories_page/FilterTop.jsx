import React from "react";
import { BsList } from "react-icons/bs";

const FilterTop = () => {
  return (
    <div className="filter-top">
      <div className="grid-list-btn">
        {/* <button className="new">
          <BsList />
        </button> */}
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
            <option value="lowest">External</option>
            <option value="highest">Internal</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default FilterTop;
