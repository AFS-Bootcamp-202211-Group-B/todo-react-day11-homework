
import React, { useState } from "react";
import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";


export default function TodoistArea() {
  const [messageMap, setMessageMap] = useState(Array());
  const updateMessageList = (message) => {
    setMessageMap([...messageMap, message]);
  };
  
  return (
    <div>
      <TodoGroup messageMap={messageMap} />
      <TodoGenerator updateMessageList={updateMessageList} />
    </div>
  );
}
