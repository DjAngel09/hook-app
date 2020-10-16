import React from 'react'
import { useContext } from 'react'
import { userContext } from './UserContext'

export const HomePage = () => {

    const {user} = useContext( userContext )

    console.log(user);

    return (
        <div>
            <h1>Home</h1>
            <hr/>

            <pre>
                { JSON.stringify( user, null, 3 ) }
            </pre>

        </div>
    )
}
