import React, { useState } from 'react';
import ToDoItem from './ToDoItem';
import InputArea from './InputArea';

function App() {
  const [todoItems, settodoItems] = useState([]);

  function addList(list) {
    settodoItems((prevItems) => {
      return [...prevItems, list];
    });
  }

  function deleteItem(id) {
    settodoItems((prevItems) => {
      return prevItems.filter((_item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addList} />
      <div>
        <ul id="list">
          {todoItems.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              li={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
