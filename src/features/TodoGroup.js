import React from 'react'
import TodoItem from './TodoItem'

export default function TodoGroup(props) {
    return Array(props.size)
            .fill(0)
            .map((item, index) => {
                return <TodoItem key={index} />
    })
}