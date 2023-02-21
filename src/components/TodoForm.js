import React, { useState } from 'react';

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
    if (todo.task.tirm()) {
      addTodo({ ...todo, id: uuid.v4() });
      // reset task input
      setTodo({ ...todo, task: '' });
    }
  }
  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" name="task" id="task" value={todo.task} onChange={handleTaskInputChange} />
      <button type="submit">submit</button>
    </form>
  );
}
export default TodoForm;
