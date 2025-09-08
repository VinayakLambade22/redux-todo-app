import { useSelector, useDispatch } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const clickHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  const markAsDoneHandler = (id) => {
    dispatch(markAsDone(id));
  };

  return (
    <div className="todo-app">
      <h1>My To-Do List 📝</h1>
      <AddForm />
      <h2>Tasks</h2>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span
              className={`task-text ${todo.isDone ? "completed" : ""}`}
            >
              {todo.task}
            </span>
            <button
              onClick={() => markAsDoneHandler(todo.id)}
              className={`action-btn ${todo.isDone ? "undo-btn" : "mark-btn"}`}
            >
              {todo.isDone ? "Undo" : "Done"}
            </button>
            <button
              onClick={() => clickHandler(todo.id)}
              className="action-btn delete-btn"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}