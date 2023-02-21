// /*eslint-disable*/
import './App.css';
import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodosList from './components/TodoList';

const LOCAL_STORAGE_KEY = 'react-todo-list-todos';
function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

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
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todos</h1>

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
