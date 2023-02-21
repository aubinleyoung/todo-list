import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import '../App.css';

const TodosList = ({ todos }) => (
  <ul className="list-container">
    {todos.map((todo) => (
      <Todo key={todo.id} todo={todo} />
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

};

export default TodosList;
