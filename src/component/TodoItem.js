import React, { useState } from "react"

export default function TodoItem(props){

    return(
        <div className='ListBorder'>
            <p className='List'>{props.message}</p>
        </div>
    );

}