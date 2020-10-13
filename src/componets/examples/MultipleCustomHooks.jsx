import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFecth } from '../../hooks/useFecth'

export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1);

    const {loading, data} = useFecth( `https://www.breakingbadapi.com/api/quotes/${counter}` );
    const { author, quote } = !!data && data[0];

    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr/>

            {
                loading 
                ?
                (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                )
                :
                (
                    <blockquote className="blockqout text-right">
                        <p className="mb-0">{ quote }</p>
                        <footer className=" blockquote-footer">{ author }</footer>
                    </blockquote>
                )
            }

            <button 
                className='btn btn-primary'
                onClick={increment}
            >
                Siguiente Frase
            </button>

        </div>
    )
}
