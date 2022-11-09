import Todo from './Todo';

const TodoList = ({ todos, toggleTodo, onDelete }) => {
    return (
        <div className="todos-list">
            {todos.map(todo => {
                return <Todo key={ todo.id } onDelete={onDelete} todo={ todo } toggleTodo={ toggleTodo } />
            })}
        </div>
    );
}

export default TodoList;