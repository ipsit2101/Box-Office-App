import React, { useReducer } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { apiGet } from "../Misc/config";
import ShowContent from "./ShowContent";
import ShowDetails from "./ShowDetails";
import ShowSeasons from "./ShowSeasons";
import ShowCasts from "./ShowCasts";

const initialState = {
  show: null,
  isLoading: true,
  error: null,
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
      <ShowContent image = {state.show.image} name = {state.show.name} rating = {state.show.rating} summary = {state.show.summary} genres = {state.show.genres}/>
      <div>
        <h2>Details</h2>
        <ShowDetails status = {state.show.status} network = {state.show.network} premiered = {state.show.premiered} />
      </div>
      <div>
        <h2>Seasons</h2>
        <ShowSeasons seasons = {state.show._embedded.seasons} />
      </div>
      <div>
        <h2>Casts</h2>
        <ShowCasts cast = {state.show._embedded.cast} />
      </div>
    </div>
  )
};

export default ShowPage;
