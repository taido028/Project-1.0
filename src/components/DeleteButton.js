import { useState, useCallback } from 'react';

export const DeleteButton = ({children, onClick}) => {

    const [ state, setState ] = useState(0)

    const setState0 = useCallback(() => setState(0))
    const setState1 = useCallback(() => setState(1))

    if (state === 0) {
        return (
            <button className='btn btn-sm btn-warning' onClick={setState1}>{children}</button>
        )
    } 
    
    else {
        return (
            <>
                <button className='btn btn-sm btn-warning' onClick={setState0}>{children}</button>
                <button className='btn btn-sm btn-danger' onClick={onClick}>{children}</button>
            </>
        )
    }
}
