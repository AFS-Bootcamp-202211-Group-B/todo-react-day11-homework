import React from "react";
import TodoItem from "./TodoItem";

export default function TodoGroup(props) {
    return props.items.map((item) => {
        return <TodoItem item={item} />;
    });
}
