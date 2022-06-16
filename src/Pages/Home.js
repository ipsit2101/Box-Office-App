import React from "react";
import { useState } from "react";
import MainPageLayout from "../My Components/MainPageLayout";
import { apiGet } from "../Misc/config";
import ShowGrid from "../My Components/Shows/ShowGrid";
import ActorGrid from "../My Components/Actor/ActorGrid";

const Home = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState(null);
  const [searchOption, setsearchOption] = useState("shows");

  const onSearch = () => {
    // function to search for the given query

    apiGet(`/search/${searchOption}?q=${input}`).then((result) => {
      setResults(result);
      console.log(result); // get data from remote API
    });
  };

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      // fires the event only when we press Enter
      onSearch();
    }
  };

  const changeSearchOption = (option) => {
    setsearchOption(option);
  };
  console.log(searchOption);

  const RenderResults = () => {
    if (results && results.length === 0) {
      return <div>No Results</div>;
    }
    
    if (results && results.length > 0) {

      return results[0].show
        ? <ShowGrid data  = {results} /> : <ActorGrid data = {results} />
    }

    return null;
  };

  return (
    <div>
      <MainPageLayout>
        <input
          type="text"
          onChange={onInputChange}
          onKeyDown={onKeyDown}
          value={input}
        />
        <div>
          <label htmlFor="show-search">
            Shows
            <input
              id="show-search"
              type="radio"
              value="shows"
              checked={searchOption === "shows"}
              onChange={() => changeSearchOption("shows")}
            />
          </label>
          <label htmlFor="actors-search">
            Actors
            <input
              id="actors-search"
              type="radio"
              value="people"
              checked={searchOption === "people"}
              onChange={() => changeSearchOption("people")}
            />
          </label>
        </div>

        <button type="button" onClick={onSearch}>
          Search
        </button>

        {RenderResults()}
      </MainPageLayout>
    </div>
  );
};

export default Home;
