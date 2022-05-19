import React from "react";
import Synonyms from "./Synonyms";

import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  if (props.meaning) {
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        <section>
          {props.meaning.definitions.map(function (definition, index) {
            return (
              <div key={index}>
                <p>{definition.definition}</p>
                <em>{definition.example}</em>
                <Synonyms synonyms={definition.synonyms} />
              </div>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
