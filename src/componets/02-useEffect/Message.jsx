import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
        
        const mouseEvent = (e) =>{
            const cors = { x: e.x, y: e.y }
            console.log(cors);
        }

        window.addEventListener('mousemove', mouseEvent);
        
        return () => {
            window.removeEventListener('mousemove', mouseEvent);
        }
    }, []);

    return (
        <div>
            <h3>Eres Genial!!</h3>
        </div>
    )
}
