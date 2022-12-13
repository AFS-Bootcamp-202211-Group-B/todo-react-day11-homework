import React from "react";

export default function TodoItem(props) {
    return (
        <div
            style={{
                width: "400px",
                border: "1px solid black",
                textAlign: "center",
                margin: "10px auto",
                padding: "5px",
            }}
        >
            {props.item}
        </div>
    );
}
