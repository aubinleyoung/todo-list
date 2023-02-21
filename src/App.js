import './App.css';
import TodoForm from './components/TodoForm';
import TodosList from './components/TodoList';
import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Todos</p>
        <TodoForm addTodo={addTodo} />
        <TodosList todos={todos} />
      </header>

    </div>
  );
}

export default App;
