import React from 'react'

const Todo = ({ todo }) => {
    return (
        <div>
            <label>
                <input type="checkbox" defaultChecked={todo.completed} />
                {todo.name}
            </label>
        </div>
    )
}

export default Todo
