import React from 'react';

export const TodoListItem = ({ todo, onDeleteClick }) => {
  return (
    <li>
      <div className="view">
        <input className="toggle" type="checkbox" />
        {/* trim the whitespace from the todo */}
        <label>{todo.text}</label>
        <button
          type="button"
          className="delete"
          onClick={() => onDeleteClick(todo.id)}
        ></button>
        <button
          type="button"
          className="edit-btn"
          onClick={() => onDeleteClick(todo.id)}
        ></button>
      </div>
    </li>
  );
};
