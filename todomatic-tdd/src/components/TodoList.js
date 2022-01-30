import React, { useState } from "react";

const TodoList = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState(["pen"]);
  function handleChange(event) {
    const newValue = event.target.value;
    setInput(newValue);
  }
  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, input];
    });
    setInput("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1 data-testid="Heading">Todo-List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleChange}
          data-testid="Input"
          type="text"
          value={input}
          placeholder="Enter text"
        />
        <button data-testid="add-button" onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul data-testid="ListItems">
          {items.map((todoItem) => (
            <li data-testid="Item">{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
