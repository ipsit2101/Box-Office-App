import { useEffect, useReducer } from "react";

function ShowsReducer(prevState, action) {
    switch(action.type) {
        case 'ADD': {
            return [...prevState, action.showId];
        }
        case 'REMOVE': {
            return prevState.filter(item => item !== action.showId);
        }
        default: return prevState;
    }
}


function usePersistedReduer(reducer, initialState, key) {

    const [state, dispatch] = useReducer(reducer, initialState, (initial) => {
        const persisted = localStorage.getItem(key);

        return persisted ? JSON.parse(persisted) : initial;  // when we store data in local storage in browser, it is stored in 
        //strings and to get Objects from strings, we use JSON.parse() method
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));  // JSON.stringify() converts JS objects to strings to store on the local storage in browser
    }, [state, key]);

    return [state, dispatch];
}

export function useShows(key) {
    return usePersistedReduer(ShowsReducer, [], key);
}