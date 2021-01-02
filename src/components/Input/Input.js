import React from "react";

import "./Input.css";

const Input = ({inputItem, handleInputs, handleInputSubmit, statusHandler}) => {
  return (
    <form>
      <input type="text" value={inputItem} onChange={handleInputs}/>
      <button type="submit" onClick={handleInputSubmit}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select className="filter-items" onChange={statusHandler}>
          <option value="All Items">All Items</option>
          <option value="Added to Cart">Added to Cart</option>
          <option value="Missing">Missing</option>
        </select>
      </div>
    </form>
  );
};

export default Input;
