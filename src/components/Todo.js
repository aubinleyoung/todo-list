import React from 'react';
import PropTypes from 'prop-types';

function Todo({ todo, toggleComplete, removeTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }
  function handleRemoveCick() {
    removeTodo(todo.id);
  }
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  return (
    <div className="task-list" style={{ display: 'flex' }}>
      <input type="checkbox" onClick={handleCheckboxClick} />
      <li className="list" style={todo.completed ? completedStyle : null}>{todo.task}</li>
      <button type="submit" onClick={handleRemoveCick}>X</button>
    </div>
  );
}
Todo.propTypes = {
  todo: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  task: PropTypes.string.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default Todo;
