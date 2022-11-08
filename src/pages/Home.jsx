import { useState, useRef, useEffect } from 'react';
import TodoList from '../components/TodoList';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos';

const Home = () => {
    const [todos, setTodos] = useState([]);
    const todoNameRef = useRef();
    
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storedTodos) setTodos(storedTodos);
    }, []);
    
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos]);

    function handleAddTodo(e) {
        const name = todoNameRef.current.value;
        if (name === '') return;
        setTodos(prevTodos => {
            return [...prevTodos, { id: uuidv4(), name: name, completed: false }]
        });
        todoNameRef.current.value = null;
    }

    function toggleTodo(id) {
        const newTodos = [...todos];
        const todo = newTodos.find(item => item.id === id);
        todo.completed = !todo.completed;
        setTodos(newTodos);
    }

    function handleClearTodos () {
        const newTodos = todos.filter(item => !item.completed);
        setTodos(newTodos);
    }

    return (
        <>
            <h1 className='title'>Todo List App</h1>
    
            <div className="box">
            <input className='tasks-input' ref={todoNameRef} type="text" />
            <button className='btn' onClick={ handleAddTodo }>Add Todo</button>
            <button className='btn' onClick={ handleClearTodos }>Clear Complete</button>
            <button className='btn' onClick={ () => setTodos([]) }>Clear All</button>
            <div>Tasks left: <strong>{ todos.filter(todo => !todo.completed).length }</strong></div>
            </div>
    
            { todos.length > 0 && <TodoList todos={ todos } toggleTodo={ toggleTodo } /> }
        </>
    );
}

export default Home;
