import React from 'react';
import Todo from './Todo';

const TodosList = ({ todos }) => (
  <ul>
    {todos.map((todo) => (
      <Todo key={todo.id} todo={todo} />
    ))}
  </ul>
);
export default TodosList;
