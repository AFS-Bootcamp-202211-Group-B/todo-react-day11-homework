import React, { useState } from 'react'
import TodoGenerator from './TodoGenerator';
import TodoGroup from './TodoGroup';

export default function TodoList() {
    const [todoList, setTodoList] = useState([]);
    const updateTodoList = (item) => {
        setTodoList(current => [...current, item])
    }
    return (
        <div>
            <TodoGroup todoList={todoList} />
            <TodoGenerator updateTodoList={updateTodoList} />
        </div>
    )
}
