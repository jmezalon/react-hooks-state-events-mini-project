import React from "react";

function Task({ taskObj, onHandleDelete }) {
  
  return (
    <div className="task">
      <div className="label">{taskObj.category}</div>
      <div className="text">{taskObj.text}</div>
      <button onClick={() => onHandleDelete(taskObj)} className="delete">X</button>
    </div>
  );
}

export default Task;
