import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";

import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleKeywordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }
  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function load() {
    setLoaded(true);
    search();
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  //api from https://dictionaryapi.dev/

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What would you like to search?</h1>
          <form onSubmit={handleSubmit}>
            <input
              className="sarchSearchbar"
              type="search"
              onChange={handleKeywordChange}
              placeholder={keyword}
            />
            <input className="searchSubmit" type="submit" value="Search" />
          </form>
          <div className="hint">
            Some sugested words: "game", "snow", "sunset", "book"
          </div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
