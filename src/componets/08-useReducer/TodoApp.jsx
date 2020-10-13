import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';

const initialState = [{
    id: new Date().getTime(),
    description: 'aprender react',
    done: false
}]

export const TodoApp = () => {

    const [todos] = useReducer(todoReducer, initialState);

    console.log(todos);

    return (
        <div>
            <h1>Todo App ( {todos.length} )</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <ul className="list-group list-group-flush" >
                        {
                            todos.map((todo, i) => (
                                <li
                                    key={todo.id}
                                    className="list-group-item d-flex justify-content-between align-items-center"
                                >
                                    <p className="m-0">{i + 1} {todo.description}</p>
                                    <button className="btn btn-dangger" >Borrar</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr/>

                        <form action="">
                            <input 
                                type="text"
                                name="description"
                                placeholder="Aprender..."
                                autoComplete="false"
                                className="form-control"
                            />

                            <button 
                                className="btn btn-outline-primary mt-1 btn-block"
                            >
                                Agregar
                            </button>
                        </form>

                </div>
            </div>
        </div>
    )
}
