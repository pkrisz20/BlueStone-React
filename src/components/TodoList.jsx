import Todo from './Todo';

const TodoList = ({ todos, toggleTodo }) => {
    return (
        <div className="todos-list">
            {todos.map(todo => {
                return <Todo key={ todo.id } todo={ todo } toggleTodo={ toggleTodo } />
            })}
        </div>
    );
}

export default TodoList;