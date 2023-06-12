import { createContext, useState } from 'react';

export const DestinationContext = createContext();

export const DestinationProvider = ({ children }) => {

    const [destination, setDestination] = useState({
        id: null,
        user: null,
        type: null,
        coords: {
            start: null,
            midpoint: null,
            end: null,
        },
        categories: null, // tags will be an array of objects
        points: []
    });

    return (
        <DestinationContext.Provider value={[destination, setDestination]}>
            {children}
        </DestinationContext.Provider>
    )
}