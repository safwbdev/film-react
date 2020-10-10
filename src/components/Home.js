import React, { useState, useEffect } from "react";
import { FEATURED_API } from "../constants/urls";
import { MovieCard } from "./MovieCard";

export const Home = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    loadData();
  });

  const loadData = async () => {
    await fetch(FEATURED_API)
      .then((response) => response.json())
      .then((data) => setMovie(data.results))
      .catch((err) => {
        console.log(err);
      });
  };

  const FeaturedFilms = () => {
    return (
      <>
        <h3>Featured</h3>
        <div className="movie-grid">
          {movie &&
            movie.map((data, index) => {
              return <MovieCard key={index} type="home" movie={data} />;
            })}
        </div>
      </>
    );
  };

  return (
    <div className="home-page">
      <div className="container">
        <FeaturedFilms />
      </div>
    </div>
  );
};
