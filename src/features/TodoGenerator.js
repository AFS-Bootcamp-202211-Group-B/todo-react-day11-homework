import React, { useState } from 'react'

export default function TodoGenerator(props) {
    const {updateTodoList} = props
    const [todoItem, setTodoItem] = useState('')
    
    const onTodoChange = (event) => {
        const inputValue = event.target.value;
        setTodoItem(inputValue);
    }

    const handleSubmit = () => {
        updateTodoList(todoItem);
        setTodoItem('');
    }

    return (
        <div>
                <input 
                    type="text" 
                    value={todoItem} 
                    onChange={onTodoChange}
                />
                <button onClick={handleSubmit}>add</button>
        </div>
    )
    }
