import CreateTodo from './components/CreateTodo';
import Header from './components/Header';
import './index.css';

function App() {
  return (
    <div className="App bg-indigo-50 h-screen">
      <div className="max-w-screen-md bg-indigo mx-auto">
        <Header />
        <CreateTodo />
      </div>
    </div>
  );
}

export default App;
