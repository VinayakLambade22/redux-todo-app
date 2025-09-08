import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";
import { markAsDone } from "../features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const dispatch = useDispatch();

  const clickHandler = (id) => {
    console.log("clicked", id);
    dispatch(deleteTodo(id));
  };

  const markAsDoneHandler = (id) => {
    console.log("clicked", id);
    dispatch(markAsDone(id));
  };

  return (
    <>
      <AddForm />
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
            >
              {todo.task}
            </span>
            &nbsp; &nbsp;
            <button onClick={() => clickHandler(todo.id)}>Delete</button>
            &nbsp; &nbsp;
            <button onClick={() => markAsDoneHandler(todo.id)}>
              {todo.isDone ? "Undo" : "Mark As Done"}
            </button>
            <hr />
          </li>
        ))}
      </ul>
    </>
  );
}
