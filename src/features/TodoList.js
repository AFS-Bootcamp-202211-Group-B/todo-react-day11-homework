import React, { useState } from "react";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";

export default function TodoList() {
    const [items, setItems] = useState([]);
    const addItem = (text) => {
        const array = items.concat(text);
        setItems(array);
        console.log(array);
    };
    return (
        <div>
            <TodoGroup items={items} />
            <TodoGenerator addItem={addItem} />
        </div>
    );
}
