import React from 'react'
import { useRef } from 'react';
import { useLayoutEffect } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFecth } from '../../hooks/useFecth'

import './layaut.css'

export const Layaut = () => {

    const { counter, increment } = useCounter(1);

    const { data } = useFecth(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote } = !!data && data[0];

    const pTag = useRef();

    useLayoutEffect(() => {
        console.log( pTag.current.getBoundingClientRect() );
    }, [quote])

    return (
        <div>
            <h1>Layaut Effects</h1>
            <hr />

            <blockquote className="blockqout text-right">
                <p 
                    className="mb-0"
                    ref={pTag}
                >
                    {quote}
                </p>
            </blockquote>
            <button
                className='btn btn-primary'
                onClick={increment}
            >
                Siguiente Frase
            </button>

        </div>
    )
}
