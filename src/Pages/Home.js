import React from 'react'
import { useState } from 'react';
import MainPageLayout from '../My Components/MainPageLayout';

const Home = () => {
  const [input, setInput] = useState('');

  const onSearch = () => {   // fucnction to search for the given query

    const data = fetch(`https://api.tvmaze.com/search/shows?q=${input}`);  // get data from remote API

    data.then(response => response.json());
    data.then(result => {
      console.log(result);
    });
    data.catch(error => {
      console.log(error);
    });
  }

  const onInputChange  = (event) => {
    setInput(event.target.value);
    console.log(event.target.value);
  }

  const onKeyDown = (event) => {
    if (event.keyCode === 13) {   // fires the event only when we press Enter
      onSearch();
    }
    console.log(event.keyCode);
  }

  return (
    <div>
      <MainPageLayout>
        <input type="text" onChange={onInputChange} onKeyDown = {onKeyDown} value = {input} />
        <button type = "button" onClick={onSearch}>Search</button>
      </MainPageLayout>
    </div>
  );
}

export default Home;
