import { useState, useRef, useEffect } from 'react';
import BlockTitle from '../components/BlockTitle';
import TodoList from '../components/TodoList';
import { v4 as uuidv4 } from 'uuid';
import Button from '../components/Button';
import { FaLongArrowAltUp } from 'react-icons/fa';

const Home = () => {
    const [todos, setTodos] = useState([]);
    // const [filteredList, setFilteredList] = useState([]);
    const [isOpenForm, setIsOpenForm] = useState(false);
    const [isOpenSearch, setIsOpenSearch] = useState(false);
    const [searchText, setSearchText] = useState("");
    const todoNameRef = useRef();

    function handleAddTodo() {
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

    const deleteTask = (id) => {
        const filteredList = todos.filter(item => item.id !== id);
        setTodos(filteredList);
    }

    const filterTodo = async (text) => {
        await setSearchText(text);
        await console.log(searchText);
    }

    return (
        <>
            <BlockTitle title="Todo List App" />

            {/* FORM */}

            <Button
                classProp="toggle-btn"
                text={ isOpenForm ? "Close Form" : "Open Form"}
                onClick={ () => setIsOpenForm(!isOpenForm) }
                color={ isOpenForm ? 'red' : 'green' } />
    
            { isOpenForm ? (
                <div className="box">
                    <input className='tasks-input' ref={todoNameRef} type="text" />
                    <Button onClick={ handleAddTodo } text="Add Todo" />
                    <Button onClick={ handleClearTodos } color="blue" text="Clear Completed" />
                    <Button color="red" onClick={ () => setTodos([]) } text="Clear All" />
                </div>
            ) : <h3><FaLongArrowAltUp />Click on the button above to open the form! <FaLongArrowAltUp /></h3> }

            {/* SEARCH */}

            <Button
                classProp='toggle-search'
                text={ isOpenSearch ? "Close search" : "Open search"}
                onClick={ () => setIsOpenSearch(!isOpenSearch) }
                color={ isOpenSearch ? 'red' : 'green' } />

            { isOpenSearch && (
                <>
                    <label className="search-label">Search</label>
                    <input className="search-input" type="text" placeholder="Type here to search..." onChange={ (e) => filterTodo(e.target.value) } />
                </>)
            }

            {/* SIMPLE LIST */}
            { (todos.length > 0) && <TodoList onDelete={ deleteTask } todos={ todos } toggleTodo={ toggleTodo } /> }

            {/* FILTERED LIST */}
            {/* { (todos.length > 0 && searchText.length > 0) && (<TodoList onDelete={ deleteTask } todos={ todos } toggleTodo={ toggleTodo} />) } */}

            {/* { (filteredList.length === 0 && searchText.length > 0) && (<p>Not found any item like that.</p>) } */}

            {/* COUNTER */}
            { todos.length > 0 ? (<div>{ todos.length > 1 ? 'Tasks' : 'Task'} left: <strong>{ todos.filter(todo => !todo.completed).length }</strong></div>)
                : (<div>Your todo list is empty</div>)
            }
        </>
    );
}

export default Home;