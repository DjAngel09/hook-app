import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState

    useEffect( () => {
        // console.log('hey');
    }, []);

    useEffect( () => {
        // console.log('formState cambio');
    }, [formState]);

    useEffect( ()=>{
        // console.log('email cambio');
    }, [email]);
    
    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [ target.name ]: target.value
        })
    }

    return (
        <div>
            <h1>UseEffect</h1>
            <hr/>
            <div className='form-group'>
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="tu nombre"
                    value={name}
                    onChange={ handleInputChange }
                />
            </div>
            <div className='form-group'>
                <input 
                    type="emial"
                    name="email"
                    className="form-control"
                    placeholder="tu email"
                    value={email}
                    onChange={ handleInputChange }
                />
            </div>
            { (name==='Angel') && <Message/> }
        </div>
    )
}
