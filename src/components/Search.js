import React, { useState } from "react";
import { ResultCard } from "./ResultCard";
import { SEARCH_PLACEHOLDER } from "../constants/lang";
import { SEARCH_URL } from "../constants/urls";

export const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(SEARCH_URL + e.target.value)
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder={SEARCH_PLACEHOLDER}
              value={query}
              onChange={onChange}
            />
          </div>
          {results.length > 0 && (
            <ul className="results">
              {results.map((movie, index) => {
                return (
                  <li key={index}>
                    <ResultCard movie={movie} />
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
