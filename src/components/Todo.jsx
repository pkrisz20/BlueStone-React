import { FaTimes } from 'react-icons/fa';

const Todo = ({ todo, toggleTodo, onDelete }) => {
    function handleTodoClick() {
        toggleTodo(todo.id);
    }

    return (
        <div className={`row ${todo.completed ? 'done' : ''}`}>
            <label>
                <input className='input' type="checkbox" defaultChecked={ todo.completed } onChange={ handleTodoClick } />
                { todo.name }
            </label>
            <FaTimes onClick={ () => onDelete(todo.id) } style={{ color: "red", cursor: "pointer" }} />
        </div>
    );
}

export default Todo;