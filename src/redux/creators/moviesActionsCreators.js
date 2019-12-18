import axios from "axios";
import { GET_PREMIERES } from "../actions/moviesActions";
import { GET_NEXT_PREMIERES } from "../actions/moviesActions";
import { GET_CREDITS } from "../actions/moviesActions";
import { GET_MOVIE_DETAILS } from "../actions/moviesActions";
import { GET_SEARCH } from "../actions/moviesActions";
import { CLEAR_SEARCH } from "../actions/moviesActions";
import { updateDate } from "../actions/moviesActions";

const UrlBase = "https://api.themoviedb.org/3/movie/";
const UrlSearch = "https://api.themoviedb.org/3/search/movie";
const key = "f5b812340cf6ce25dc4cf8d4722c5f56&language=es";

export const getDate = () => dispatch => {
  console.log("estamos en creators")
  dispatch(updateDate({ newDate: new Date(), newMessage: "update redux" }));
};

// export const getPremieres = () => dispatch => {
//   dispatch({
//     type: type.GET_PREMIERES,
//     payload: axios.get(`${UrlBase}now_playing?api_key=${key}`)
//   });
// };

// export const getNextPremieres = () => dispatch => {
//   dispatch({
//     type: type.GET_NEXT_PREMIERES,
//     payload: axios.get(`${UrlBase}upcoming?api_key=${key}`)
//   });
// };

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

// export const getSearch = text => dispatch => {
//   dispatch({
//     type: type.GET_SEARCH,
//     payload: axios.get(`${UrlSearch}?query=${text}&api_key=${key}`)
//   });
// };

// export const clearSearch = () => {
//   return {
//     type: type.CLEAR_SEARCH
//   };
// };
