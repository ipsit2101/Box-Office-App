import React, { useEffect, useState } from 'react'
import { apiGet } from '../Misc/config';
import { useShows } from '../Misc/CustomHooks';
import MainPageLayout from '../My Components/MainPageLayout';
import ShowGrid from '../My Components/Shows/ShowGrid';
import CustomResults from './CustomResults';

const Starred = () => {

  const [starred] = useShows();
  
  const [isLoading, setIsLoading] = useState(true);
  const [starredShowsList, setStarredShows] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (starred && starred.length > 0) {

      const promises = starred.map(item => apiGet(`/shows/${item}`));

      Promise.all(promises).then(apiData => apiData.map(show => ({show})))
      .then(results => {
        console.log(results);
        setStarredShows(results);
        setIsLoading(false);

      }).catch(error => {
        setError(error.message);
        setIsLoading(false);
      })

    } 
    else {
      setIsLoading(false);
    }
  }, [starred]); 

  return (
    <div>
      <MainPageLayout>            

        {isLoading && <CustomResults text = {'Loading...'} />}
        {!isLoading && !starredShowsList && <CustomResults text = {'No Starred Shows'} />}
        {!isLoading && error && 
          <div>
            Error Occured: {error}
          </div>   
        }
        {!isLoading && !error && starredShowsList && <ShowGrid data = {starredShowsList} />}

      </MainPageLayout>
    </div>
  )
}

export default Starred;
