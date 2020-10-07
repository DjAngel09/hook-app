import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter();

    return (
        <>
            <h1>Counter With Hook: {state}</h1>
            <button className="btn" onClick={ () => increment(2) }>+1</button>

            <button className="btn" onClick={ reset } >Reset</button>

            <button className="btn" onClick={ () => decrement(2) }>-1</button>
        </>
    )
}