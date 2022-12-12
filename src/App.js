import './App.css';
import TodoGroup from './features/TodoGroup';
import {useState} from "react";
function App() {
  const [size,setSize] = useState(3);
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoGroup size={size}/>
    </div>
  );
}

export default App;
