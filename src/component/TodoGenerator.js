import React, { useState } from "react"
import TodoItem from './TodoItem';

export default function TodoGenerator(props){

    
    const {updateMessageList} = props;
    const [message, setMessage] = useState('');
    const onChange = (event) => {
      setMessage(event.target.value);
    }
    const Addlist = () => {
      updateMessageList(message);
    }

    return(

        <div>
            <input  type="text" onChange={onChange}/>
            <button onClick={Addlist}>Add</button>
        </div>
        )
 
}