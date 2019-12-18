import { createReducer } from "redux-starter-kit";
import { getPremieres } from "../actions/moviesActions";

const initialState = {
  data: [],
  outstandMovie: []
};

export default createReducer(initialState, {
  [getPremieres]: (state, action) => {
    console.log(action.payload.data);
    const { results } = action.payload.data;
    const outstandMovie = results[Math.floor(Math.random() * results.length)];
    state.data = results;
    state.outstandMovie = outstandMovie;
  }
});
