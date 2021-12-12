import './App.css';
import { Footer } from './components/Footer';
import { Form } from './components/Form';
import { Title } from './components/Title';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <>
      <section className="todoapp">
        <header className="header">
          <Title />
          <Form />
        </header>
        <TodoList />
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
