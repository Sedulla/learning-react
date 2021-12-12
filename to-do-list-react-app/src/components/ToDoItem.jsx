import React, { useState } from 'react';

function ToDoItem(props) {
  const [isDone, setisDone] = useState(false);

  function handleClick() {
    setisDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div
      onClick={() => {
        handleClick();
        props.onChecked(props.id);
      }}
    >
      <li style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
        {props.li}
      </li>
    </div>
  );
}

export default ToDoItem;
