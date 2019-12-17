import { createReducer } from "redux-starter-kit";
import { GET_SEARCH_FULFILLED } from "../actions/moviesActions";

const initialState = {
  data: []
};

export default createReducer(initialState, {
  [GET_SEARCH_FULFILLED]: (state, action) => {
    const { results } = action.payload.data;
    state.data = results;
  }
});
