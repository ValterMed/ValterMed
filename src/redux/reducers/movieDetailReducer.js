import { createReducer } from "redux-starter-kit";
import { getMovieDetails } from "../actions/moviesActions";

const initialState = {
  data: []
};

export default createReducer(initialState, {
  [getMovieDetails]: (state, action) => {
    const { data } = action.payload;
    state.data = data;
  }
});
