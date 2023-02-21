/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import '../App.css';

const TodosList = ({ todos, toggleComplete, removeTodo }) => (
  <ul className="list-container">
    {todos.map((todo) => (
      <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} removeTodo={removeTodo} />
    ))}
  </ul>
);
TodosList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      completed: PropTypes.bool,
    }),
  ).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,

};

export default TodosList;
