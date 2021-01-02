import React from "react";
import Item from "../Item/Item";

import "./ItemList.css";

const ItemList = ({ itemsList, setItemsList, filteredItems }) => {
  return (
    <div className="item-container">
      <ul className="groceries-list">
        {filteredItems.map((item) => (
          <Item
            {...item}
            key={item.id}
            itemsList={itemsList}
            setItemsList={setItemsList}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
