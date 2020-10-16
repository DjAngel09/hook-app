import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

    const [{ description }, handleInputChange, resetForm] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {


        if (description.trim().length <= 1) {
            return;
        }

        e.preventDefault();
        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false
        }

        handleAddTodo(newTodo);

        resetForm();

    }

    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="description"
                    placeholder="Aprender..."
                    autoComplete="false"
                    className="form-control"
                    value={description}
                    onChange={handleInputChange}
                />

                <button
                    type='submit'
                    className="btn btn-outline-primary mt-3 btn-block"
                >
                    Agregar
                </button>
            </form>
        </>
    )
}
