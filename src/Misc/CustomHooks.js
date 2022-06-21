import { useEffect, useReducer, useState } from "react";
import { apiGet } from "./config";

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

export function useLastQuery(key = 'lastQuery') {
    const [input, setInput] = useState(() => {
        const persisted = sessionStorage.getItem(key);

        return persisted ? JSON.parse(persisted) : ''; 
    });

    function setPersistedInput(newState) {
        setInput(newState);
        sessionStorage.setItem(key, JSON.stringify(newState));
    }

    return [input, setPersistedInput];
}

const reducer = (prevState, action) => {         // useReducer hook which manages multiple states in a component   
    switch(action.type) {
      case 'FETCH_SUCCESS': {
        return { isLoading: false, error: null, show: action.show }
      }
      case 'FETCH_UNSUCCESS': {
        return { ...prevState, isLoading: false, error:  action.error }
      }
      default: return prevState;
    }
}

const useShow = ( showId ) => {
    const [state, dispatch] = useReducer(reducer, {
        show: null, 
        isLoading: true,
        error: null,
    });
    console.log(state);

    useEffect(() => {      // this react hook fires the callback function everytime when anything inside the dependency 
    // array changes
        let isMounted = true;  // useEffect fires the callback function only after the component is mounted

        apiGet(`/shows/${showId}?embed[]=seasons&embed[]=cast`).then(result => {

        if (isMounted) {
            dispatch({ type: 'FETCH_SUCCESS', show: result });
        }
        
        }).catch(err => {
        if (isMounted) {
            dispatch({ type: 'FETCH_UNSUCCESS', error: err.message });
        }
        })
        
        return () => {
            isMounted = false;
        }

    }, [showId]);
    
    return state;
}

export default useShow;