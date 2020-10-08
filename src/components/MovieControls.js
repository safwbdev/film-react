import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

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
        </>
      )}
    </div>
  );
}
