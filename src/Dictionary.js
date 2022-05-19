import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultWord);
  const [result, setResult] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function findDef(response) {
    setResult(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(findDef);

    let pexKey = "563492ad6f91700001000001e8165cb1dd8946fcae5d0776f0362b88";
    let pexUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;

    axios
      .get(pexUrl, { headers: { Authorization: `Bearer ${pexKey}` } })
      .then(handlePexResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handlePexResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }

  function keywordUpdate(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section className="submit-word">
          <h2>What would you like to look up?</h2>
          <form onSubmit={handleSubmit} className="form-control-lg">
            <input
              type="search"
              defaultValue={props.defaultWord}
              onChange={keywordUpdate}
              placeholder="Define a word"
            />
          </form>
          <p>i.e. book, mask, phone, console, etc.</p>
        </section>
        <Results results={result} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
  }
}
