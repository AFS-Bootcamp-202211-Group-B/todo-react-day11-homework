import './App.css';
import TodoItem from './component/TodoItem';
import TodoGenerator from './component/TodoGenerator';
import ListArea from './component/TodoListArea';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <ListArea />

    </div>
  );
}

export default App;
