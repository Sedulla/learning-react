import { useEffect, useState } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { AddTodoForm } from './components/AddTodoForm';
import { Title } from './components/Title';
import { TodoList } from './components/TodoList';

function App() {
  const [todos, setTodos] = useState(() => {
    // get the todos from localstorage
    const savedTodos = localStorage.getItem('todos');

    if (savedTodos) {
      // return the parsed JSON object back to a javascript object
      return JSON.parse(savedTodos);
    } else {
      // return an empty array
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // to keep track of the value in the input
  const [todo, setTodo] = useState('');

  const handleAddInputChange = (e) => {
    // set the new state value to what's currently in the input box
    setTodo(e.target.value);
  };

  const handleAddFormSubmit = (e) => {
    // prevent the browser default behavior or refreshing the page on submit
    e.preventDefault();

    // don't submit if the input is an empty string
    if (todo !== '') {
      // set the new todos state (the array)
      setTodos([
        // copy the current values in state
        ...todos,
        { id: todos.length + 1, text: todo.trim() },
      ]);
    }

    // clear out the input box
    setTodo('');
  };

  const handleDeleteTodo = (id) => {
    const updatedTodo = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(updatedTodo);
  };

  return (
    <>
      <section className="todoapp">
        <header className="header">
          <Title />
          <AddTodoForm
            onAddInputChange={handleAddInputChange}
            onAddFormSubmit={handleAddFormSubmit}
          />
        </header>
        <TodoList todos={todos} todo={todo} onDeleteClick={handleDeleteTodo} />
        <Footer />
      </section>
      <footer className="info">
        <p>Click to edit a todo</p>
        <p>
          by <a href="#!">Sedulla</a>
        </p>
        <p>
          Part of <a href="#!">Todos</a>
        </p>
      </footer>
    </>
  );
}

export default App;
