import React,{useState}from 'react';
import "./TodoGenerator.css"

export default function TodoGenerator(props) {
    const addSize = props.addSize;
    const editText = props.editText;
    const [text,setText] = useState("");
    const updateTodoItem = () => {
        addSize();
        editText(text);
        console.log(text);
    }
    const handleChange = (event) => {
        const inputValue = event.target.value;
        setText(inputValue);
    }
  return (
    <div>
        <input type="text" name="todoText" onChange={handleChange} className="textinput"/> <button onClick={updateTodoItem} className="button-9">Add</button> 
    </div>
  )
}
