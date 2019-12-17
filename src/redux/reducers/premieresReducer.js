import { createReducer } from "redux-starter-kit";
import { GET_PREMIERES_FULFILLED } from "../actions/moviesActions";

const initialState = {
  data: [],
  outstandMovie: []
};

export default createReducer(initialState, {
  [GET_PREMIERES_FULFILLED]: (state, action) => {
    const { results } = action.payload.data;
    const outstandMovie = results[Math.floor(Math.random() * results.length)];
    state.data = results;
    state.outstandMovie = outstandMovie;
  }
});
