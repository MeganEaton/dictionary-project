import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(" ");

  function handleKeywordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }
  function search(event) {
    event.preventDefault();
    alert(`Searching for the definition of "${keyword}"...`);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
