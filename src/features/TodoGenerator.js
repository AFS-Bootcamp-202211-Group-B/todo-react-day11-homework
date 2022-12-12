import React, { useState } from 'react';
import './TodoGenerator.css';


export default function TodoGenerator(props) {
    const { updateText2 } = props;
    const [text, setText] = useState("");
    const addList = (event) => {
        console.log(event.target.value);
        const textValue = event.target.value;
        setText(textValue);
        updateText2(textValue);
    };

    return (
      <div>
        <input type="text" name="text" min={""} value={text} />
        <button style={{color: "red"}} onclick={addList}>add</button>
      </div>
    );
  
}
