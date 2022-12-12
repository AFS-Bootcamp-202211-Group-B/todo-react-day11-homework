import React from 'react'
import TodoItem from './TodoItem'

export default function TodoGroup(props) {

    return (
        <div>
            {
                props.todoList.map(
                    (item, index) =>
                        <TodoItem todoItem={item} key={index} />
                )
            }
        </div>
    )
}