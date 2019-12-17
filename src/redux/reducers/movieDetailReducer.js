import { createReducer } from "redux-starter-kit";
import { GET_MOVIE_DETAILS_FULFILLED } from "../actions/moviesActions";

const initialState = {
  data: []
};

export default createReducer(initialState, {
  [GET_MOVIE_DETAILS_FULFILLED]: (state, action) => {
    const { data } = action.payload;
    state.data = data;
  }
});
