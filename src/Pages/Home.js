import React from "react";
import { useState } from "react";
import MainPageLayout from "../My Components/MainPageLayout";
import { apiGet } from "../Misc/config";
import ShowGrid from "../My Components/Shows/ShowGrid";
import ActorGrid from "../My Components/Actor/ActorGrid";
import { useLastQuery, usePersistedSearch } from "../Misc/CustomHooks";
import { RadioInputsWrapper, SearchButtonWrapper, SearchInput } from "../My Components/HomePageStyling/HomeStyles";
import CustomResults from "./CustomResults";

const Home = () => {
  const [input, setInput] = useLastQuery();
  const [results, setResults] = usePersistedSearch();
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
      return <CustomResults text = {'No Results :)'} />;
    }

    if (results && results.length > 0) {
      return results[0].show ? (
        <ShowGrid data={results} />
      ) : (
        <ActorGrid data={results} />
      );
    }

    return null;
  };

  return (
    <MainPageLayout>
      <SearchInput
        placeholder="Type Something"
        type="text"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <RadioInputsWrapper>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="show-search"  
            value="shows"
            checked = {searchOption === "shows"}
            onChange={() => changeSearchOption("shows")}
          />
          <label className="form-check-label" for="show-search">
            Shows
          </label>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="actors-search"
            value="people"
            checked={searchOption === "people"}
            onChange={() => changeSearchOption("people")}
          />
          <label className="form-check-label" for="actors-search">
            Actors
          </label>
        </div>
      </RadioInputsWrapper>

      <SearchButtonWrapper>
        <button type="button" onClick={onSearch}>
          Search
        </button>
      </SearchButtonWrapper>

      {RenderResults()}
    </MainPageLayout>
  );
};

export default Home;
