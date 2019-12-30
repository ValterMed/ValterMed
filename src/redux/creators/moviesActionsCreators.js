import { getCredits } from "../actions/moviesActions";
import { getMovieDetails } from "../actions/moviesActions";
import { getPremieres } from "../actions/moviesActions";
import { getNextPremieres } from "../actions/moviesActions";
import { getSearch } from "../actions/moviesActions";

const UrlBase = "https://api.themoviedb.org/3/movie/";
const UrlSearch = "https://api.themoviedb.org/3/search/movie";
const key = "f5b812340cf6ce25dc4cf8d4722c5f56&language=es";

export const updatePremiere = () => dispatch => {
  fetch(`${UrlBase}now_playing?api_key=${key}`)
    .then(data => data.json())
    .then(premiere => {
      dispatch(getPremieres({ data: premiere }));
    });
};

export const updateNextPremieres = () => dispatch => {
  fetch(`${UrlBase}upcoming?api_key=${key}`)
    .then(data => data.json())
    .then(next_premiere => {
      dispatch(getNextPremieres({ data: next_premiere }));
    });
};

export const obtainCredits = movieID => dispatch => {
  fetch(`${UrlBase}${movieID}/credits?api_key=${key}`)
    .then(data => data.json())
    .then(credits => {
      dispatch(getCredits({ data: credits }));
    });
};

export const obtainMovieDetails = movieID => dispatch => {
  fetch(`${UrlBase}${movieID}?api_key=${key}`)
    .then(data => data.json())
    .then(movie_details => {
      dispatch(getMovieDetails({ data: movie_details }));
    });
};

export const updateSearch = text => dispatch => {
  fetch(`${UrlSearch}?query=${text}&api_key=${key}`)
    .then(data => data.json())
    .then(found_movie => {
      dispatch(getSearch({ data: found_movie }));
    });
};

