import { createAction } from 'redux-starter-kit';

export const updateDate = createAction('updateDate');
export const GET_PREMIERES = createAction('GET_PREMIERES');
export const GET_PREMIERES_PENDING = createAction('GET_PREMIERES_PENDING');
export const GET_PREMIERES_FULFILLED = createAction('GET_PREMIERES_FULFILLED');
export const GET_PREMIERES_REJECTED = createAction('GET_PREMIERES_REJECTED');

//actions to next premieres:
export const GET_NEXT_PREMIERES = createAction('GET_NEXT_PREMIERES');
export const GET_NEXT_PREMIERES_FULFILLED = createAction('GET_NEXT_PREMIERES_FULFILLED');
export const GET_NEXT_PREMIERES_PENDING = createAction('GET_NEXT_PREMIERES_PENDING');
export const GET_NEXT_PREMIERES_REJECTED = createAction('GET_NEXT_PREMIERES_REJECTED');

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
export const GET_SEARCH = createAction('GET_SEARCH');
export const GET_SEARCH_FULFILLED = createAction('GET_SEARCH_FULFILLED');
export const GET_SEARCH_PENDING = createAction('GET_SEARCH_PENDING');
export const GET_SEARCH_REJECTED = createAction('GET_SEARCH_REJECTED');
export const CLEAR_SEARCH = createAction('CLEAR_SEARCH');