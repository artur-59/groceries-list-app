import { useState, useEffect } from "react";
import Input from "./components/Input/Input";
import ItemList from "./components/Items/ItemList/ItemList";
import { v4 as uuidv4 } from "uuid";

import "./App.css";

function App() {
  const [inputItem, setInputItem] = useState("");
  const [itemsList, setItemsList] = useState([]);
  const [status, setStatus] = useState("All Items");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
      getLocalItems();
  }, [])

  useEffect(() => {
    filterHandler();
    saveItemsToLocal();
  }, [itemsList, status]);

  const handleInputs = (e) => {
    setInputItem(e.target.value);
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    setItemsList([
      ...itemsList,
      { itemName: inputItem, inCart: false, id: uuidv4() },
    ]);
    setInputItem("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  const filterHandler = () => {
    switch (status) {
      case "Added to Cart":
        setFilteredItems(itemsList.filter((item) => item.inCart === true));
        break;
      case "Missing":
        setFilteredItems(itemsList.filter((item) => item.inCart === false));
        break;
      default:
        setFilteredItems(itemsList);
        break;
    }
  };

  const saveItemsToLocal = () => {
    localStorage.setItem("itemsList", JSON.stringify(itemsList));
  };

  const getLocalItems = () => {
    if (localStorage.getItem("itemsList") === null) {
      localStorage.setItem("itemsList", JSON.stringify([]));
    } else {
      let itemsFromLocal = JSON.parse(localStorage.getItem("itemsList"));
      setItemsList(itemsFromLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>
          Groceries List <i className="fas fa-shopping-cart"></i>
        </h1>
      </header>
      <Input
        inputItem={inputItem}
        handleInputs={handleInputs}
        handleInputSubmit={handleInputSubmit}
        statusHandler={statusHandler}
      />
      <ItemList
        itemsList={itemsList}
        setItemsList={setItemsList}
        filteredItems={filteredItems}
      />
    </div>
  );
}

export default App;
