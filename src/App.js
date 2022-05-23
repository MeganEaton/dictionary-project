import React from "react";
import "./App.css";
import logo from "./logo.png";

import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo"></img>
      </header>
      <main>
        <Dictionary defaultKeyword="bird" />
      </main>
      <footer>
        This app was made by{" "}
        <a href="https://www.meganeaton.me" target="_blank" rel="noreferrer">
          Megan Eaton
        </a>{" "}
        and the code can be viewed{" "}
        <a
          href="https://github.com/MeganEaton/dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
      </footer>
    </div>
  );
}
