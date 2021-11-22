import axios from "axios";
import { useRef, useContext } from "react";
import Todos from "../contexts/Todos";

const CreateTodo = () => {
  const inputEl = useRef(null);
  const { todos, setTodos } = useContext(Todos);

  const actionSubmitTodo = (e) => {
    e.preventDefault();

    const title = inputEl.current.value;
    console.log(inputEl);
    const todo = {
      title,
    };

    axios.post("/.netlify/functions/create-todo", todo)
      .then((response) => {
        console.log(response);
        setTodos([response.data.data[0], ...todos]);
        inputEl.current.value = "";
      });
  };

  const onKeyboardDown = (e) => {
    if (e.key === "Enter") {
      actionSubmitTodo(e);
    }
  }

  return (
    <div className="m">
      <h3 className="text-2xl">
        Create ToDo
      </h3>
      <div className="mx-auto mt-3 flex flex-row">
        <input ref={inputEl} type="text" name="title" id="titleInput" className="h-10 w-full rounded-md text-black px-3" onKeyDown={onKeyboardDown} />
        <button type="submit" className="ml-4 bg-indigo-10 py-2 px-4 rounded-md" onClick={actionSubmitTodo}>Create!</button>
      </div>
    </div>
  );
};

export default CreateTodo;
