import axios from "axios";
import { useRef } from "react";

const CreateTodo = () => {
  const inputEl = useRef(null);

  const actionSubmitTodo = (e) => {
    e.preventDefault();

    const title = inputEl.current.value;
    const todo = {
      title,
    };

    axios.post("/.netlify/functions/create-todo", todo)
      .then((response) => {
        console.log(response);
      });

    e.target.reset();
  };

  const onKeyboardDown = (e) => {
    if (e.key === "Enter") {
      actionSubmitTodo(e);
    }
  }

  return (
    <div className="m">
      <h3 className="text-2xl mx-10">
        Create ToDo
      </h3>
      <div className="px-8 mx-auto mt-3 flex flex-row">
        <input ref={inputEl} type="text" name="title" id="titleInput" className="h-10 w-full text-black px-3" onKeyDown={onKeyboardDown} />
        <button type="submit" className="ml-4 bg-indigo-10 py-2 px-4" onClick>Create!</button>
      </div>
    </div>
  );
};

export default CreateTodo;
