import React, { useContext } from "react";
import { IMAGE_API_200 } from "../constants/urls";
import { GlobalContext } from "../context/GlobalState";

export const ResultCard = ({ movie }) => {
  const { addMovieToWatchList, watchList } = useContext(GlobalContext);
  let storedMovie = watchList.find((data) => data.id === movie.id);

  const watchListDisabled = storedMovie ? true : false;
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img src={IMAGE_API_200 + movie.poster_path} alt={movie.title} />
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
            Add to Watch List
          </button>
        </div>
      </div>
    </div>
  );
};
