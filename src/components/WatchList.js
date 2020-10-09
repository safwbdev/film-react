import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";
import { WATCHLIST_TITLE, NO_MOVIES, MOVIE, MOVIES } from "../constants/lang";

export const WatchList = () => {
  const { watchList } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">{WATCHLIST_TITLE}</h1>
          <span className="count-pill">
            {watchList.length} {watchList.length === 1 ? MOVIE : MOVIES}
          </span>
        </div>
        {watchList.length > 0 ? (
          <div className="movie-grid">
            {watchList.map((movie, index) => {
              return <MovieCard key={index} movie={movie} type="watchList" />;
            })}
          </div>
        ) : (
          <h2 className="no-movies">{NO_MOVIES}</h2>
        )}
      </div>
    </div>
  );
};
