import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ todos }) => (
  <div className="col">
    {todos.map((todo, id) => (
      // eslint-disable-next-line react/no-array-index-key
      <div className="col-12 mx-auto mt-2 d-flex justify-content-between border w-50 px-2" key={id.toString()}>
        {todo}
        <div>
          <button className="border-0" type="submit">Del</button>
          <button className="border-0" type="submit">Edit</button>
        </div>
      </div>
    ))}
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TodoList;
