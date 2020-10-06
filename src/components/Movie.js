import React from "react";
import { MISSING_IMAGE, IMAGE_API } from "../constants/urls";
import { MOVIE_OVERVIEW } from "../constants/lang";

function Movie({ title, poster_path, overview, vote_average }) {
  const setVoteClass = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };

  return (
    <div className="movie">
      <img
        src={poster_path ? IMAGE_API + poster_path : MISSING_IMAGE}
        alt={title}
      />
      <div className="movie-info">
        <h3>{title}</h3>
        <span className={`tag ${setVoteClass(vote_average)}`}>
          {vote_average}
        </span>
      </div>

      <div className="movie-over">
        <h2>{MOVIE_OVERVIEW}</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
}

export default Movie;
