import type from './moviesActions';
import axios from 'axios';

const UrlBase = "https://api.themoviedb.org/3/movie/";
const UrlSearch = "https://api.themoviedb.org/3/search/movie";
const key = "f5b812340cf6ce25dc4cf8d4722c5f56&language=es";

export const getPremieres = () => dispatch => {
  dispatch ({ //dispatch permite despachar una accion de manera asincronica
    type: type.GET_PREMIERES,
    payload: axios.get(`${UrlBase}now_playing?api_key=${key}`)
  })
}

export const getNextPremieres = () => dispatch => {
  dispatch ({
    type: type.GET_NEXT_PREMIERES,
    payload: axios.get(`${UrlBase}upcoming?api_key=${key}`)
  })
}

export const getCredits = (movieID) => dispatch => {
  dispatch ({
    type: type.GET_CREDITS,
    payload: axios.get(`${UrlBase}${movieID}/credits?api_key=${key}`)
  })
}

export const getMovieDetails = (movieID) => dispatch => {
  dispatch ({
    type: type.GET_MOVIE_DETAILS,
    payload: axios.get(`${UrlBase}${movieID}?api_key=${key}`)
  })
}

export const getSearch = (text) => dispatch => {
  dispatch ({
    type: type.GET_SEARCH,
    payload: axios.get(`${UrlSearch}?query=${text}&api_key=${key}`)
  })
}

export const clearSearch = () => {
  return {
    type: type.CLEAR_SEARCH
  }
}