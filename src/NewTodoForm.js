import React, { useState } from 'react';
import './NewTodoForm.css'

const NewTodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Add ", todo);
    if (todo.length) {
      // add todo
      addTodo(todo);

      setTodo("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo-input" className="NewTodoForm-label">Task:</label>
      <input
        type="text"
        id="todo-input"
        name="todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  )
}


export default NewTodoForm