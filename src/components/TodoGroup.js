import React from 'react'
import TodoItem from './TodoItem'

export default function TodoGroup(props) {
  return (
    <div>
        {
          props.todoList.map(
            (todoItem,index)=>{
              <TodoItem item={todoItem} key={index}/>
            }
          )
        }
    </div>
  )
}
