import React from 'react'
import './TodoItem.css';
export default function TodoItem(props) {
    
  return (
    <div className="box"><p>{props.text}</p></div>
  )
}
