import React, { useState, useEffect } from "react";
import { FIND_URL } from "../constants/urls";
import { IMAGE_URL_1280, MISSING_IMAGE } from "../constants/urls";

export const Movie = (props) => {
  const [movie, setMovie] = useState();
  const movieUrl = FIND_URL(props.match.params.id);

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
    console.log(movie);

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
                <p>
                  {movie.genres.map((data, index) => {
                    return <span key={index}>{data.name}, </span>;
                  })}
                </p>
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
          <h1>OOPS</h1>
        </div>
      </div>
    );
  }
};
