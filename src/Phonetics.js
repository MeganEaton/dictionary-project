import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        <i class="fa-solid fa-ear-listen"></i>
      </a>
      <span>{props.phonetic.text}</span>
    </div>
  );
}
