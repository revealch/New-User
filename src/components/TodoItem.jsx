import React from "react";

const TodoItem = (props) => {
  return (
    <div className="todo-item">
        <span>
            <input type="checkbox" />
      <span>{props.work}</span>
        </span>
      <span className="todo-item-text">...</span>
    </div>
  );
};

export default TodoItem;
