import React, {useState} from 'react'
import TodoGenerator from './TodoGenerator'
import TodoGroup from './TodoGroup'

export default function TodoList() {
  const [todoList, setTodoList] = useState([])
  const onCreateTodoHandler=(newTodoItem)=>{
    setTodoList(current=>[...current, newTodoItem])
  }
  return (
    <div>

        {todoList}
        <TodoGroup/>
        <TodoGenerator onCreateTodo={onCreateTodoHandler}/>
    </div>
  )
}
