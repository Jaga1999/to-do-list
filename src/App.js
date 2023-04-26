import React, { useState, useEffect } from "react";
import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";
import "./App.css";

// test clone

const App = () => {
  const [items, setitems] = useState([]);

  useEffect(() => {
    const items = localStorage.getItem("items");
    if (items) {
      const arrType = JSON.parse(items);
      setitems(arrType);
    }
  }, []);

  const addItems = (item) => {
    setitems((currentItems) => {
      const newItemList = [...currentItems, item];
      const stringType = JSON.stringify(newItemList);
      localStorage.setItem("items", stringType);
      return newItemList;
    });
  };

  const deleteItem = (id) => {
    setitems((currentItems) => {
      const updatedListItem = currentItems.filter(
        (items, index) => index !== id
      );
      const stringType = JSON.stringify(updatedListItem);
      localStorage.setItem("items", stringType);
      return updatedListItem;
    });
  };
  return (
    <div className="app">
      <h1 className="app__title">To-DO List</h1>
      <InputArea addItems={addItems} />
      <div className="itemsContainer">
        {items.length === 0 ? (
          <h1>No Items Added</h1>
        ) : (
          items.map((item, index) => {
            return (
              <ToDoItem
                key={index}
                itemText={item}
                deleteItem={() => deleteItem(index)}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default App;
