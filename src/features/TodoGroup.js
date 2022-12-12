import React from 'react'
import TodoItem from './TodoItem'

export default function TodoGroup(props) {
    const todoMap = props.textList;
    console.log(props.textList);
  return todoMap.map((item,index) => { 
    return <TodoItem key={index} text={item}/>;
  });
}
