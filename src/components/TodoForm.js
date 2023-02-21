import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: '',
    task: '',
    completed: false,
  });
  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task) {
      addTodo({ ...todo, id: '' });
      // reset task input
      setTodo({ ...todo, task: '' });
    }
  }
  return (
    <form action="" onSubmit={handleSubmit} id="form">

      <input type="text" name="task" id="task" value={todo.task} onChange={handleTaskInputChange} />
      <button type="submit">submit</button>
    </form>
  );
}
TodoForm.propTypes = {

  addTodo: PropTypes.func.isRequired,
};

export default TodoForm;
