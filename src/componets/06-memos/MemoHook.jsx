import React, { useState } from 'react'
import { useMemo } from 'react';
import { useCounter } from '../../hooks/useCounter'

export const MemoHook = () => {

    const { counter, increment } = useCounter( 5000 );
    const [show, setShow] = useState(true);

    const procesoPesado = ( incremento ) => {
        for (let i = 0; i < incremento; i++) {
            
            console.log('Ahi vamos ');
            
        }

        return `${ incremento } interacciones realizadas.`
    }

    const memoProcesoPesado = useMemo(() => procesoPesado( counter ), [ counter ])

    return (
        <div>
            <h3>MemoHook: <small>{ counter }</small></h3>
            <hr/>

            <p>{ memoProcesoPesado }</p>

            <button 
                className="btn btn-outline-primary"
                onClick={increment}
            >
                +1
            </button>

            <button 
                className="btn btn-primary ml-3"
                onClick={ ()=>{
                    setShow(!show)
                }}
            >
                { show ? `Ocultar ${JSON.stringify( show )}` : `Mostrar ${JSON.stringify( show )}` }
            </button>
        </div>
    )
}
