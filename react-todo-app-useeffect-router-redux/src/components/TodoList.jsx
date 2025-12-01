import TodoItem from "./TodoItem";

function TodoList({ todos }) {
  if (!todos || todos.length === 0) {
    return <p>No todos yet.</p>;
  }
  return (
    <ul style={{ listStyle: "none", paddingLeft: 0 }}>
      {todos.map((todo, index) => (
        <TodoItem key={todo.id ?? `todo-${index}`} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;