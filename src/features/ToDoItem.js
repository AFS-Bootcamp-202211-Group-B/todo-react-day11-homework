import React from 'react';
import './ToDoItem.css';

const ToDoItem = ({todo}) => {

    return (
        <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id}  className="todo">
            {todo.task}
        </div>
    );

};
 
export default ToDoItem;