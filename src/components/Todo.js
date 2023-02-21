import React from 'react';

function Todo({ todo }) {
  return (
    <div style={{ display: 'flex' }}>
      <input type="checkbox" />
      <li style={{ color: 'white', textDecoration: todo.completed ? 'line-trough' : null }}>{todo.task}</li>
      <button type="submit">X</button>
    </div>
  );
}
export default Todo;
