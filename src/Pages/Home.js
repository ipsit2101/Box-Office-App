import React from 'react'
import { useState } from 'react';
import MainPageLayout from '../My Components/MainPageLayout';
import { apiGet } from '../Misc/config';

const Home = () => {

  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);

  const onSearch = () => {   // function to search for the given query

    apiGet(`/search/shows?q=${input}`).then(   
      result => {
        setResults(result);
        console.log(result);  // get data from remote API
      }
    );
  }

  const onInputChange  = (event) => {
    setInput(event.target.value);
  }

  const onKeyDown = (event) => {
    if (event.keyCode === 13) {   // fires the event only when we press Enter
      onSearch();
    }
  }

  const RenderResults = () => {
    if (results && results.length === 0) {
      return <div>No Results</div>
    }
    if (results && results.length > 0) {
      return <div>{
          results.map(element => {
            return <div key = {element.show.id}>{element.show.name}</div>
          })
        }</div>
    }
    return null;
  }

  return (
    <div>
      <MainPageLayout>
        <input type="text" onChange={onInputChange} onKeyDown = {onKeyDown} value = {input} />
        <button type = "button" onClick={onSearch}>Search</button>
        {RenderResults()}
      </MainPageLayout>
    </div>
  );
}

export default Home;
