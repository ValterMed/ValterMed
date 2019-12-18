import axios from "axios";
import { GET_CREDITS } from "../actions/moviesActions";
import { GET_MOVIE_DETAILS } from "../actions/moviesActions";
import { updateDate } from "../actions/moviesActions";
import { getPremieres } from "../actions/moviesActions";
import { getNextPremieres } from "../actions/moviesActions";
import { getSearch } from "../actions/moviesActions";
import { clearSearch } from "../actions/moviesActions";

const UrlBase = "https://api.themoviedb.org/3/movie/";
const UrlSearch = "https://api.themoviedb.org/3/search/movie";
const key = "f5b812340cf6ce25dc4cf8d4722c5f56&language=es";

// export const getDate = () => function (dispatch) {
//   console.log("estamos en creators");
//   const newDate = new Date();
//   dispatch(updateDate({ newDate: newDate.toString(), newMessage: "update redux" }));
// };

export const updatePremiere = () => dispatch => {
  fetch(`${UrlBase}now_playing?api_key=${key}`)
    .then(data => data.json())
    .then(premiere => {
      console.log(premiere);
      dispatch(getPremieres({ data: premiere }));
    });
};

export const updateNextPremieres = () => dispatch => {
  fetch(`${UrlBase}upcoming?api_key=${key}`)
    .then(data => data.json())
    .then(next_premiere => {
      console.log(next_premiere);
      dispatch(getNextPremieres({ data: next_premiere }));
    });
};

export const updateSearch = text => dispatch => {
  fetch(`${UrlSearch}?query=${text}&api_key=${key}`)
    .then(data => data.json())
    .then(found_movie => {
      console.log(found_movie);
      dispatch(getSearch({ data: found_movie }));
    });
};

export const searchReset = () => {
  clearSearch()
};

// export const getCredits = movieID => dispatch => {
//   dispatch({
//     type: type.GET_CREDITS,
//     payload: axios.get(`${UrlBase}${movieID}/credits?api_key=${key}`)
//   });
// };

// export const getMovieDetails = movieID => dispatch => {
//   dispatch({
//     type: type.GET_MOVIE_DETAILS,
//     payload: axios.get(`${UrlBase}${movieID}?api_key=${key}`)
//   });
// };

