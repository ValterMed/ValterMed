import { createAction } from 'redux-starter-kit';

export const updateDate = createAction('updateDate');
export const getPremieres = createAction('getPremieres');

//actions to next premieres:
export const getNextPremieres = createAction('getNextPremieres');

//actions to credits:
export const GET_CREDITS = createAction('GET_CREDITS');
export const GET_CREDITS_FULFILLED = createAction('GET_CREDITS_FULFILLED');
export const GET_CREDITS_PENDING = createAction('GET_CREDITS_PENDING');
export const GET_CREDITS_REJECTED = createAction('GET_CREDITS_REJECTED');

//actions to details movie:
export const GET_MOVIE_DETAILS = createAction('GET_MOVIE_DETAILS');
export const GET_MOVIE_DETAILS_FULFILLED = createAction('GET_MOVIE_DETAILS_FULFILLED');
export const GET_MOVIE_DETAILS_PENDING = createAction('GET_MOVIE_DETAILS_PENDING');
export const GET_MOVIE_DETAILS_REJECTED = createAction('GET_MOVIE_DETAILS_REJECTED');

//actions for search
export const getSearch = createAction('getSearch');
export const clearSearch = createAction('clearSearch');