import { useContext, useEffect } from "react";
import Todos from "../contexts/Todos";
import axios from "axios";
import Todo from "./Todo";

const TodoList = () => {
  const { todos, setTodos } = useContext(Todos);

  const compareFnTodo = (t1, t2) => {
    if (t1.is_done === t2.is_done) {
      return t1.created_at < t2.created_at ? 1 : -1;
    }
    return t2.is_done ? -1 : 1;
  };

  const toggleTodo = (todo) => {
    const newTodos = todos.map((t) => {
      if (t.id === todo.id) {
        return { ...t, is_done: !t.is_done };
      }
      return t;
    });
    const sortedTodos = newTodos.sort(compareFnTodo);
    setTodos(sortedTodos);
  };

  useEffect(() => {
    axios.get("/.netlify/functions/fetch-todos")
      .then((response) => {
        const newTodos = response.data.data.sort(compareFnTodo);
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
            todo={todo}
            toggleTodo={toggleTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
