import React from 'react';
import PropTypes from 'prop-types';

function Todo({ todo }) {
  return (
    <div className="task-list" style={{ display: 'flex' }}>
      <input type="checkbox" />
      <li style={{ textDecoration: todo.completed ? 'line-trough' : null }}>{todo.task}</li>
      <button type="submit">X</button>
    </div>
  );
}
Todo.propTypes = {
  todo: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  task: PropTypes.string.isRequired,
};

export default Todo;
