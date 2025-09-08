import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return; // Prevent adding empty tasks
    dispatch(addTodo(task));
    setTask("");
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="add-form">
        <input
          type="text"
          className="task-input"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="What needs to be done?"
        />
        <button type="submit" className="add-btn">
          Add Task
        </button>
      </form>
    </>
  );
}