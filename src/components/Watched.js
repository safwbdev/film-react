import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";
import { WATCHED_TITLE, NO_MOVIES, MOVIE, MOVIES } from "../constants/lang";

export const Watched = () => {
  const { watched } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">{WATCHED_TITLE}</h1>
          <span className="count-pill">
            {watched.length} {watched.length === 1 ? MOVIE : MOVIES}
          </span>
        </div>
        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie, index) => {
              return <MovieCard key={index} movie={movie} type="watched" />;
            })}
          </div>
        ) : (
          <h2 className="no-movies">{NO_MOVIES}</h2>
        )}
      </div>
    </div>
  );
};
