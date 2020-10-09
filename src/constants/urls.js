import { API_KEY } from "./api";
export const IMAGE_URL_1280 = "https://image.tmdb.org/t/p/w1280";
export const IMAGE_URL_200 = "https://image.tmdb.org/t/p/w200";
export const MISSING_IMAGE =
  "https://images.pexels.com/photos/133070/pexels-photo-133070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
export const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=`;
export const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
