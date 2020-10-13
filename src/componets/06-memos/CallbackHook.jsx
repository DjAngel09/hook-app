import React, { useState } from 'react'
import { useCallback } from 'react';
import { ShowIncremet } from './ShowIncremet';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10)
    const increment = useCallback(
        (value) => {
            setCounter(c => c + value);
        },
        [setCounter]
    )


    return (
        <div>
            <h1>UseColbackHook</h1>
            <hr />

            <p>{counter}</p>

            <ShowIncremet increment={increment} />
        </div>
    )
}
