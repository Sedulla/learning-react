export const AddTodoForm = ({ todo, onAddInputChange, onAddFormSubmit }) => {
  return (
    <form onSubmit={onAddFormSubmit}>
      <input
        name="todo"
        type="text"
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={todo}
        onChange={onAddInputChange}
      />
    </form>
  );
};
