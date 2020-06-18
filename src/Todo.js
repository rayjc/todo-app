import React, { useState } from 'react';
import './Todo.css';


const Todo = ({ id, name, isDone, removeTodo }) => {
  const [isChecked, setIsChecked] = useState(isDone);

  return (
    <div className="Todo">
      <input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
      <span className={isChecked ? "completed" : ""}>{name}</span>
      {isChecked && <button className="Todo-btn" onClick={() => removeTodo(id)}>x</button>}
    </div>
  )
}


export default Todo;