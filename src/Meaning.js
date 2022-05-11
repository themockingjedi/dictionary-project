import React from "react";
import Synonyms from "./Synonyms";

import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  if (props.meaning) {
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        <section className="individual">
          {props.meaning.definitions.map(function (definition, index) {
            return (
              <div key={index}>
                <p>
                  <strong>Definition:</strong> {definition.definition}
                </p>
                <strong>Example:</strong> <em>{definition.example}</em>
                <Synonyms synonyms={definition.synonyms} />
              </div>
            );
          })}
        </section>
      </div>
    );
  }
}
