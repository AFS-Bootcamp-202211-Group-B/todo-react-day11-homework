import React, { useState } from 'react';


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
        <button  onclick={addList}>add</button>
      </div>
    );
  
}
