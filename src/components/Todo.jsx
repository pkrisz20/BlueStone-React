const Todo = ({ todo, toggleTodo }) => {
    function handleTodoClick() {
        toggleTodo(todo.id);
    }

    return (
        <div className={"row " + (todo.completed ? "done" : "")}>
            <label>
                <input className='input' type="checkbox" defaultChecked={ todo.completed } onChange={ handleTodoClick } />
                { todo.name }
            </label>
        </div>
    );
}

export default Todo;