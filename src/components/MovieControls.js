import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { MOVIE_PATH } from "../constants/routes";

export default function MovieControls({ movie, type }) {
  const {
    removeMovieFromWatchList,
    addMovieToWatched,
    removeFromWatched,
    moveToWatchList,
  } = useContext(GlobalContext);
  return (
    <div className="inner-card-controls">
      {type === "watchList" && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
            <i className="fa fa-eye"></i>
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchList(movie.id)}
          >
            <i className="fa fa-times"></i>
          </button>
          <Link to={`${MOVIE_PATH}/${movie.id}`} className="ctrl-btn">
            <i className="fa fa-film" aria-hidden="true"></i>
          </Link>
        </>
      )}

      {type === "watched" && (
        <>
          <button className="ctrl-btn" onClick={() => moveToWatchList(movie)}>
            <i className="fa fa-eye-slash"></i>
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removeFromWatched(movie.id)}
          >
            <i className="fa fa-times"></i>
          </button>
          <Link to={`${MOVIE_PATH}/${movie.id}`} className="ctrl-btn">
            <i className="fa fa-film" aria-hidden="true"></i>
          </Link>
        </>
      )}
    </div>
  );
}
