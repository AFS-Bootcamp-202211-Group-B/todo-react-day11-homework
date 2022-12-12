import './App.css';
import React from 'react';
import TodoGroup from './features/TodoGroup';

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoGroup size={3} />
    </div>
  );
}

export default App;
