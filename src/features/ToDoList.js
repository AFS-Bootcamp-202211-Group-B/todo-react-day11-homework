import React from 'react';
import ToDoItem from './ToDoItem';
 
 
const ToDoList = ({toDoList}) => {
   return (
       <div>
           {toDoList.map(todo => {
               return (
                   <ToDoItem todo={todo}/>
               )
           })}
       </div>
   );
};
 
export default ToDoList;