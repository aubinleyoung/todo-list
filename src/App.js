// /*eslint-disable*/
import './App.css';
import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodosList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todos</h1>

      </header>
      <body className="App-body">
        <div className="App-input">
          <TodoForm addTodo={addTodo} />
          <TodosList todos={todos} />

        </div>

      </body>

    </div>
  );
}

export default App;
