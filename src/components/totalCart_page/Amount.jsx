import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Amount = () => {
  return (
    <div className="incdec">
      <button className="btn btn-warning">
        <AiOutlinePlus />
      </button>
      <div className="text-center">1</div>
      <button className="btn btn-danger">
        <AiOutlineMinus />
      </button>
    </div>
  );
};

export default Amount;
