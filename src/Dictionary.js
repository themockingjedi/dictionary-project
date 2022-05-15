import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(" ");
  const [result, setResult] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function findDef(response) {
    setResult(response.props.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(findDef);
  }

  function keywordUpdate(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    findDef();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section className="submit-word">
          <form onSubmit={search} className="form-control-lg">
            <input
              type="search"
              defaultValue={props.defaultWord}
              onChange={keywordUpdate}
              placeholder="Define a word"
            />
          </form>
        </section>
        <Results results={result} />
      </div>
    );
  } else {
    load();
  }
}
