/*eslint-disable*/
import './App.css';
import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodosList from './components/TodoList';

function App() {
  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }
  const [todos, setTodos] = useState(getInitialTodos());
  // storing todos items
  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);
  // Add todo
  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };
  // Completed
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo, completed: !todo.completed,
          };
        }
        return todo;
      }),

    );
  };
  // Remove todo
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="todo-title">Todos</h1>

      </header>
      <section className="App-body">
        <div className="App-input">
          <TodoForm addTodo={addTodo} />
          <TodosList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />

        </div>

      </section>

    </div>
  );
}

export default App;
