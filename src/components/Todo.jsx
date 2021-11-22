const Todo = ({ todo, toggleTodo }) => {
  return (
    <div className="border-2 border-indigo-10 p-4 my-3 rounded-2xl">
      <li className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center break-all">
          <input type="checkbox" className="mr-2 w-4 h-4" checked={todo.is_done} onChange={() => toggleTodo(todo)} />
          <div className={`text-sm ${todo.is_done ? "line-through" : ""}`}>{todo.title}</div>
        </div>
      </li>
    </div>
  );
}

export default Todo;
