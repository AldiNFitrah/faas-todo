import React from "react";

const Todos = React.createContext({
  todos: [],
  setTodos: () => { },
});

export default Todos;
