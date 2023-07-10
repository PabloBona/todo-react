import React from 'react';
import Header from './Header';
import InputTodo from './InputTodo';

const TodoApp = () => (
  <div className="container">
    <Header
      text="todos"
      text2="item will persisit in the browser local storage"
    />
    <InputTodo />
  </div>
);

export default TodoApp;
