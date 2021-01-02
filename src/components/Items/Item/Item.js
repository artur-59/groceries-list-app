import React from "react";

import "./Item.css";

const Item = ({ itemName, id, inCart, itemsList, setItemsList }) => {
  const deleteItemHandler = () => {
    setItemsList(itemsList.filter((itemToDelete) => itemToDelete.id !== id));
  };

  const inCartHandler = () => {
    setItemsList(
      itemsList.map((itemAdded) => {
        if (itemAdded.id === id) {
          return {
            ...itemAdded,
            inCart: !inCart,
          };
        } else {
          return itemAdded;
        }
      })
    );
  };
  return (
    <div className={`item ${ inCart ? "inCart" : null}`}>
      <li className="groceries-item">{itemName}</li>
      <button className="in-cart-button" onClick={inCartHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button className="delete-item-button" onClick={deleteItemHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Item;
