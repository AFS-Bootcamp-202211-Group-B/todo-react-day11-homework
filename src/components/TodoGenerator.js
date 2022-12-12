import React from 'react'

export default function (props) {
  const createTodo = () => {
    props.onCreateTodo(document.getElementById("todoInput").value)
  }
  return (
    <div>
      <input id="todoInput" />
      <button onClick={createTodo}>add</button>
    </div>
  )
}
