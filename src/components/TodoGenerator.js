import React from 'react'

export default function (props) {
  const createNewTodo = () => {
    props.onCreateNewTodo(document.getElementById("todoInput").value)
  }
  return (
    <div>
      <input id="todoInput" />
      <button onClick={createNewTodo}>add</button>
    </div>
  )
}
