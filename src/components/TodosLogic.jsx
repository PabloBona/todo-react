import React, { useState } from 'react';
import InputTodo from './InputTodo';
import TodoList from './TodoList';

const TodoLogic = () => {
  const [todos, setTodos] = useState([]);

  const handleSetTodo = (value) => {
    setTodos([...todos, value]);
  };

  return (
    <div className="row">
      <InputTodo setTodo={handleSetTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default TodoLogic;
