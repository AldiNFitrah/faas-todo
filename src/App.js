import { useMemo, useState } from 'react';
import CreateTodo from './components/CreateTodo';
import Header from './components/Header';
import './index.css';
import Todos from './contexts/Todos';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const value = useMemo(() => ({ todos, setTodos }), [todos]);

  return (
    <Todos.Provider value={value}>
      <div className="App bg-indigo-50">
        <div className="max-w-screen-md bg-indigo mx-auto min-h-screen px-10">
          <Header />
          <CreateTodo />
          <TodoList />
        </div>
      </div>
    </Todos.Provider>
  );
}

export default App;
