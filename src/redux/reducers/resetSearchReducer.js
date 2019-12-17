import { createReducer } from "redux-starter-kit";
import { CLEAR_SEARCH } from "../actions/moviesActions";

const initialState = {
  data: []
};

export default createReducer(initialState, {
  [CLEAR_SEARCH]: (state, action) => {
    const { results } = action.payload.data;
    state.data = [];
  }
});