import { useDispatch } from "react-redux";
import { updateTodo, deleteTodo } from ".../features/todos/todosSlice";

function TodoItem ({ todo }) {
  const dispatch = useDispatch();

  const toggleComplete = () => {
    dispatch(updateTodo({ ...todo, completed: !todo.completed }));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
      <input type="checkbox" checked={!!todo.completed} onChange={toggleComplete} />
      <span style={{ textDecoration: todo.completed ? "line-through" : "none", flex: 1 }}>
        {todo.title}
      </span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default TodoItem;