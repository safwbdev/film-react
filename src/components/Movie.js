import React, { useState, useEffect, useContext } from "react";
import { FIND_URL } from "../constants/urls";
import { IMAGE_URL_1280, MISSING_IMAGE } from "../constants/urls";
import { GlobalContext } from "../context/GlobalState";
import {
  ON_WATCHED,
  ADD_WATCHED,
  ON_WATCHLIST,
  ADD_WATCHLIST,
} from "../constants/lang";

export const Movie = (props) => {
  const [movie, setMovie] = useState();
  const movieUrl = FIND_URL(props.match.params.id);
  const {
    addMovieToWatchList,
    watchList,
    watched,
    addMovieToWatched,
  } = useContext(GlobalContext);

  useEffect(() => {
    loadData();
  });

  const loadData = async () => {
    await fetch(movieUrl)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((err) => {
        console.log(err);
      });
  };
  if (movie) {
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

    const bgImage = movie.backdrop_path
      ? IMAGE_URL_1280 + movie.backdrop_path
      : MISSING_IMAGE;

    return (
      <div
        className="movie-page "
        style={{ backgroundImage: "url(" + bgImage + ")" }}
      >
        <div className="overlay"></div>
        <div className="details">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                {movie.poster_path ? (
                  <img
                    src={IMAGE_URL_1280 + movie.poster_path}
                    alt={movie.title}
                    className="fullWidth"
                  />
                ) : (
                  <div className="filler-poster"></div>
                )}
              </div>
              <div className="col-md-9">
                <h1>
                  {movie.title}
                  <span className="btn score">{movie.vote_average}</span>
                </h1>
                {movie.tagline ? (
                  <h4 className="tagline">{`"${movie.tagline}"`}</h4>
                ) : null}
                <br />
                <h5>Genres</h5>

                {movie.genres.map((data, index) => {
                  return (
                    <span key={index} className="badge badge-pill badge-light">
                      {data.name}
                    </span>
                  );
                })}
                <br />
                <br />

                <h5>Sypnosis</h5>
                <p>{movie.overview}</p>
                <p>Runtime: {movie.runtime} minutes</p>
                <p>Release Date: {movie.release_date}</p>
                <p>
                  Revenue :{" "}
                  {movie.revenue !== 0
                    ? `$${movie.revenue.toLocaleString("en-US")}`
                    : "NA"}
                </p>
                <p>
                  Budget :{" "}
                  {movie.budget !== 0
                    ? `$${movie.budget.toLocaleString("en-US")}`
                    : "NA"}
                </p>

                <div className="controls">
                  <button
                    className="btn"
                    disabled={watchListDisabled}
                    onClick={() => {
                      addMovieToWatchList(movie);
                    }}
                  >
                    {watchListText}
                  </button>{" "}
                  <button
                    className="btn"
                    disabled={watchedDisabled}
                    onClick={() => {
                      addMovieToWatched(movie);
                    }}
                  >
                    {watchedText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="movie-page">
        <div className="container">
          <h1>Loading</h1>
        </div>
      </div>
    );
  }
};
