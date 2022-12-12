import React,{useState} from 'react'
import TodoGenerator from './TodoGenerator'
import TodoGroup from './TodoGroup'

export default function TodoList() {
    const initArray = [];
    const [size,setSize] = useState(0);
    const [textList, setText] = useState(initArray);

    const addSize = () => {
        setSize(size + 1);
    }
    const editText = (text) => {
        textList.push(text);
    }
    return (
        <div>
            <TodoGroup textList={textList} size={size}/>
            <TodoGenerator addSize={addSize} editText={editText}/>
        </div>
    )
}
