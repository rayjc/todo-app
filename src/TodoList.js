import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';


const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (name) => {
    setTodos([...todos, { name, isDone: false, id: uuidv4() }]);
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="TodoList">
      <div className="TodoList-header">
        <h1 className="TodoList-title">Todo Tracker</h1>
        <NewTodoForm addTodo={addTodo} />
      </div>
      <div>
        {
          todos.map(({ id, name, isDone }, idx) =>
            <Todo key={id} id={id} name={name} isDone={isDone} removeTodo={removeTodo} />
          )
        }
      </div>
    </div>
  )
}


export default TodoList;