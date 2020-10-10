import React, { useContext } from "react";
import { IMAGE_URL_200 } from "../constants/urls";
import { GlobalContext } from "../context/GlobalState";
import {
  ADD_WATCHLIST,
  ADD_WATCHED,
  ON_WATCHLIST,
  ON_WATCHED,
  VIEW_BUTTON,
} from "../constants/lang";
import { Link } from "react-router-dom";
import { MOVIE_PATH } from "../constants/routes";

export const ResultCard = ({ movie }) => {
  const {
    addMovieToWatchList,
    watchList,
    watched,
    addMovieToWatched,
  } = useContext(GlobalContext);
  let storedMovie = watchList.find((data) => data.id === movie.id);
  let storedMovieWatched = watched.find((data) => data.id === movie.id);

  const watchListDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;
  const watchListText = storedMovie
    ? ON_WATCHLIST
    : storedMovieWatched
    ? ON_WATCHLIST
    : ADD_WATCHLIST;
  const watchedDisabled = storedMovieWatched ? true : false;
  const watchedText = storedMovieWatched ? ON_WATCHED : ADD_WATCHED;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img src={IMAGE_URL_200 + movie.poster_path} alt={movie.title} />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date ? movie.release_date.substring(0, 4) : "NA"}
          </h4>
        </div>
        <div className="controls">
          <button
            className="btn"
            disabled={watchListDisabled}
            onClick={() => {
              addMovieToWatchList(movie);
            }}
          >
            {watchListText}
          </button>
          <button
            className="btn"
            disabled={watchedDisabled}
            onClick={() => {
              addMovieToWatched(movie);
            }}
          >
            {watchedText}
          </button>
          <Link to={MOVIE_PATH + `/${movie.id}`} className="btn">
            {VIEW_BUTTON}
          </Link>
        </div>
      </div>
    </div>
  );
};
