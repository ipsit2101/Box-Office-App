import React, { useReducer } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { apiGet } from "../Misc/config";

const initialState = {
  show: null,
  isLoading: true,
  error: null,
}

const reducer = (prevState, action) => {
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

const ShowPage = () => {

  const { id } = useParams();
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);
  useEffect(() => {      // this react hook fires the callback function everytime when anything inside the dependency 
  // array changes
    let isMounted = true;  // useEffect fires the callback function only after the component is mounted

    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(result => {

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

  }, [id]);

  console.log(state.show);
  if (state.isLoading) {
    return <div>Data is being loaded</div>
  }
  if (state.error) {
    return <div>Error Ocurred: {state.error}</div>
  }
  return (
    <div>
      this is show page
    </div>
  )
};

export default ShowPage;
