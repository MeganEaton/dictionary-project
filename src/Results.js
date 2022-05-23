import React from "react";
import Meaning from "./Meaning.js";
import Phonetics from "./Phonetics.js";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section className="restultsWord">
          <h2>{props.results.word}</h2>
          {props.results.phonetics
            .filter(function (phonetic) {
              return phonetic.audio;
            })
            .map(function (phonetic, index) {
              return (
                <div key={index}>
                  <Phonetics phonetic={phonetic} />
                </div>
              );
            })}
        </section>
        <div className="resultsMeaning">
          {props.results.meanings.map(function (meaning, index) {
            return (
              <section key={index}>
                <Meaning meaning={meaning} />
              </section>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
