import React from "react";
import { IMAGE_URL_200 } from "../constants/urls";
import MovieControls from "./MovieControls";

export const MovieCard = ({ movie, type }) => {
  return (
    <div className="movie-card">
      <div className="overlay"></div>
      {movie.poster_path ? (
        <img src={IMAGE_URL_200 + movie.poster_path} alt={movie.title} />
      ) : (
        <div className="filler-poster"></div>
      )}
      <MovieControls type={type} movie={movie} />
    </div>
  );
};
