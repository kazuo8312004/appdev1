import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from ".../features/todos/todosSlice";

function AddTodoForm () {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (title.trim() === "") return;
    dispatch(addTodo(title));
    setTitle("");
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
        style={{ padding: "8px", width: "70%", marginRight: "8px" }}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AddTodoForm;