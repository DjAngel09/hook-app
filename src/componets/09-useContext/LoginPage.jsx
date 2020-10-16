import React from 'react'
import { useContext } from 'react'
import { userContext } from './UserContext'

export const LoginPage = () => {

    const { setUser } = useContext(userContext);


    return (
        <div>
            <h1>Login</h1>
            <hr />

            <button
                className="btn btn-outline-primary"
                onClick={() => setUser({
                    id: '123',
                    name: 'angel',
                    email: 'joseam7112@gmail.com'
                })}
            >
                Agregar
            </button>
        </div>
    )
}
