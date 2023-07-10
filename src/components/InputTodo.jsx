import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InputTodo = ({ setTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo(inputValue);
    setInputValue('');
  };

  return (
    <div className="col-12">
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

InputTodo.propTypes = {
  setTodo: PropTypes.func.isRequired,
};

export default InputTodo;
