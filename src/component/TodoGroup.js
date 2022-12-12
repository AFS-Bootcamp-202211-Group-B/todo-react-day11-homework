import React from "react"
import TodoItem from './TodoItem';


export default function TodoGroup(props){
    console.log(props);
    return props.messageMap.map((todoList, index) => {
        return <TodoItem key={index} message={todoList} />;
      });
    }

     