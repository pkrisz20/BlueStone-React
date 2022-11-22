import { useState, useRef } from 'react';
import BlockTitle from '../components/BlockTitle';
import Todo from '../components/Todo';
import { v4 as uuidv4 } from 'uuid';
import Button from '../components/Button';
import { FaLongArrowAltUp } from 'react-icons/fa';
import useUpdateLogger from '../hooks/useUpdateLogger';

const Home = () => {
    const [todos, setTodos] = useState([]);
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

    useUpdateLogger(todos);

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
                    <input className="search-input" type="text" placeholder="Type here to search..." onChange={(e) => setSearchText(e.target.value) } />
                </>
                )
            }

            {/* LIST WITH FILTERING */}
            {(todos.length > 0) &&
                <div className="todos-list">
                    {(todos.length > 0) && todos.filter(value => {
                        if (searchText === "") return true;
                        else if (value.name.toLowerCase().includes(searchText.toLowerCase())) {
                            return true;
                        }
                    }).map(item => {
                        return (<Todo key={ item.id } onDelete={deleteTask} todo={ item } toggleTodo={ toggleTodo } />);
                        })
                    }
                </div>
            }

            {/* COUNTER */}
            { todos.length > 0 ? (<div>{ todos.length > 1 ? 'Tasks' : 'Task'} left: <strong>{ todos.filter(todo => !todo.completed).length }</strong></div>)
                : (<div>Your todo list is empty</div>)
            }
        </>
    );
}

export default Home;