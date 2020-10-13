import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.focus();
    }

    return (
        <div>
            <h1>Focus screen</h1>
            <hr/>
            <input 
                ref={ inputRef }
                type="text"
                className="form-control"
                placeholder="Su nombre"
            />

            <button
                className="btn btn-outline-primary mt-5"
                onClick={ handleClick }
            >Focus</button>
        </div>
    )
}
