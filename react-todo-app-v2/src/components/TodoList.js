import React from 'react';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({ todos, todo, onDeleteClick }) => {
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {/* map over the todos array which add new TodoListItem component for every todo */}
        {todos.map((todo) => {
          return (
            <TodoListItem
              key={todo.id}
              todo={todo}
              onDeleteClick={onDeleteClick}
            />
          );
        })}
      </ul>
    </section>
  );
};
