import './App.css';
import TodoGroup from './features/TodoGroup';
import React, { useState } from 'react';
import ToDoList from './features/ToDoList';
import data from "./data.json";


function App() {
  const [ toDoList, setToDoList ] = useState(data);

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput }];
    setToDoList(copy);
  }


  return (
    <div className="App">
      <h1>Todo List</h1>
      <ToDoList toDoList={toDoList}/>
      <TodoGroup addTask={addTask}/>

    </div>
  );
}

export default App;
