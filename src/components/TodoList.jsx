import { useContext, useEffect } from "react";
import Todos from "../contexts/Todos";
import axios from "axios";
import Todo from "./Todo";

const TodoList = () => {
  const { todos, setTodos } = useContext(Todos);

  useEffect(() => {
    axios.get("/.netlify/functions/fetch-todos")
      .then((response) => {
        const newTodos = response.data.data.sort((todo1, todo2) => {
          if (todo1.is_done === todo2.is_done) {
            return todo1.created_at < todo2.created_at ? 1 : -1;
          }
          return todo2.is_done ? -1 : 1;
        })
        setTodos(newTodos);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mt-4">
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            index={todo.id}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
