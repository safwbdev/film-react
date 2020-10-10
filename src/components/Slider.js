import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MovieCard } from "./MovieCard";

const GetSlider = ({ movie, title }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    // initialSlide: 0,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="slider-row row">
      <div className="col-md-12">
        <h2>{title}</h2>
        <Slider {...settings}>
          {movie &&
            movie.map((data, index) => {
              return <MovieCard key={index} type="home" movie={data} />;
            })}
        </Slider>
      </div>
    </div>
  );
};
// }
export default GetSlider;
