import React from 'react';
import Header from './Header';
import TodoLogic from './TodoLogic';

const TodoApp = () => (
  <div className="container">
    <Header
      text="todos"
      text2="item will persisit in the browser local storage"
    />
    <TodoLogic />
  </div>
);

export default TodoApp;
