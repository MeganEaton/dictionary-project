import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos.js";

import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }
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

    let pexelsApiKey =
      "563492ad6f91700001000001445be913c44542cc8798cf5b32d979b4";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
            Some sugested words: "mountain", "dog", "sunset", "book"
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
