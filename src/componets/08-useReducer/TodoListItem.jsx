import React from 'react'

export const TodoListItem = ({ handleDelete, handleToggle , todo, i}) => {
    return (
        <li
            className={`list-group-item d-flex justify-content-between align-items-center`}
        >
            <p
                className={`m-0 ${todo.done && 'done'}`}
                onClick={() => handleToggle(todo.id)}
            >
                {i + 1} {todo.description}
            </p>
            <button
                className="btn btn-dangger"
                onClick={() => handleDelete(todo.id)}
            >
                Borrar
            </button>
        </li>
    )
}
