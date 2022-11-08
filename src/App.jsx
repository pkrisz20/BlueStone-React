import React, { useState, useRef } from 'react';
import TodoList from './components/TodoList';
import Button from './components/Button';

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === '') return;
    console.log(`Typed name: ${name}`);
  }

  return (
    <div className="App">
      <h1>Todo List App</h1>
  
      <div className="box">
        <input ref={todoNameRef} type="text" />
        <Button onClick={handleAddTodo} text='Add Task' />
        <Button text='Clear' />
        <Button text='Complete' />
        <div>0 left to do</div>
      </div>

      <TodoList todos={todos} />
    </div>
  );
}

export default App;
