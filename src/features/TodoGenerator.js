import React,{useState}from 'react'

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
        <input type="text" name="todoText" onChange={handleChange}/> <button onClick={updateTodoItem}>Add</button> 
    </div>
  )
}
