import { FaTimes } from 'react-icons/fa';

const Todo = ({ todo, toggleTodo, onDelete }) => {

    return (
        <div className={`row ${todo.completed ? 'done' : ''}`}>
            <label>
                <input className='input' type="checkbox" defaultChecked={ todo.completed } onChange={ () => toggleTodo(todo.id) } />
                { todo.name }
            </label>
            <FaTimes onClick={ () => onDelete(todo.id) } style={{ color: "red", cursor: "pointer" }} />
        </div>
    );
}

export default Todo;